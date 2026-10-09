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
- `styles.css`: design tokens, responsive composition, CSS 3D/layering and motion.
- `app.js`: career registry, interactive skills, guest quiz, journey state.
- `favicon.svg`: provisional concept mark, **not an official Teclavya brand asset**.

The guest career mapping is intentionally local to the preview. Integration into the original Teclavya Web must normalize its career slugs and use authoritative readiness sources. The 3-question demonstration is not a substitute for production assessment infrastructure.

## Visual QA targets

Viewport checks: 1440px desktop, 768px tablet, 375px mobile. Verify hero copy does not clip, the career model remains legible, the quiz works with mouse and keyboard, the menu closes on selection, and navigation anchors scroll to the intended section.

## Attribution / review

Created as a standalone concept preview for discussion with the Teclavya team. Product descriptions are conceptual and any code review, score, simulated project or credential shown is labeled illustrative.