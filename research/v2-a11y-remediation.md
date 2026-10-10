# Teclavya V2 — accessibility follow-up

**Scope:** Two findings in the independent V2 acceptance package, reviewed against branch baseline `efe9ef6aeb0282313f3d38241828aa51a2885c6a` (October 10, 2026). Source remains an illustrative static concept; do not interpret its diagnostic result as production readiness.

## Confirmed defects and changes

1. **Desktop contrast — V2 regression.** Axe-core 4.10.3 reported `.concept-pill` ("INTERACTIVE CONCEPT") at **2.81:1** against `#feffff`, caused by the former `opacity:.72`. The new rule uses `opacity:1;color:#475569;font-size:10px` and keeps the disclosure visibly subordinate without reducing text contrast.
2. **Mobile keyboard accessibility — pre-existing defect.** At widths 320px and 390px, the `.code-lines` sample overflows horizontally and axe reported `scrollable-region-focusable`. The element now has `tabindex="0"` and an accessible description identifying arrow-key scrolling, plus a visible `:focus-visible` outline in the light theme. Native browser scrolling handles keyboard arrow input; there is no custom JavaScript listener.

No changes were made to the career/diagnostic logic, role IDs, roadmap copy, or production Teclavya repositories.

## Local targeted browser check (not independent acceptance)

The code was checked with headless Chromium using the exact local HTML/CSS/JS inserted into a controlled document at widths 320, 375, 390, 768, 1024, 1440, and 1920px (corresponding heights 700, 812, 844, 1024, 768, 900, 1080). External fonts and image assets were not fetched in this environment, and the local harness did **not** rerun axe-core.

- `INTERACTIVE CONCEPT` computed foreground `#475569`, opacity `1`, contrast **7.56:1** against `#feffff` at all seven widths.
- `.code-lines` receives focus via keyboard Tab and matches `:focus-visible`, with a **3px** indigo outline.
- At 320/375/390px, seven `ArrowRight` keypresses on the focused region increased `scrollLeft` by **88/33/18px** respectively; the region is genuinely horizontally scrollable.
- No document-level horizontal overflow or page-script errors in this isolated test.

These focused checks support the proposed fix; they are not a substitute for a full served-page axe scan with the actual logo and fonts.

## Independent re-acceptance gates (local Codex)

1. Fetch the updated `feature/landingpage-v2-review` branch into an isolated clean worktree, leaving current worktrees untouched.
2. Serve the site via HTTP and run the same acceptance harness used for the ZIP `teclavya-blueprint-hook-v2-acceptance.zip` (or an equivalent independent Playwright + axe-core 4.10.3 script).
3. Confirm **zero axe `color-contrast` violations** for `.concept-pill` at 1440px, and **zero `scrollable-region-focusable` violations** for `.code-lines` at 320px and 390px.
4. Use a real keyboard to Tab onto the code sample, inspect the visible focus ring, and use left/right arrow keys to scroll the clipped content.
5. Rerun the original six-role diagnostic suite, both 0/3 and 1/3 scoring cases, the diagnostic CTA visibility checks at all seven widths, and mobile keyboard navigation. Check the runtime console/network for new errors.
6. Review the remaining axe `incomplete` contrast nodes separately; do not treat zero automated violations as blanket WCAG certification.
7. Return a sanitized ZIP with the exact branch SHA, axe JSON, screenshots (including focus state at 320/390px), functional logs, layout/scroll measurements and a PASS/PARTIAL/FAIL verdict. No merge, push or deployment without explicit approval.
