# SafeSpace — Agent Guidelines

## Writing Style

- **Plain language always.** Write like you're explaining something to a curious 10-year-old (ELI5 — Explain Like I'm 5).
- Avoid jargon. If a technical term is unavoidable, explain it in plain words right after.
- Short sentences. Short paragraphs. One idea at a time.
- No buzzwords, marketing speak, or filler phrases.

### Technical to Plain

When describing how something works, **lead with an accurate technical statement, then follow it immediately with a plain-language version.** The technical part keeps things honest and precise. The plain part makes sure everyone understands.

Use this two-step format:

> **Technical:** [exact, accurate description of what's happening]
> **Plain:** [what that means in everyday words]

**Example:**

> **Technical:** This site sets no HTTP cookies and makes no requests to third-party origins, eliminating cross-site tracking vectors.
> **Plain:** We don't store anything on your device, and we don't call out to other websites — so no one can follow you here.

Never skip the technical part to sound friendlier. Accuracy matters. Never skip the plain part to sound smarter. Clarity matters more.

---

## Privacy & Security First

This website collects **nothing** about you. No exceptions.

- **No cookies** — not even "essential" ones. Zero.
- **No tracking** — no analytics, no pixels, no fingerprinting, no session recording.
- **No user accounts** — users never sign up, log in, or hand over personal information.
- No third-party scripts that could leak data (no Google Fonts loaded remotely, no CDN calls to unknown parties, etc.).
- All assets must be served locally or from fully auditable, privacy-respecting sources.

When building features, always ask: *"Does this require any data about the user?"* If yes, find a way that doesn't.

---

## Core Principles

1. **Privacy by default** — the safest choice is always the one that collects the least.
2. **Transparency** — explain what the site does and doesn't do, in plain language.
3. **Trust through simplicity** — fewer moving parts means fewer things that can go wrong or be abused.
4. **Security without friction** — good security shouldn't make things harder to use.
