---
title: Automated Velcro Measure-and-Cut System
summary: A C++ automated measure-and-cut system for Velcro, built for a flight-critical aerospace manufacturing line at Pursuit Aerospace.
tags: [Embedded, Manufacturing]
tools: [C++, Arduino, BLDC motor, Rotary encoder, LCD, CREFORM, Fusion 360 CAD, 3D printing]
status: complete
order: 4
role: Continuous Improvement Engineering Intern — Pursuit Aerospace
gallery:
  - src: ../../assets/projects/velcro-measure-and-cut-system/cut-head-full-assembly.jpg
    alt: Full measure-and-cut head assembled on a CREFORM extrusion frame, with the brightness/reset control panel and LCD readout mounted above it.
  - src: ../../assets/projects/velcro-measure-and-cut-system/cutting-mechanism-closeup.jpg
    alt: Close-up of the cutting mechanism, showing the blade assembly mounted to the CREFORM frame with 3D-printed brackets.
  - src: ../../assets/projects/velcro-measure-and-cut-system/cut-head-topdown.jpg
    alt: Top-down view of the cutting head and Cut button, looking straight down the CREFORM frame.
  - src: ../../assets/projects/velcro-measure-and-cut-system/lcd-readout-panel.jpg
    alt: Close-up of the LCD readout showing a measured length in inches, next to the green reset button and brightness dial.
  - src: ../../assets/projects/velcro-measure-and-cut-system/velcro-roll-dispensers.jpg
    alt: Top-down view of the two Velcro roll dispensers feeding into the cutting head.
  - src: ../../assets/projects/velcro-measure-and-cut-system/perfboard-arduino-wiring.jpg
    alt: Arduino Uno wired to a perfboard breakout during bring-up and testing.
---

## Overview

An automated measure-and-cut system for Velcro, built to replace a manual step in a flight-critical aerospace component manufacturing line at Pursuit Aerospace.

## The problem

Measuring and cutting Velcro by hand was slow and inconsistent within a one-piece flow manufacturing line.

## What I built

Programmed a C++ automated measure-and-cut system on an Arduino, and soldered its BLDC motor, rotary encoder, and LCD. The frame is CREFORM with CAD-designed, 3D-printed parts.

## Technical details

- Arduino-based control, with the measured length read out live on an LCD panel.
- A rotary encoder tracks Velcro feed length to trigger the cut at the right point; a BLDC motor drives the feed.
- A reset button and brightness dial on the control panel let an operator clear a reading and adjust the LCD for shop-floor lighting.
- Mechanical structure built from CREFORM extrusion with 3D-printed, CAD-designed mounting brackets for the cutting head and roll dispensers.

## Results

Contributed to a 50%+ improvement in one-piece flow line efficiency across the broader continuous-improvement effort, alongside Kaizen events and Lean/Six Sigma initiatives.

## What I'd do differently / Next steps

<!-- TODO: Andrew to add what he'd change or improve -->
