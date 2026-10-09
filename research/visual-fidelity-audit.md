# Source-backed design fidelity and hook audit

**Evidence checked:** Teclavya's `development` branch `src/index.css`, `src/styles/warm-theme.css`, `src/pages/Dashboard.css`, `src/components/Sidebar.css`, and CEO Issue #49 plus its 2026-10-08 PRs #989 / #991 / #994 / #995 / #997. Compare source tokens separately from rendered authenticated app screenshots (not available yet).

| Component | Source-of-truth reference | Concept treatment | Status |
|---|---|---|---|
| Authenticated light canvas | `#f8fafc` | Light slate with soft indigo ambient tones | Source-aligned |
| Primary buttons | `#6366f1 → #7c3aed` | Indigo-to-purple actions | Source-aligned |
| Cards | White, `#e2e8f0` borders, 12–16px radius, restrained shadow | White surfaces, soft blue-tinted perspective planes | Source-aligned, not screenshot parity |
| Typography | Inter body, Plus Jakarta Sans display, Fira Code mono | Explicit font loading and fallbacks | Source-aligned |
| Logo | Authenticated sidebar imports `src/assets/teclavya-logo.png`; a matching `public/teclavya-logo.png` exists | Original production PNG reused in preview header and favicon | Source-aligned, pending hosted browser rendering check |
| Public hero | Exact stated intent: “From Student to Job-Ready Software Engineer” | Now the dominant heading, not an eyebrow | Aligned to CEO outcome requirement |
| Time-to-value | 60s quiz in Fold 2 | Diagnostic moved immediately below hero | Aligned |
| Role choice | Career-specific chips | Six supported roles; three visible + disclosure; changes hero, quiz, roadmap | Aligned demonstration |
| Sample readiness | 3-question score is **not** calibrated JRI | Label as a brief skill snapshot and illustrative roadmap | No misleading product claims |
| Workplace evidence | PR/code review/CI checks/ACE vision | Illustrative engineering work, explicit demo labels | Appropriate for standalone concept |
| Public marketing style | CEO certified **dark obsidian** visual | User-requested **authenticated light student UI** | Intentional difference; do not call this identical to the public homepage |

## What is not yet independently verified

- Pixel matching against an **actual signed-in, light-mode browser screenshot** of Dashboard/My Learning/Journey (CSS sources alone are not screenshots).
- First-five-seconds comprehension by **real prospective students**. A reviewer or AI audit is only a heuristic, not a participant study.
- Real conversion or JRI validity. Explicitly excluded from this design exercise.

## Hook heuristics (not measured user outcomes)

- First glance should state the career outcome before requiring an interaction.
- Hero must have one conspicuous exploratory action: **Try the 60-second check**.
- Visitor should see an immediate role-to-skills graphic rather than imaginary progress percentages.
- Clicking a role must actually change the blueprint **and** diagnostic/roadmap coherently.
- Diagnostic starts on the next section, without generic feature copy or the five-step explanatory rail in the way.
- Product demonstrations remain clearly marked illustrative.

## Revision log

1. Preserve the light student interface palette and 2.5D blueprint material from the working prototype.
2. Promote CEO career-outcome promise into hero `h1` with a smaller and simpler supporting line.
3. Move the quiz to Fold 2, blueprint preview next, and reposition the five-step rail as a reflective journey summary.
4. Rename diagnostic section to clear, student-understandable language.
5. Keep accessibility, keyboard usage, six role-specific questions, mobile layouts, and reduced motion behavior testable.