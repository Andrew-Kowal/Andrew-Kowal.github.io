---
title: Machine Monitoring System
summary: Full-stack industrial dashboards built in Node-RED to track CNC/EDM machine status and utilization in real time.
tags: [Automation, Manufacturing]
tools: [Node-RED, JavaScript, HTML, SQL Server Express]
status: complete
order: 3
role: Operations Engineering Intern — Flex
---

## Overview

A set of industrial dashboards built during a Flex internship to track machine status and utilization across the shop floor in real time, replacing manual operator reporting.

## The problem

Machine uptime was being tracked manually by operators, which was unreliable, and there was no live visibility into CNC/EDM machine status or utilization trends.

## What I built

Developed full-stack dashboards for 5 CNC/EDM machines in Node-RED using JavaScript and HTML, with automated pipelines logging machine runtime and status signals into SQL Server Express across 4 tables queried for utilization trends.

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
  <text x="190" y="112" class="diagram-label">status / runtime</text>
  <text x="190" y="126" class="diagram-label">signals</text>

  <g>
    <rect x="20" y="140" width="300" height="70" rx="2" />
    <text x="170" y="172" class="node-title">Node-RED Flows</text>
    <text x="170" y="192" class="node-sub">JavaScript + HTML dashboards</text>
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
<p class="mono diagram-caption">Generic diagram — not actual machine names, hostnames, or Node-RED flow exports.</p>
</div>

## Technical details

<!-- TODO: confirm with Andrew whether to name OPC-UA and/or MTConnect as the protocols used to pull machine data (his resume lists both) -->

## Results

Raised machine uptime tracking from under 5% to 99.8% <!-- TODO: confirm this figure before publishing -->, removing reliance on operator reporting, and secured $20K in additional project investment. Also managed industrial machine networking and sourced vendor quotes for aftermarket machine upgrades.

## What I'd do differently / Next steps

<!-- TODO: if Andrew supplies a Node-RED flow export, sanitize it per CLAUDE.md §6 (strip machine/asset names, hostnames, IPs, credentials, customer/program names) and link it here, after showing him the before/after changes -->
