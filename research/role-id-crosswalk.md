# Teclavya role-ID crosswalk — standalone concept vs source application

This is **a comparison of existing source contracts**, not an instruction to rename concept IDs or change the Teclavya repositories. The concept's six IDs already match the six `DIAGNOSTIC_TRACKS` IDs at Teclavya Web commit `6963f637619160acfb7e881e3e7bfbd6f2b3781e`.

| Concept ID | Concept label | DiagnosticPreviewCard ID / title | RoleSelectorBanner ID / title | AnonymousExplorationFlow URL behavior | Integration status |
|---|---|---|---|---|---|
| `java-backend` | Java Backend Engineer | `java-backend` / Full Stack Java | `java-backend` / Full Stack Java Developer | Direct `java-backend` does not receive Java-special handling; `fullstack-java` is understood as a Java title but generic `software-engineer` goal fallback is used | Needs explicit adapter |
| `cloud-architect` | Cloud & DevOps Engineer | `cloud-architect` / Cloud & DevOps | `cloud-architect` / Cloud & DevOps Architect | Recognizes `cloud-devops`, **not** `cloud-architect` | Needs adapter |
| `ai-ml` | AI / ML Engineer | `ai-ml` / AI / Data Science | `ai-data-science` / Data Scientist | Recognizes `ai-data` and `ai-engineer`, **not** `ai-ml` | Needs adapter / product role decision |
| `software-engineer` | Software Engineer | `software-engineer` / Software Engineer | `software-engineer` / Software Engineer | Recognizes `software-engineer`; displays Full-Stack Java Software Engineer title in the current guest blueprint | ID supported, label semantics differ |
| `cybersecurity` | Cybersecurity Engineer | `cybersecurity` / Cybersecurity | `cybersecurity` / Cybersecurity Specialist | No cybersecurity branch; generic software-engineer fallback | No equivalent guest goal yet |
| `mobile-dev` | Mobile Engineer | `mobile-dev` / Mobile Native | `mobile-native` / Mobile Developer | Neither mobile slug is recognized; generic software-engineer fallback | Needs alias + goal capability |

**Verified source:**
- [DiagnosticPreviewCard.tsx](https://github.com/Teclavya/teclavya-web/blob/6963f637619160acfb7e881e3e7bfbd6f2b3781e/src/components/home/DiagnosticPreviewCard.tsx)
- [RoleSelectorBanner.tsx](https://github.com/Teclavya/teclavya-web/blob/6963f637619160acfb7e881e3e7bfbd6f2b3781e/src/components/home/RoleSelectorBanner.tsx)
- [AnonymousExplorationFlow.tsx](https://github.com/Teclavya/teclavya-web/blob/6963f637619160acfb7e881e3e7bfbd6f2b3781e/src/features/acquisition/components/AnonymousExplorationFlow.tsx)
- [previewContent.ts](https://github.com/Teclavya/teclavya-web/blob/6963f637619160acfb7e881e3e7bfbd6f2b3781e/src/features/acquisition/constants/previewContent.ts)

The guest flow currently accepts `software-engineer`, `cloud-devops`, `ai-engineer`, `data-analyst` as acquisition goal slugs. Its query parsing recognizes `ai-data` as an alias. `fullstack-java` is treated specially when rendering a role title, while derived goal still defaults to `software-engineer`. Its basic three-question preview uses illustrative data; the score query parameter is not evidence of measured job readiness.

## Integration adapter proposal (future only)

Create one central mapping of source diagnostic ID → acquisition goal ID and one explicit display-title mapping. Never allow unmatched IDs to silently fall back without surfacing the mismatch in development. Do not introduce URL navigation from this independent HTML concept until the target product approves the canonical taxonomy, especially for Cybersecurity and Mobile tracks, which the current guest goal enum does not cover. Add end-to-end tests for all supported paths and preserve the original selected role and quiz context across guest handoff.

No Teclavya Web or specs source was modified in this V2 work.
