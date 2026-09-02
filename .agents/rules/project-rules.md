---
trigger: always_on
---

# Project: Agency Site (dark/neon theme)

## Stack
- Next.js (App Router), TypeScript
- Tailwind CSS for styling
- Framer Motion for element reveals/hover animations
- GSAP + ScrollTrigger for scroll-linked animations (progress bars, pinned sections)
- Lenis for smooth scroll
- lucide-react for icons

## Design tokens
- Background: #0A0E14 (near-black navy, not pure black)
- Accent: #00E676 (neon green) — use sparingly, only for links/buttons/highlights
- Text primary: #FFFFFF
- Text secondary: #9CA3AF
- Card background: rgba(255,255,255,0.05) with backdrop-filter: blur(20px)
- Border radius: large, rounded-2xl / rounded-3xl on cards
- Font: Inter (via next/font, self-hosted)
- Headline sizing: large, tight line-height, letter-spacing: -0.02em

## Rules
- Build one section at a time, never the whole page in one shot.
- After building or changing a section, open it in the browser subagent and screenshot it before marking the task done.
- Compare against reference images in /design-reference when available.
- Keep the color palette limited to background/accent/text tokens above — no extra colors.
- Favor CSS variables for all theme values so they're easy to adjust globally.

## Reference materials
- Visual reference: images in /design-reference/ — always check the relevant image before building or revising a section's layout, spacing, or colors.
- Animation reference: design-reference/animation-reference.md — always check the matching numbered section before implementing any motion/animation, and follow its "Prompt line" as the base spec unless the user says otherwise.
- If a detail isn't covered in either file, ask rather than guessing.