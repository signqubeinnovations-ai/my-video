---
name: ui-ux-pro-max
description: Use when designing, building, or reviewing any user-facing UI (web pages, apps, components, landing pages, dashboards, marketing sites). Provides a pro-level playbook for layout, typography, color, spacing, hierarchy, accessibility, responsiveness, motion, and polish so the result looks designed, not defaulted.
---

# UI/UX Pro Max

A practical playbook for producing interfaces that look intentionally designed. Apply these defaults unless the project's existing system says otherwise — always match the surrounding code's conventions first.

## 0. Before you build
- Identify the **one primary action** per screen and make it the most prominent element.
- Pick a **mood** in one line (e.g. "calm/editorial", "bold/energetic", "clean/technical") and let it drive color, type, and spacing.
- Reuse the project's existing tokens/components. Don't invent a second design language.

## 1. Layout & hierarchy
- Establish a clear visual hierarchy: size, weight, color, and spacing should make scan order obvious in 2 seconds.
- Use a consistent **max content width** (e.g. 1100–1280px) and center it; full-bleed only for backgrounds/heroes.
- Align everything to a grid. Things that relate should align; things that don't shouldn't.
- Generous whitespace beats cramming. When unsure, add more space, not more elements.
- Group related items (proximity); separate unrelated ones. Use section padding ~80–120px desktop, ~56–72px mobile.

## 2. Spacing system
- Use a spacing scale (4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96). Never random pixel values.
- Keep vertical rhythm consistent: equal gaps between sibling blocks.
- Pad interactive targets to **≥44×44px** tap area.

## 3. Typography
- Two families max: one display/serif for headings, one clean sans for body — or a single strong family with weight contrast.
- Type scale with clear jumps (e.g. 0.875 / 1 / 1.25 / 1.5 / 2 / 3 / 4rem). Use `clamp()` for fluid headings.
- Body line-height 1.5–1.7; headings 1.0–1.2. Body size ≥16px.
- Line length 60–75 characters for readable paragraphs (`max-width: 65ch`).
- Tighten letter-spacing on big headings (-0.01 to -0.03em); widen on small uppercase labels (0.1–0.25em).

## 4. Color
- Define tokens: background, surface, text, muted text, primary, accent, border, plus success/warn/error.
- Use a restrained palette: 1 primary + 1 accent + neutrals. Add color with intent, not decoration.
- Ensure contrast: body text ≥ 4.5:1, large text ≥ 3:1 (WCAG AA). Never gray-on-gray.
- Prefer layered neutrals (subtle surface vs background) over hard borders for depth.
- Gradients/glows: keep subtle and on-brand; avoid muddy mid-tones.

## 5. Components & states
- Every interactive element needs: default, **hover**, **focus-visible**, active, and disabled states.
- Buttons: clear primary (filled) vs secondary (outline/ghost) vs tertiary (text). One primary per view.
- Cards: consistent radius, padding, and shadow; lift slightly on hover for affordance.
- Forms: visible labels (not just placeholders), inline validation, helpful error text, logical tab order.
- Empty, loading, and error states are part of the design — never leave them blank.

## 6. Depth & detail
- Border radius: pick one scale (e.g. 8 / 14 / 20 / full) and stay consistent.
- Shadows: soft, directional, low-opacity, layered — not harsh black boxes. Bigger elevation = larger, softer shadow.
- Borders: 1px low-contrast for separation; avoid heavy outlines.
- Icons: consistent set, size, and stroke weight. Align optically with text.

## 7. Motion
- Animate to communicate, not decorate. Durations 150–350ms; ease-out for entrances, ease-in-out for moves.
- Add reveal-on-scroll/hover transitions for life, but keep them quick and subtle.
- Respect `prefers-reduced-motion`: disable non-essential animation.

## 8. Responsiveness
- Mobile-first. Test at ~360px, ~768px, ~1280px.
- Reflow multi-column grids to single column on small screens; never horizontal-scroll the page.
- Use `min()/max()/clamp()` and fluid grids (`repeat(auto-fit, minmax(...))`) over fixed breakpoints where possible.
- Mobile nav: clear full-height/overlay menu with a single consistent background and an obvious close affordance.
- Use `100dvh` (not `100vh`) for full-height mobile sections to avoid the iOS toolbar gap.

## 9. Accessibility (non-negotiable)
- Semantic HTML (`<button>`, `<nav>`, `<main>`, headings in order). Add `alt` text and ARIA only where needed.
- Keyboard operable; visible focus rings (`:focus-visible`).
- Don't rely on color alone to convey meaning.
- Respect contrast and reduced-motion.

## 10. Polish pass (do this before calling it done)
- [ ] Clear single primary action per screen
- [ ] Consistent spacing scale, alignment, and radius
- [ ] Type hierarchy reads in 2s; comfortable line length & height
- [ ] AA contrast everywhere; hover/focus states present
- [ ] Looks right at 360 / 768 / 1280px
- [ ] Loading/empty/error states handled
- [ ] Motion subtle and reduced-motion safe
- [ ] No orphaned defaults (unstyled links, raw blue focus, default fonts)

## Anti-patterns to avoid
- Centered everything / no alignment grid.
- Walls of text with no hierarchy or breathing room.
- Five fonts, five accent colors, random radii.
- Tiny tap targets and invisible focus states.
- Pure black (#000) on pure white, or low-contrast gray text.
- Decorative animation that delays interaction.
