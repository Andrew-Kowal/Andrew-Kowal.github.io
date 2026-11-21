---
title: Machine Monitoring System
summary: Full-stack industrial dashboards built in Node-RED to track CNC/EDM machine status and utilization in real time.
tags: [Automation, Manufacturing]
tools: [Node-RED, JavaScript, HTML, SQL Server Express, MTConnect, OPC UA, UaExpert]
status: complete
order: 3
role: Operations Engineering Intern — Flex
gallery:
  - src: ../../assets/projects/machine-monitoring-system/node-red-flow-logic.png
    alt: Node-RED flow showing the backend logic for one machine — parsing the program name, calculating job runtime, and formatting weekly/monthly charts.
  - src: ../../assets/projects/machine-monitoring-system/tooling-analytics-dashboard.png
    alt: Live Tooling Analytics dashboard showing spindle/burn status, current job, and weekly/monthly hours for all 5 machines, with one job identifier redacted.
---

## Overview

A set of industrial dashboards built during a Flex internship to track machine status and utilization across the shop floor in real time, replacing manual operator reporting.

## The problem

CNC and EDM runtime in the tooling department was tracked manually. Roughly a quarter of machine activity went unlogged, and the entries that did exist varied in timing and accuracy, so management couldn't reliably measure utilization, tie production orders to real spindle hours, or confidently quote future work.

## What I built

Pulled live data from 5 machines (2 CNC, 1 wire EDM, 2 sinker EDM) using MTConnect — Node-RED polls the agent, converts the XML response to JSON, and parses it for Program and Execution events — and OPC UA, with node IDs mapped in UaExpert for program name and spindle-active status. Flows normalize and validate job names, accumulate runtime, and sync continuously to SQL Server Express, feeding a live tooling-analytics dashboard for all 5 machines.

<div class="diagram-wrap">
<svg viewBox="0 0 340 460" role="img" aria-labelledby="mms-title mms-desc" class="block-diagram">
  <title id="mms-title">Machine monitoring data pipeline</title>
  <desc id="mms-desc">CNC and EDM machines send status and runtime signals through Node-RED flows into SQL Server Express, which feeds live dashboards.</desc>
  <defs>
    <marker id="mms-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" class="diagram-arrowhead" />
    </marker>
  </defs>
  <style>
    .block-diagram rect { fill: var(--bg-raised); stroke: var(--border-strong); stroke-width: 1.5; }
    .block-diagram .node-title { fill: var(--text); font-family: var(--font-sans); font-size: 15px; font-weight: 600; text-anchor: middle; }
    .block-diagram .node-sub { fill: var(--text-muted); font-family: var(--font-mono); font-size: 11px; text-anchor: middle; }
    .block-diagram .diagram-line { stroke: var(--accent); stroke-width: 1.75; fill: none; }
    .diagram-arrowhead { fill: var(--accent); }
    .block-diagram .diagram-label { fill: var(--text-muted); font-family: var(--font-mono); font-size: 11px; }
  </style>

  <g>
    <rect x="20" y="20" width="300" height="70" rx="2" />
    <text x="170" y="52" class="node-title">CNC / EDM Machines</text>
    <text x="170" y="72" class="node-sub">5 machines, shop floor</text>
  </g>

  <line x1="170" y1="90" x2="170" y2="138" class="diagram-line" marker-end="url(#mms-arrow)" />
  <text x="190" y="112" class="diagram-label">MTConnect / OPC UA</text>

  <g>
    <rect x="20" y="140" width="300" height="70" rx="2" />
    <text x="170" y="172" class="node-title">Node-RED Flows</text>
    <text x="170" y="192" class="node-sub">parse, validate, accumulate runtime</text>
  </g>

  <line x1="170" y1="210" x2="170" y2="258" class="diagram-line" marker-end="url(#mms-arrow)" />
  <text x="190" y="238" class="diagram-label">logged</text>

  <g>
    <rect x="20" y="258" width="300" height="70" rx="2" />
    <text x="170" y="290" class="node-title">SQL Server Express</text>
    <text x="170" y="310" class="node-sub">4 tables · utilization queries</text>
  </g>

  <line x1="170" y1="328" x2="170" y2="376" class="diagram-line" marker-end="url(#mms-arrow)" />
  <text x="190" y="356" class="diagram-label">queried</text>

  <g>
    <rect x="20" y="376" width="300" height="70" rx="2" />
    <text x="170" y="408" class="node-title">Live Dashboards</text>
    <text x="170" y="428" class="node-sub">Uptime &amp; utilization trends</text>
  </g>
</svg>
<p class="mono diagram-caption">Simplified view of the real pipeline — see the gallery below for an actual flow.</p>
</div>

## Technical details

Job names coming off the machines don't always follow a clean naming convention, so the first step in each flow parses and validates the program name with regex, flagging anything non-conforming with an `XXX_` prefix rather than silently dropping it:

```js
// Parse Program Name — Node-RED function node
let data = msg.payload || {};
data.spindle = data.spindle ?? false;
data.programName = data.programName ?? "NO_JOB";

let raw = data.programName;
if (raw !== "NO_JOB") {
    // isolate the filename after the last path separator
    let parts = raw.split("\\");
    let file = parts[parts.length - 1];

    // strip the file extension
    let name = file.replace(/\.[^/.]+$/, "");

    // cut off everything before the first P1 or W1
    let startIndex = name.search(/(P1|W1)/i);
    if (startIndex !== -1) {
        name = name.substring(startIndex);
    }

    // flag anything that doesn't match the naming convention
    let isValid = /^(P1|W1)[A-Za-z0-9]{7}_[A-Za-z0-9]{4}(?:_.*)?$/i.test(name);
    if (!isValid) {
        name = "XXX_" + name;
    }
    data.programName = name;
}
```

Runtime is accumulated from timestamp deltas held in Node-RED's flow/context memory — not re-queried from the database on every tick — and resets cleanly when the active job changes:

```js
// Job Runtime Calc — Node-RED function node
let data = msg.data;
let db = msg.payload?.[0] || {};
let now = Date.now();

let lastTime = context.get("lastTime");
let currentJob = data.programName || "NO_JOB";
let lastJob = context.get("lastJob") || "NO_JOB";
let db_hours = db.OnTime ?? 0;
let total_ms = context.get("total_ms");

if (lastTime === undefined || total_ms === undefined) {
    // first run after a redeploy — seed from the database
    total_ms = db_hours * 3600000;
    context.set("lastTime", now);
    context.set("lastJob", currentJob);
    context.set("total_ms", total_ms);
    msg.on_time = db_hours;
    return msg;
}

let delta = now - lastTime;
if (data.spindle === true && currentJob !== "NO_JOB") {
    total_ms += delta;
}
if (currentJob !== lastJob) {
    total_ms = db_hours * 3600000; // job changed — reset against the stored baseline
}

context.set("lastTime", now);
context.set("lastJob", currentJob);
context.set("total_ms", total_ms);

msg.data.ontime = total_ms / 3600000;
return msg;
```

Storage migrated from a SQLite prototype to SQL Server Express, using 4 tables with unique constraints so runtime by job, day, week, and month survives restarts and only resets on a day or job rollover. Two networks were bridged with static IPs, subnetting, and a dual-homed industrial PC, connecting the secured legacy machine controllers to both the corporate network and the SQL/reporting systems. Per-machine heartbeat monitoring emails an alert when an OPC UA or MTConnect source drops (and when it recovers), and custom adapter quotes were sourced from about 10 vendors for legacy machines without native protocol support.

## Results

- Replaced manual logs that captured roughly 75% of real activity with automated, 1-second polling reaching about 99.8% coverage, removing reliance on operator reporting.
- Grew the rollout from a 2-machine pilot to all 5 machines, ahead of the original schedule.
- Helped secure $20K in additional funding on top of an initial $5K, for custom adapters and expansion.
- Gave operators live status and job visibility, and gave management accurate, job-level spindle and burn hours for utilization analysis, estimating, and quoting.
- The architecture and documentation became the foundation for Flex's broader machine-monitoring rollout, which is planned to extend to injection molding.

## What I'd do differently / Next steps

<!-- TODO: Andrew to add what he'd change or improve -->
