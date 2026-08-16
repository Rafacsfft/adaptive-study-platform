# AdaptEd — Adaptive Study Platform

> A student-built workspace for focused study, active practice, and reflective learning.

AdaptEd is an early-stage educational technology project created to explore a practical question: **what is the minimum structure a student needs to study consistently and learn from each session?**

The current public MVP combines a focus timer, session progress, active-recall questions, and concise explanations of evidence-informed study methods. It is intentionally small, testable, and honest about its stage.

## What works today

- Interactive 25-minute focus timer with pause and reset
- Daily session and focus-minute tracking
- Weekly rhythm visualization using demonstration data
- Three-question active-recall exercise with immediate feedback
- Responsive interface for desktop and mobile
- Device-local interaction; no personal account or analytics

## Why I built it

Students have access to more content than ever, but often lack a repeatable process for using it. This MVP tests a narrower loop: define one task, protect a focused interval, retrieve knowledge from memory, and use mistakes to choose the next action.

## Project status

**Version:** MVP 0.1 · **Stage:** Functional prototype · **Data:** Demonstration content and browser-local interaction

Authentication, database persistence, AI personalization, screen blocking, rankings, and a production question bank are not yet implemented. They belong to later validation stages.

## Roadmap

- [x] Design and build the first interactive MVP
- [x] Add focus sessions and active-recall practice
- [ ] Test the experience with 5–10 students
- [ ] Add a reflection prompt after each session
- [ ] Create an educator-reviewed question workflow
- [ ] Evaluate adaptive recommendations after collecting evidence
- [ ] Research privacy-safe approaches to distraction control

## Technology

React 19, TypeScript, Vinext, Tailwind CSS 4, and a Cloudflare-compatible runtime.

## Run locally

```bash
npm install
npm run dev
```

Quality checks: `npm run lint` and `npm test`.

## Principles

- Evidence before features
- Honest progress
- Student privacy
- Accessible focus

## Contributing

Feedback from students and educators is especially useful. Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before opening an issue or pull request.

## Author and license

Created by [Rafa](https://github.com/Rafacsfft), a Brazilian high-school student interested in education, technology, and science. Licensed under the [MIT License](LICENSE).
