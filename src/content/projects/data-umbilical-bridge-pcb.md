---
title: Data Umbilical Bridge PCB
summary: An STM32-based, PoE-powered Ethernet-to-CAN bridge that turns the launch pad's power umbilical into a wired data and power link to the rocket.
tags: [PCB, Embedded, Aerospace]
tools: [Altium, STM32F407, LAN8742AI Ethernet PHY, CAN bus, PoE, SWD]
status: in-progress
order: 1
draft: true
role: R&D member, Avionics division, Flight Computer Hardware subteam — McGill Rocket Team
---

## Overview

The Data Umbilical Bridge is an STM32-based, PoE-powered Ethernet-to-CAN bridge PCB designed in Altium for the McGill Rocket Team. It turns the launch pad's power umbilical into a single wired link that carries both data and power to the rocket before liftoff.

## The problem

Before launch, the rocket's avionics need to exchange data with ground support equipment and receive power over the umbilical connection, without relying on a separate data harness alongside the power feed.

## What I built

A bridge board that converts Ethernet traffic from ground support equipment into CAN bus traffic for the rocket's avionics (and back), powered over the same connection via PoE. The board is built around an STM32 microcontroller and laid out in Altium.

<div class="diagram-wrap">
<svg viewBox="0 0 340 360" role="img" aria-labelledby="dub-title dub-desc" class="block-diagram">
  <title id="dub-title">Data Umbilical signal and power path</title>
  <desc id="dub-desc">Ground support equipment connects over PoE Ethernet to the STM32 bridge PCB, which converts the link to CAN bus for the rocket avionics.</desc>
  <defs>
    <marker id="dub-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
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
    <text x="170" y="52" class="node-title">Ground Support Equipment</text>
    <text x="170" y="72" class="node-sub">Launch pad power umbilical</text>
  </g>

  <line x1="170" y1="90" x2="170" y2="138" class="diagram-line" marker-end="url(#dub-arrow)" />
  <text x="190" y="112" class="diagram-label">PoE Ethernet —</text>
  <text x="190" y="126" class="diagram-label">data + power</text>

  <g>
    <rect x="20" y="140" width="300" height="90" rx="2" />
    <text x="170" y="172" class="node-title">STM32 Bridge PCB</text>
    <text x="170" y="190" class="node-sub">25.2V / 5A power path</text>
    <text x="170" y="204" class="node-sub">fused · TVS clamped · 7A OC sense</text>
  </g>

  <line x1="170" y1="230" x2="170" y2="278" class="diagram-line" marker-end="url(#dub-arrow)" />
  <text x="190" y="258" class="diagram-label">CAN bus</text>

  <g>
    <rect x="20" y="278" width="300" height="70" rx="2" />
    <text x="170" y="310" class="node-title">Rocket Avionics</text>
    <text x="170" y="330" class="node-sub">Flight computer</text>
  </g>
</svg>
<p class="mono diagram-caption">Generic diagram — not an actual schematic or layout.</p>
</div>

## Technical details

- Power path: 25.2 V at up to 5 A, with fusing, TVS clamping for transient protection, and overcurrent sensing at 7 A.
- Ethernet-to-CAN bridging handled by an STM32F407 core paired with a LAN8742AI Ethernet PHY.
- Power delivered over the same Ethernet connection via Power over Ethernet (PoE).
- Captured as a 6-sheet schematic in Altium.

## Results

Design work is underway in fall 2026. Fabrication, hand-soldering, and board bring-up — power-rail checks, SWD flashing, and CAN/Ethernet debugging — are planned for January–February 2027. This project is in progress; results will be added after bring-up.

## What I'd do differently / Next steps

- Complete board bring-up in Jan–Feb 2027: verify power rails, flash firmware over SWD, and debug CAN/Ethernet communication.

<!-- TODO: revisit this section with real bring-up learnings once complete -->
