# Teclavya first-impression study — field protocol

**Status: ready to run; no human participants have been tested yet.** The moderator should **not** announce the exact five-second exposure duration in advance, to avoid changing how participants scan. This protocol evaluates comprehension and discoverability, not conversion uplift or statistical significance.

## Source-grounded objective

The CEO's Issue #49 defines a 0–5-second outcome hook, a 10–60-second interactive diagnostic and a 60–90-second guest blueprint reveal. The standalone prototype should allow students to infer (a) the product's outcome, (b) what to do first and (c) that a diagnostic can be started without registration. The two products should feel related despite staging's intentionally dark marketing page and the authenticated app's light, indigo/white student dashboard design.

Reference links:
- CEO staging: https://test.teclavya.com/
- Independent prototype: https://surya-gorla.github.io/teclavya-landingpage/
- CEO issue: https://github.com/Teclavya/teclavya-web/issues/49
- Internal theme tokens: https://github.com/Teclavya/teclavya-web/blob/development/src/index.css

## Recruitment and fairness

Recruit **8–12 prospective students** who have not worked on Teclavya and are not familiar with either page. Invite students interested in software engineering; do not ask for sensitive personal information. Affiliated interns can provide preliminary feedback but should not replace unfamiliar prospective learners. Use about half of participants with CEO staging shown first and half with the prototype first; rotate order to reduce learning effects. Keep the same device size for both pages and clear site data for each new session. Treat results as qualitative directional signals, not conversion data.

## Moderator script (read verbatim)

> I'll show you two website homepages briefly, one at a time. There are no right answers and I am testing the page, not you. After each, I will hide it and ask what you understood. Please answer from memory, without trying to be helpful to the designers. After that, you can interact with each page briefly. You do not need to register.

1. Open the assigned first homepage at the top, at 100% browser zoom. Preload to avoid counting network time. Show the first fold for **five seconds**, then hide it or switch to a blank tab before asking any questions. No scrolling or conversation during exposure.
2. Ask the three questions below **without displaying answer choices or leading examples**. Write answers verbatim. Only after recording these answers should you expose the second page for five seconds and repeat. Do not let participants see one page's answers while viewing the other.
3. Return to the first page. Ask the student to find and begin the career-specific skill check while thinking aloud; start a stopwatch. Record first clicked element and time to first diagnostic question. Stop after 60 seconds if blocked. Repeat on the second page with the same process. For fairness, do not interpret known staging technical defects as a visual-design failure.
4. After both experiences, ask which page more clearly explained Teclavya, which felt more credible, which looked more connected to the product they would use after login, and which they would choose to explore next. Ask why.

### The three five-second questions

1. **What do you think this website helps someone do?**
2. **What would you click first, and what do you expect to happen?**
3. **What stood out most to you?**

Optional after interaction: **Did it require creating an account before you could try anything?**

## Coding rubric (apply after collecting raw answers)

- `outcome_clarity`: 2 = career/job readiness **and** evidence/practical experience understood; 1 = engineering learning only; 0 = unclear or incorrect. If someone simply says *job-ready software engineer*, score 2 on career outcome even without mentioning evidence.
- `action_clarity`: 2 = role selection or diagnostic identified with an appropriate expectation; 1 = generic 'explore/sign up'; 0 = no clear action or mistaken expectation.
- `visual_recall`: 2 = participant recalls the role-specific career/skill relationship; 1 = remembers only decorative shapes/progress; 0 = can't recall or misinterprets.
- `diagnostic_time_sec`: seconds from request to the first question **actively answered**, not the initial page click.
- `first_click`: actual target clicked; do not convert to a success score without inspecting intent.
- `brand_continuity`: 1–5 subjective score **after both pages** and, separately, after seeing a light-mode authenticated dashboard screenshot if available.
- `confidence`: self-reported 1–5; record any confusion about mock project/score versus verified achievements.

## Directional acceptance gates (proposed, not observed results)

- **At least 80%** of respondents identify the intended student-to-job-readiness outcome from the prototype in five seconds.
- **At least 70%** identify role selection/diagnostic as a sensible first action, unaided.
- **Median first-answer time ≤25 seconds** for the prototype, matching the CEO specification's intent. Describe failures, not just successes.
- **Zero** participants should think the sample 3-question score is a verified employer-readiness or credential claim.
- **No blocker** in the mobile diagnostic or the role-to-roadmap handoff.

The 8–12-person pilot is too small to claim statistical significance. Do not compare signups or conversion rates; those belong to the CEO's later experiments.

## Reporting template

Report *numbers with denominators*, e.g. `7/10 (70%)`, plus verbatim quotes and a short log of first-click paths. Identify design changes triggered by specific observations. Don't claim a winner based only on taste votes; weigh demonstrated comprehension and task completion.

Enter results in `research/first-impression-responses.csv` (one row per participant per site). Use anonymous IDs; no real names or emails.