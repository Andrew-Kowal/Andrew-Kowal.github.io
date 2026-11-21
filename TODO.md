# TODO — open items from the build brief

Running list of everything marked `TODO:` or left open in `CLAUDE.md`. Check items off as Andrew provides them.

## Setup (Phase 0)
- [x] GitHub username — `Andrew-Kowal` → site will live at `https://andrew-kowal.github.io/`, repo name `Andrew-Kowal.github.io`
- [x] Custom domain — later, not now. Site built so one can be added without rework
- [x] GitHub CLI installed and authenticated (incl. `workflow` scope for pushing `.github/workflows/`)

## Identity / content
- [x] `resume.pdf` — copied from Andrew's master resume into `public/resume.pdf`

## Design (Phase 1)
- [x] Andrew picked direction **A — Blueprint** (navy/blue, Inter + JetBrains Mono, schematic-sheet feel)

## Copy (Phase 3)
- [x] Hero line picked: "Electrical engineering student building embedded hardware, PCBs, and industrial automation systems."
- [ ] About paragraph drafted (`src/components/About.astro`) — Andrew to review/edit to taste

## Project: Data Umbilical Bridge PCB (McGill Rocket Team)
- [x] Technical specifics added from Andrew's resume: STM32F407 core, LAN8742AI Ethernet PHY, 6-sheet schematic (as text, not an image)
- [ ] Check with Rocket Team lead before posting any schematic/layout/render (images only — the text specifics above are already on Andrew's public resume)
- [ ] Media: Altium 3D render, schematic snippets, layout screenshots (only if team allows)

## Project: Autonomous Rover (ECSE 211)
- [x] **Hidden again (2026-11-21)** — course isn't actually finished (1 lab left); set back to `draft: true`, `status: in-progress`. Andrew: tell me when both this and Vantage are done and I'll publish them
- [x] Located the code: `Downloads/Organized/School/ECSE 211 - Design Principles/` (labs 1-4 + final project materials). Not reviewed/used yet — deliberately holding off until the project is done
- [ ] Photos/video of the rover and any lab highlights to feature (none yet)

## Project: Machine Monitoring System (Flex)
- [x] Flex gave explicit permission (2026-11-21) to publish the actual code; company logo/branding is fine
- [x] Found `Andrew_Kowal_Flex_Machine_Monitoring_Portfolio.docx` — a one-pager Andrew already wrote for this exact purpose; used it as the primary source for the rewritten project page (left out the supervisor's name/personal email — fine in a doc sent directly to an application, not for a public indexed site)
- [x] Pulled 2 real Node-RED function-node code snippets (job-name regex parser, runtime accumulator) from `Final Node-Red Program.json` — both were already clean (no credentials/IPs/hostnames)
- [x] Added 2 real screenshots to the gallery: the backend flow logic, and the Tooling Analytics dashboard (redacted one visible job/part number — `P15955010_D200_` — before using it)
- [x] Protocol naming resolved precisely: MTConnect + OPC UA were the core acquisition protocols from the start; the $20K (on top of an initial $5K) funded custom adapters/expansion to legacy machines without native protocol support
- [x] Uptime figure refined: ~75% (manual logging) → ~99.8% (automated, 1s polling) — kept the resume's "<5%" framing on the home page Experience bullet for consistency with the resume download, used the more precise figure on the project detail page
- [ ] Raw Node-RED JSON files and remaining screenshots (Dashboard_TV.jpeg, FlexDashboard.jpeg, Status Dashboard.jpg, etc.) not reviewed/used — only pulled 2 code snippets + 2 screenshots so far; say the word if you want more in the gallery

## Project: Automated Velcro Measure-and-Cut System (Pursuit Aerospace)
- [x] Permission granted (Nov 2026) to share this project, including code and photos (after sanitizing)
- [x] Microcontroller confirmed from photo: Arduino (Elegoo Uno R3)
- [x] 6 photos reviewed, sanitized where needed, and added to the gallery:
  - Cropped out a wall sign reading "INSPECTION DEPARTMENT" from one photo
  - Redacted a legible lot/part-number label on the Velcro roll packaging in another
  - Skipped 3 photos entirely (identifiable coworkers in the background, phone-UI chrome) — originals untouched, nothing published
- [ ] Andrew to add what he'd do differently / next steps
- [ ] `Measure_and_Cut_Demo.mov` exists but hasn't been reviewed/used — ask if he wants it embedded (would need the same sanitization pass)

## Project: Shopping-Cart Go-Kart
- [x] Drivetrain/steering/brake details added from photos: gas engine, chain-and-sprocket rear drive, steering column to front axle, cable-actuated hand brake
- [x] Built as a high school physics class project (poster covering velocity/acceleration, forces, friction, torque, impact, custom speedometer) — added to Overview/Results
- [x] 3 photos added to the gallery (1 cropped to remove a friend's face — kept the mechanical detail only)
- [ ] Andrew to add what he'd do differently / next steps

## Project: Custom Drone
- [x] 2 photos added (CAD airframe render + assembled quad) — both clean, no sanitization needed
- [x] Full build confirmed: DolphinRC F405 FC + 60A ESC, MEPS Neon 2207 2050KV motors, MK5X 5" frame, HQProp E-thix S5 props, DJI O3, SoloGood ELRS receiver + RadioMaster TX, Ovonic 6S 1300mAh
- [ ] Andrew to add the problem/motivation and what he'd do differently

## Project: Project Vantage (ESP32)
- [x] Confirmed (2026-11-21): not finished yet, Andrew wants to finish it soon
- [ ] Keep `draft: true` until Andrew confirms it's completely done (same as Autonomous Rover) — then write up the page and publish both together

## Needs Andrew's input
- [ ] **Custom Drone real photos** — only CAD files (.stl/.f3d/.obj) found in his folders; Andrew says a real photo is on his LinkedIn — need him to send/download it directly (not something to scrape from LinkedIn)
- [ ] **Autonomous Rover (ECSE 211) photos** — Andrew doesn't have one right now
- [ ] Noticed an SSH private key and a shell config backup sitting in `Downloads/Organized/Personal/Misc/` — unrelated to this site, but flagged as a security loose end worth moving somewhere less exposed

## Media (Phase 4)
Drop files anywhere and tell Claude — they'll be moved/optimized into the right spot.
- [x] Headshot → `src/assets/profile/headshot.png`, in the About section
- [x] `resume.pdf` → `public/resume.pdf`
- [x] Go-kart build photos → `src/assets/projects/shopping-cart-go-kart/`
- [x] Velcro cutter photos → `src/assets/projects/velcro-measure-and-cut-system/`
- [x] Flex flow/dashboard screenshots, sanitized → `src/assets/projects/machine-monitoring-system/`
- [ ] PCB render / schematic / layout screenshots (if Rocket Team lead allows) → `src/assets/projects/data-umbilical-bridge-pcb/`
- [ ] Drone photo (on Andrew's LinkedIn — he needs to send it directly)
- [ ] Rover photo — none available right now
- [ ] OG/social preview image (1200×630) → `public/og-image.png` — can reuse the headshot or a project photo once chosen
- [ ] Custom favicon (currently the Astro scaffold default) — optional, can stay default

## Deploy (Phase 5)
- [x] Live at https://andrew-kowal.github.io/ — deployed via GitHub Actions on push to `main`

## QA (Phase 6)
- [x] Mobile layout at 375px — no horizontal overflow, home or project pages
- [x] Lighthouse mobile, live site: Performance 96 · Accessibility 100 · Best Practices 100 · SEO 100
- [x] Fixed a 0.33 CLS (layout shift) caused by default web-font loading behavior
- [x] No console errors on home or project pages
- [x] Keyboard navigation — visible focus outlines confirmed on nav links and skip link
- [x] No broken links/pages — all 6 live project pages, sitemap, favicons return 200; draft project and missing resume.pdf correctly 404 (expected until supplied)
- [x] 404 page renders correctly with real 404 status
- [x] Open Graph / Twitter meta tags present (title, description) — `og:image` still pending a real image, see Media section
- [x] Alt text — nothing to audit yet; **no photos exist on the site yet**, so this must be re-checked once Phase 4 media is added
- [x] `README.md` rewritten for handoff — local preview, adding a project, updating photos/resume, publishing, custom domain later
- [ ] Re-run this whole checklist once real photos + resume PDF are added (media changes performance/CLS/alt-text results)
