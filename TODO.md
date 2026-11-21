# TODO — open items from the build brief

Running list of everything marked `TODO:` or left open in `CLAUDE.md`. Check items off as Andrew provides them.

## Setup (Phase 0)
- [x] GitHub username — `Andrew-Kowal` → site will live at `https://andrew-kowal.github.io/`, repo name `Andrew-Kowal.github.io`
- [x] Custom domain — later, not now. Site built so one can be added without rework
- [ ] Install GitHub CLI (`gh`) before Phase 5 — `winget install --id GitHub.cli`

## Identity / content
- [ ] `resume.pdf` — Andrew to supply the file for `public/`

## Design (Phase 1)
- [x] Andrew picked direction **A — Blueprint** (navy/blue, Inter + JetBrains Mono, schematic-sheet feel)

## Copy (Phase 3)
- [x] Hero line picked: "Electrical engineering student building embedded hardware, PCBs, and industrial automation systems."
- [ ] About paragraph drafted (`src/components/About.astro`) — Andrew to review/edit to taste

## Project: Data Umbilical Bridge PCB (McGill Rocket Team)
- [ ] Check with Rocket Team lead before posting any schematic/layout/render
- [ ] Media: Altium 3D render, schematic snippets, layout screenshots (only if team allows)

## Project: Autonomous Rover (ECSE 211)
- [ ] Photos/video of the rover and any lab highlights to feature

## Project: Machine Monitoring System (Flex)
- [x] Permission granted (Nov 2026) to share this project, including a sanitized Node-RED flow export
- [ ] Confirm whether to name OPC-UA and/or MTConnect as the protocols used
- [ ] Confirm the 99.8% uptime figure before publishing
- [ ] If Andrew supplies a Node-RED flow export, sanitize it (strip machine/asset names, hostnames, IPs, ports, credentials, customer/program names — see §6) and show him the before/after list before it's committed

## Project: Automated Velcro Measure-and-Cut System (Pursuit Aerospace)
- [x] Permission granted (Nov 2026) to share this project, including code and photos (after sanitizing)
- [ ] Confirm the microcontroller used (likely Arduino)
- [ ] Sanitize any supplied code/photos per §6 and show Andrew the changes before committing

## Project: Shopping-Cart Go-Kart
- [ ] Drivetrain / power source details
- [ ] Build photos

## Project: Custom Drone
- [ ] Flight controller used
- [ ] Motors/ESCs
- [ ] Frame size
- [ ] Photos

## Project: Project Vantage (ESP32)
- [ ] What it does, hardware, firmware details (once finished)
- [ ] Keep `draft: true` until Andrew says it's ready, then flip to `draft: false`

## Media (Phase 4)
Drop files anywhere and tell Claude — they'll be moved/optimized into the right spot. Target locations below.
- [ ] Headshot → `src/assets/profile/headshot.jpg`
- [ ] `resume.pdf` → `public/resume.pdf`
- [ ] PCB render / schematic / layout screenshots (if Rocket Team lead allows) → `src/assets/projects/data-umbilical-bridge-pcb/`
- [ ] ECSE 211 rover photos/video → `src/assets/projects/autonomous-rover/`
- [ ] Go-kart build photos → `src/assets/projects/shopping-cart-go-kart/`
- [ ] Drone photos → `src/assets/projects/custom-drone/`
- [ ] Velcro cutter photo, sanitized per §6 → `src/assets/projects/velcro-measure-and-cut-system/`
- [ ] Flex dashboard screenshots, sanitized per §6 → `src/assets/projects/machine-monitoring-system/`
- [ ] OG/social preview image (1200×630) → `public/og-image.png` — can reuse the headshot or a project photo once chosen
- [ ] Custom favicon (currently the Astro scaffold default) — optional, can stay default

## Deploy (Phase 5)
- [x] Live at https://andrew-kowal.github.io/ — deployed via GitHub Actions on push to `main`
