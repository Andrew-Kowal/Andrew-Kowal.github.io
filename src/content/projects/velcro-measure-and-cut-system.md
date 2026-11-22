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

Velcro used in the Kaizen department at Pursuit Aerospace was measured and cut by hand, a repetitive task that slowed down the workshop and made it hard to see exactly how much material had been pulled. The goal was a dispenser that measured the pulled length automatically, displayed it clearly, and let an operator cut it at the press of a button.

## What I built

Programmed a C++ Arduino Uno that reads rotary encoder pulses, converts rotation into a measured length, updates the LCD readout in real time, and reads a dedicated button press to trigger the cut. Wired the full circuit — potentiometer, LCD, BLDC motor, resistors, rotary encoder, and the reset and cut buttons — onto a perfboard, soldering each connection directly for a permanent, durable build. Designed the feed and cutting components in Fusion 360 and 3D-printed them to fit the frame, motor mount, rotary encoder, and cutting hardware, then built the main structure from CREFORM tubing and connectors.

Tried a few different cutting approaches, including a servo-driven concept, before landing on a repurposed Ryobi cordless pruning-shears head — powered by its original Ryobi battery and driven by its own BLDC motor — for the torque and blade geometry needed to cut through Velcro cleanly. Added guarding around the cutting area and blade to keep the operator's hands clear during a cut.

## Technical details

- Arduino Uno control, with the measured length read out live on an LCD panel.
- A rotary encoder tracks Velcro feed length to trigger the cut at the right point; a repurposed Ryobi pruning-shears head (its own BLDC motor and battery) does the cutting.
- A reset button and brightness potentiometer on the control panel let an operator clear a reading and adjust the LCD for shop-floor lighting.
- Mechanical structure built from CREFORM extrusion with 3D-printed, CAD-designed mounting brackets for the cutting head and roll dispensers, plus guarding around the blade.

## Results

Delivered a functional shop-floor prototype that measures Velcro length and cuts it at the press of a button, giving operators a clear visual reference — the measured length in inches — instead of relying on manual measuring alone. Contributed to a 50%+ improvement in one-piece flow line efficiency across the broader continuous-improvement effort, alongside Kaizen events and Lean/Six Sigma initiatives.

## What I'd do differently / Next steps

<!-- TODO: Andrew to add what he'd change or improve -->
