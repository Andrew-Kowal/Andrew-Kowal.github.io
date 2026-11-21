# Portfolio Website — Build Brief for Claude Code

You are helping Andrew Kowal build a personal engineering portfolio website from scratch. Andrew will paste the live URL into job and internship applications, his resume header, and LinkedIn. This file is the full brief and stays in the project root as the standing instructions for every session.

---

## 0. How to work with Andrew (read first)

- **Go phase by phase and STOP at the end of each phase.** Summarize what you did, tell Andrew how to look at it, list any questions, and wait for him to say "go" before starting the next phase. Don't get ahead of him, and don't start a later phase on your own.
- **He's on Windows.** Use PowerShell-compatible commands. Check for prerequisites before using them (Node.js LTS, npm, Git, GitHub CLI `gh`). If something is missing, give him the exact install step and wait.
- **He's not strong with Git.** Run the git commands yourself, and explain each one in one plain line the first time it comes up. At the end, leave him a short cheat sheet in the README.
- **Ask, don't invent.** Use only the content in this brief. When something is missing (a photo, a GitHub username, a detail), put a visible `TODO:` placeholder in it and add it to a running list in `TODO.md`. Never make up metrics, quotes, testimonials, project results, or skills.
- Andrew is an EE student, so technical vocabulary is fine. Keep explanations short.
- **Deadline: the site should be live by the end of McGill fall finals (about December 22, 2026)**, in time for winter application season. Andrew has finals from early to late December, so keep each phase a short session.

---

## 1. Goal and audience

**What the site needs to do:** make Andrew look like a hands-on electrical engineer who builds real hardware and the software that runs it, so a recruiter sees it in 30 seconds and a hiring engineer finds something worth asking about.

**Two readers:**
1. **Recruiter or HR (30–60 seconds):** name, what he does, school/GPA/grad year, citizenship, internships, resume download, and contact, all above the fold or one click away.
2. **Hiring engineer (5+ minutes):** project pages with real technical depth: block diagrams, design decisions, tradeoffs, photos of real hardware, and what he'd do differently.

**Target roles the site should lean toward:** embedded systems / firmware, electrical engineering (PCB, power), industrial automation / controls, and aerospace & defense manufacturing. Companies he targets include RTX / Pratt & Whitney, Siemens, Texas Instruments, Honeywell, Rockwell Automation, and Bombardier.

---

## 2. Tech stack and hosting

- **Framework:** Astro (latest stable), static output. Store each project as a Markdown/MDX file in a content collection, so Andrew can add a new project later by copying one file.
- **Styling:** plain CSS with CSS custom properties (or Tailwind if you think it's clearly simpler to maintain; explain the choice in one line). No heavy UI frameworks and no client-side JS unless it's needed.
- **Hosting:** GitHub Pages, deployed by the official Astro GitHub Action on every push to `main`. The default URL is `https://<github-username>.github.io/`. Set things up so a custom domain (e.g. `andrewkowal.com`) can be added later without rework, and explain in the README how to add one.
- **Performance budget:** Lighthouse 90+ in all four categories on mobile. Optimize images with Astro's image tooling. Self-host fonts or use a system font stack.

---

## 3. Site structure

**Home page (a single scrolling page):**
1. **Hero:** name, one-line positioning statement (draft 2–3 options for Andrew to pick from; e.g. "Electrical engineering student building embedded hardware, PCBs, and industrial automation systems"), "McGill EE '28 · 3.90 GPA · US & Canadian Citizen", and buttons: **Resume (PDF)**, **LinkedIn**, **Email**, **GitHub**.
2. **Featured projects:** a card grid. Each card has a photo, title, one-line summary, tags, and an "In progress" badge where relevant. Add tag filters: `Embedded`, `PCB`, `Automation`, `Robotics`, `Manufacturing`, `Aerospace`.
3. **Experience:** a short timeline of the two internships, 2–3 lines each, with links to the related project pages.
4. **Skills:** grouped exactly like the resume (Electrical / Automation / Manufacturing / Programming). Don't use skill bars or percentages.
5. **About:** a short, human paragraph (see §5).
6. **Contact:** email and LinkedIn. **Don't put a phone number on the site.**

**Project detail pages (one per project), all using the same template:**
- Overview (2–3 sentences), My role, Status
- The problem
- What I built: architecture / block diagram, key design decisions and *why*
- Technical details (power, protocols, controllers, code, as applicable)
- Results (only real ones from this brief)
- What I'd do differently / next steps
- Tools used (as tags)
- Photo gallery

**Other:**
- `/resume.pdf`: Andrew will supply the PDF. Add a TODO until he does.
- 404 page, favicon, and Open Graph / Twitter meta with a clean preview image, so the link looks good when pasted into LinkedIn or an application.
- Sitemap and sensible `<title>`/description tags.

---

## 4. Design direction

- Clean, technical, and confident. It should feel like an engineer's site, not a template. Generous whitespace, strong typography, one accent color, and a light/dark theme that follows the system setting.
- Subtle engineering touches are welcome if they stay tasteful (e.g. a faint grid or PCB-trace motif, a monospace accent font for tags and specs). No gimmicky animations, no particle backgrounds, and no typing effects.
- Mobile-first. Many recruiters will open the link on a phone.
- Accessibility: semantic HTML, alt text on every image, visible focus states, AA color contrast, keyboard-navigable.
- **In Phase 1, describe 2 design directions in words (palette, fonts, layout feel) and let Andrew pick before building.**

---

## 5. Content (the source of truth; don't add to it)

### Identity
- **Name:** Andrew H. Kowal
- **Tagline:** Electrical Engineering Student, Eagle Scout
- **School:** McGill University, B.Eng. Electrical Engineering, expected 2028. 3.90 GPA. 2025 Presidential Student Athlete Honor Roll.
- **Relevant coursework:** Signals & Systems, Data Structures & Algorithms, Logic Design, Controls, Programming. Power Engineering and Electronics are coming in Winter 2027.
- **Citizenship:** US & Canadian (worth showing; it matters for aerospace/defense roles)
- **Email:** andrew.kowal@mail.mcgill.ca
- **LinkedIn:** https://linkedin.com/in/andrew-henry-kowal
- **GitHub:** TODO (ask Andrew)
- **Location line:** Simsbury, CT / Montreal, QC

### About (draft from these facts only; let Andrew edit)
- Grew up in Simsbury, Connecticut. Touring Pratt & Whitney's East Hartford campus in his senior year of high school and seeing jet engines up close pushed him toward engineering.
- Eagle Scout (Troop 175, Simsbury). His Eagle Project was a nature-center exhibit.
- Played on McGill men's varsity rugby (flanker) and captained his high school rugby team.
- Started a lawn care business in high school.
- Volunteers on the grill at the Engineering Undergraduate Society bar on Fridays and was a captain for ECSE Week.
- Outside engineering: hiking, skiing, chess.
- Wants to work in aerospace. Interested in embedded systems, firmware, and industrial automation.

### Experience
**Flex: Operations Engineering Intern** (June–August 2026)
- Developed full-stack industrial dashboards for 5 CNC/EDM machines in Node-RED using JavaScript and HTML.
- Built automated pipelines logging machine runtime and status signals to SQL Server Express (4 tables queried for utilization trends).
- Raised machine uptime tracking from <5% to 99.8%, removing reliance on operator reporting. ← TODO: Andrew to confirm this figure before publishing.
- Secured $20K in additional project investment.
- Managed industrial machine networking and sourced vendor quotes for aftermarket machine upgrades.

**Pursuit Aerospace: Continuous Improvement Engineering Intern** (May–August 2025)
- Improved one-piece flow line efficiency by 50%+ in flight-critical aerospace component manufacturing.
- Programmed a C++ automated measure-and-cut system for Velcro, and soldered its BLDC motor, rotary encoder, and LCD.
- Applied Arduino, NX/Fusion 360 CAD, and CREFORM across multiple improvement projects.
- Supported engineers and operators in Kaizen events and Lean/Six Sigma initiatives.

### Projects (Andrew's picks, in display order)

Exactly these seven get project pages. McGill Formula Electric does **not** get a project page or a card in the projects section. It only appears in Leadership & activities. Don't add any machine-learning or PyTorch project.

1. **Data Umbilical Bridge PCB: McGill Rocket Team** · Tags: PCB, Embedded, Aerospace · **Status: In progress**
   - Avionics division, Flight Computer Hardware subteam, R&D member.
   - Purpose: turn the launch pad's power umbilical into a wired data + power link to the rocket.
   - STM32-based, PoE-powered Ethernet-to-CAN bridge PCB designed in Altium.
   - 25.2 V / 5 A power path with fusing, TVS clamping, and 7 A overcurrent sensing.
   - Timeline: design in fall 2026; fabrication, hand-soldering, and board bring-up (power-rail checks, SWD flashing, CAN/Ethernet debugging) planned for Jan–Feb 2027. **Present bring-up as planned or in progress, not done**, until Andrew says otherwise.
   - Media: TODO (Altium 3D render, schematic snippets, and layout screenshots, **only if the Rocket Team allows sharing**. Andrew to check with his lead.)

2. **Autonomous Rover: ECSE 211 Design Project** · Tags: Robotics, Embedded
   - Team lead for a team of 6 through 4 labs and a final project. Built Gantt charts and wrote the technical reports.
   - Programmed bang-bang/P controllers, odometry, and finite-state machines in Python on a Raspberry Pi.
   - Rover hardware with ultrasonic and light sensors, wheel encoders, and conveyor-belt mechanisms.
   - TODO: Andrew to supply photos/video of the rover and any lab highlights he wants featured.

3. **Machine Monitoring System (Node-RED): Flex internship** · Tags: Automation, Manufacturing
   - Use the Flex experience bullets above as the content.
   - Architecture to illustrate with a **generic** block diagram you draw (SVG): CNC/EDM machines → machine data (status/runtime signals) → Node-RED flows → SQL Server Express → live dashboards. TODO: Andrew to confirm which protocols to name (his resume lists OPC-UA and MTConnect).
   - Andrew has permission to share this. If he supplies the Node-RED flow export, add a sanitized version (see §6) and link it from the page.

4. **Automated Velcro Measure-and-Cut System: Pursuit Aerospace** · Tags: Embedded, Manufacturing
   - C++ automated measure-and-cut system for Velcro. Andrew soldered the BLDC motor, rotary encoder, and LCD. The frame is CREFORM with CAD-designed 3D-printed parts.
   - Andrew has permission to share this. TODO: confirm the microcontroller (likely Arduino). Use the code and photos he supplies after sanitizing them (see §6).

5. **Shopping-Cart Go-Kart: personal project** · Tags: Manufacturing
   - Built a go-kart from a recycled shopping cart, including the steering, chassis, and braking system.
   - TODO: Andrew to add details (drivetrain/power source, build photos).

6. **Custom Drone: personal project** · Tags: Embedded, Aerospace
   - Designed and 3D-printed a custom airframe in CAD, soldered and assembled all electronics, and tuned/debugged in Betaflight.
   - TODO: Andrew to add details (flight controller, motors/ESCs, frame size, photos).

7. **Project Vantage: ESP32 embedded build** · Tags: Embedded · **Status: In progress, hidden until finished**
   - ESP32-based embedded systems project Andrew is still building.
   - TODO: Andrew to supply what it does, the hardware, and the firmware details once it's done.
   - Build the page from the template, but mark it `draft: true` in its frontmatter so it **doesn't show on the live site**. Explain to Andrew how to flip it to `draft: false` and publish once Vantage is finished.

### Skills (mirror the resume)
- **Electrical:** Altium PCB design, wire harness assembly, soldering, oscilloscope, function generator, multimeter
- **Automation:** Node-RED, OPC-UA, MTConnect, SQL Server Express, SQLite, Arduino, Raspberry Pi
- **Manufacturing:** Lean, Kaizen, Six Sigma, CREFORM, NX & Fusion 360 CAD, 3D printing, MIG welding
- **Programming:** Python, C++, JavaScript, SQL, VHDL (Quartus, ModelSim), MATLAB

### Leadership & activities
- McGill Rocket Team: Flight Computer Hardware (2026–present)
- McGill Formula Electric: Harness Sub-Team (2025–2026)
- McGill Men's Varsity Rugby: Flanker (2024–2026)
- Boy Scouts of America: Eagle Scout, Assistant Senior Patrol Leader (2018–2024)

---

## 6. Confidentiality rules (strict)

Flex and Pursuit Aerospace are real employers, and Pursuit makes flight-critical aerospace parts.
- **Andrew has permission from both Flex and Pursuit to share these projects** (Nov 2026). Code, Node-RED flow exports, and photos he supplies can be used.
- **Sanitize everything before it's published, even with permission.** Strip or replace machine names, asset IDs, hostnames, IP addresses, ports, credentials and connection strings, database/server names, customer and program names, part numbers, and plant layouts. In Node-RED JSON, check every node's config, `func` bodies, and credential fields, and use generic names like `CNC-1` and `db-server`. In photos, check backgrounds for whiteboards, screens, labels, and parts.
- Show Andrew a list of everything you changed or removed before committing any of it, so he can confirm it matches what he got permission for.
- Rocket Team designs: Andrew checks with his team lead before any schematic or layout is posted.

---

## 7. Phases (stop after each one)

**Phase 0: Setup and questions**
- Check Node.js, npm, git, and gh. Report what's installed and what's missing.
- Ask Andrew for his GitHub username and whether he wants a custom domain now or later. (The project list is already decided in §5.)
- Create `TODO.md` with every open item from this brief.

**Phase 1: Design direction**
- Describe 2 design directions in words. Andrew picks one.

**Phase 2: Scaffold and layout**
- Create the Astro project, base layout, theme, and all sections and pages using the real content above, with clearly marked TODO placeholders for images.
- Run the dev server and tell Andrew the local URL to open (`npm run dev`, usually http://localhost:4321).

**Phase 3: Project pages**
- Build every confirmed project page from the template, including the SVG block diagrams for the Data Umbilical board and the Flex monitoring system.
- Draft the hero line options and the About paragraph for Andrew to edit.

**Phase 4: Media**
- Give Andrew a photo shot list: headshot; PCB render (if allowed); ECSE 211 rover; go-kart; drone; Velcro cutter; Flex dashboard screenshots (sanitized). Real photos of real hardware beat stock images every time.
- Add the images he supplies to `src/assets/` (optimized, with alt text) and the resume PDF to `public/`.

**Phase 5: Deploy**
- Create the GitHub repo (`<username>.github.io` for the root URL), add the GitHub Pages Action workflow, push, and confirm the live URL loads.
- Explain each git and gh step in one line.

**Phase 6: QA and handoff**
- Check: mobile at 375px, Lighthouse 90+ on mobile, no console errors, no broken links, resume PDF downloads, the Open Graph preview renders (check with a link-preview debugger), favicon, 404 page, keyboard navigation, alt text everywhere.
- Write `README.md` covering how to preview locally, how to add a new project (copy one Markdown file), how to update the resume PDF, how to publish changes (the 3 git commands: `git add .`, `git commit -m "..."`, `git push`), and how to add a custom domain later.
- Hand Andrew a final list of anything still marked TODO.
