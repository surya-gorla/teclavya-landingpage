# Teclavya — Living Career Blueprint

An independent, interactive landing-page **design concept** for Teclavya. This is **not** the production Teclavya website and does not modify the CEO's `Teclavya/teclavya-web` repository.

## Preview

Open `index.html` in a modern browser, or run a local static server:

```sh
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

The project is intentionally dependency-free: semantic HTML, CSS 3D/2.5D, inline SVG and vanilla JavaScript. It works on static hosting without an API, backend, build service, or third-party scripts.

## What to explore

- Select **Java backend**, **Cloud & DevOps**, **AI / ML**, or **More paths** to reconfigure the five-node career instrument, role-aware roadmap and diagnostic.
- Click skill nodes in the hero to see the focus shift.
- Step through the five connected stages to see how the concept explains Teclavya's product journey.
- Complete a real three-question, role-specific diagnostic; the result is explicitly an **introductory preview**, not a verified job readiness score.
- View the illustrative skill path, sample workplace pull-request review, and evidence progression.

## Design principles

1. Product-first visualization, not a stock 3D graphic.
2. One strong spatial hero object; UI controls remain accessible and readable.
3. Minimal copy and clear primary CTA.
4. Career-specific content rather than fake personal progress.
5. No fabricated testimonials, placements, learner totals, or readiness claims.
6. Respect `prefers-reduced-motion`, visible focus styles, and mobile layouts.

## Technical notes

- `index.html`: semantic document and layout.
- `styles.css`: original responsive composition, CSS 3D/layering and motion.
- `teclavya-light.css`: **current presentation theme**. Uses authenticated Teclavya Web light UI tokens (soft slate canvas, white cards, indigo-to-purple actions, Inter + Plus Jakarta Sans font stacks). It sits after the base stylesheet to keep the model behavior unchanged.
- `app.js`: career registry, interactive skills, guest quiz, journey state.
- `favicon.svg`: provisional concept mark, **not an official Teclavya brand asset**.

The guest career mapping is intentionally local to the preview. Integration into the original Teclavya Web must normalize its career slugs and use authoritative readiness sources. The 3-question demonstration is not a substitute for production assessment infrastructure.

## Design review / hook

The first screen presents the outcome promise, a career selection control, and a visible interactive capability model. The primary CTA says **Try the 60-second check** and the adjacent copy emphasizes **three questions / no account required**. The user can then experience the complete five-stage journey.

The palette follows `Teclavya/teclavya-web` authenticated design tokens in `src/index.css` and `src/styles/warm-theme.css`, rather than the separate dark public landing aesthetic. The preview's header and footer use Teclavya's original logo from `Teclavya/teclavya-web`; the SVG favicon remains a provisional concept mark.

## Visual QA targets

Viewport checks: 1440px desktop, 768px tablet, 375px mobile. Verify hero copy does not clip, the career model remains legible, the quiz works with mouse and keyboard, the menu closes on selection, and navigation anchors scroll to the intended section.

## Attribution / review

Created as a standalone concept preview for discussion with the Teclavya team. Product descriptions are conceptual and any code review, score, simulated project or credential shown is labeled illustrative.


## Conversion and visual-fidelity refinements (2026-10-10)

The standalone preview follows the authenticated Teclavya light design tokens rather than the CEO's separately certified dark *public* homepage. The main hero now leads with the exact career outcome in Issue #49 while the signature interactive blueprint remains. The 60-second diagnostic appears immediately after the hero, followed by a role-specific sample path; all results remain illustrative, not validated job-readiness claims. See `research/first-impression-study.md` for the prospective-student validation protocol. No student testing or conversion uplift is claimed.

## V2: evidence-driven blueprint / hook refinement (review branch only; not deployed)

V2 makes the three spatial layers semantically meaningful: **GOAL → CAPABILITIES → PRACTICE → EVIDENCE**. Six career definitions now update the selected skill, example workplace task, and corresponding reviewable artifact together. Narrow layouts use a compact horizontally scrollable five-skill strip with readable labels, not a scaled-down desktop diagram.

The primary diagnostic CTA preserves `#diagnostic` in browser history but positions the first actual question and answer in the visible viewport after the jump. No score is presented as calibrated job-readiness. The authentic header and footer logo paths both refer to `assets/teclavya-logo.png`, already tracked in the source GitHub repository.

See `research/role-id-crosswalk.md` for intentional slug aliases and incompatible pre-signup journey mapping in Teclavya Web. The standalone concept's existing six IDs remain unchanged.

QA is packaged separately in `teclavya-blueprint-hook-v2` with screenshots and scripts. The 134 local browser assertions and computed-contrast checks do not constitute full axe/WCAG certification or human-participant evidence.


### V2 branch handoff

This V2 source is available at [`feature/landingpage-v2-review`](https://github.com/surya-gorla/teclavya-landingpage/tree/feature/landingpage-v2-review) for your local Codex agent to fetch. Only the review branch contains V2; `main` and the public GitHub Pages preview are unchanged. To review the changes, compare this branch against commit `547b0acf79374c369824166f1228bb12b5a06bf9` (the V1 baseline). Rerun local browser functionality, full axe accessibility checks, and logo/font loading before recommending a merge. Do not deploy or merge without approval.
