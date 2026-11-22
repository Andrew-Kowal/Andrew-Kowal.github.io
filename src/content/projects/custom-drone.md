---
title: Custom Drone
summary: A custom FPV drone, CAD-designed from scratch, 3D-printed in carbon-fiber-reinforced filament, and hand-wired and flight-tested.
tags: [Embedded, Aerospace]
tools:
  [
    Fusion 360 CAD,
    3D printing,
    Soldering,
    Betaflight,
    DolphinRC F405,
    MEPS Neon 2207,
    DJI O3,
    ExpressLRS,
  ]
status: complete
order: 6
role: Personal project
gallery:
  - src: ../../assets/projects/custom-drone/airframe-cad-render.jpg
    alt: CAD render of the custom 3D-printed quadcopter airframe, isometric view showing the electronics bay and arms.
  - src: ../../assets/projects/custom-drone/airframe-cad-render-2.jpg
    alt: CAD render of the airframe's top cover geometry and mounting posts.
  - src: ../../assets/projects/custom-drone/flight-stack-wiring.jpg
    alt: Close-up of the soldered flight controller and ESC stack wired into the frame.
  - src: ../../assets/projects/custom-drone/assembled-quad.jpg
    alt: The assembled quadcopter on a desk next to its RadioMaster transmitter, with the flight controller stack and wiring visible.
---

## Overview

A custom FPV quadcopter, designed from scratch rather than assembled from a kit: a CAD-modeled, 3D-printed airframe with a hand-soldered and wired flight stack, flight-tested and flown successfully.

## The problem

Off-the-shelf drone kits come with the frame and mounting already figured out. The goal was to design and build a quadcopter from scratch instead — modeling the airframe, 3D-printing it, and mounting and wiring the flight electronics around it rather than assembling a kit.

## What I built

Iterated on the frame design in Fusion 360 — arms, motor mounts, a central electronics bay, mounting posts, and triangulated ribs for stiffness — modeling the battery and motors as assembly components to check fit and clearance before finalizing the geometry. 3D-printed the frame in carbon-fiber-reinforced filament for extra strength and assembled the physical airframe from the printed parts, then soldered the motor, ESC, flight controller, and receiver connections and routed the power wiring around the frame.

## Technical details

- Frame: 5-inch freestyle quadcopter airframe (MK5X), CAD-designed in Fusion 360 and 3D-printed in carbon-fiber-reinforced filament.
- Flight controller / ESC: DolphinRC F405 flight controller paired with a 60A 4-in-1 ESC.
- Motors / props: MEPS Neon 2207 2050KV brushless motors, HQProp E-thix S5 props.
- Power: 6S system using an Ovonic 1300mAh LiPo with an XT-style battery lead and high-current wiring to the ESC and motors.
- Video: DJI O3 digital FPV system.
- Radio: SoloGood ExpressLRS (ELRS) receiver, bound and configured to a RadioMaster transmitter.
- Flashed the flight controller with Betaflight and bench-tested the electronics, motor directions, and control response before flying.

## Results

Flew the drone successfully after assembly, with stable flight and no major issues — taking the build from a CAD model, through a printed frame, to a working, flight-tested quadcopter.

## What I'd do differently / Next steps

<!-- TODO: Andrew to add -->
