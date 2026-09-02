# Animation Reference — Agency Site Build

Use this alongside the screenshots in `/design-reference`. Each entry names the section, what moves, and a plain-English description you can paste straight into a prompt or your Rules file.

---

## 1. Background — Starfield / Particles
**Where:** Persistent, visible behind every section on the page (not just the hero)
**Animation:**
- A field of small white and green dots scattered across the dark background
- Dots drift very slowly and continuously (slow upward or diagonal float)
- Occasional soft twinkle/opacity pulse on random dots, staggered so it never reads as synchronized
- Green dots are sparse — maybe 5–10% of total — used as accent among mostly white/gray dots
**Prompt line:** *"Canvas-based particle background, ~100–150 dots, mostly white/gray with a few green accents, slow continuous drift, subtle random opacity twinkle, fixed behind all content."*

---

## 2. Navigation Bar
**Where:** Top nav, sticky across all sections
**Animation:**
- Transparent background at the top of the page
- Transitions to a solid/dark background with a subtle bottom border once the user scrolls past the hero
- Transition is smooth, not an instant snap
**Prompt line:** *"Sticky nav, transparent over the hero, fades to a solid dark background with backdrop blur after ~80px of scroll, transition eased not instant."*

---

## 3. Hero Section
**Where:** First viewport on page load
**Animation:**
- Eyebrow label ("YOUR TRUSTED PARTNER IN") and headline fade/slide up into place on load
- Large decorative dot-matrix graphic (the "5" numeral shape) on the right is built from small dots — likely animates in as if particles assemble into the shape
- Two CTA buttons fade in slightly after the headline (staggered entrance)
**Prompt line:** *"Hero content fades up on load with ~100ms stagger between eyebrow label, headline, and CTA buttons. Decorative numeral graphic on the right is composed of small dots and animates in as if assembling from scattered particles."*

---

## 4. Hero → Content Transition ("Global Technology Expertise")
**Where:** Full-viewport section between hero and stats, dense starfield with centered text
**Animation:**
- A dedicated full-screen section where the particle field becomes denser/brighter
- Large centered text ("Global Technology Expertise / Trusted by Businesses Worldwide") fades in, low opacity, like it's emerging from the stars
- Feels like a scroll-linked "pinned" moment — page scroll appears to drive the particle density/text opacity rather than a simple fade
**Prompt line:** *"Full-viewport pinned section: as user scrolls through it, particle density/brightness increases and centered heading text fades in from near-invisible to visible, tied to scroll position (GSAP ScrollTrigger scrub)."*

---

## 5. Stats Counters
**Where:** "8 Years of Expertise / 791 Clients Globally / 141 Dedicated Castlers / 991 Completed Projects"
**Animation:**
- Numbers count up from 0 to their final value when the section scrolls into view
- Small "+" appended after each number, static (not part of the count)
- Thin vertical divider lines between each stat, static
**Prompt line:** *"Stat numbers animate from 0 to their final value over ~1.5s when the section enters the viewport, using an ease-out curve. Trigger once per page load (don't re-count on scroll back up)."*

---

## 6. Award Badges Row
**Where:** Row of circular award/recognition badges below the stats intro text
**Animation:**
- Horizontal auto-scrolling marquee — badges slide continuously to one side, looping seamlessly
- Pauses on hover (standard marquee behavior)
**Prompt line:** *"Infinite horizontal marquee of badge logos, continuous slow auto-scroll, seamless loop, pause on hover."*

---

## 7. Client Logo Grid
**Where:** "Our Esteemed Collaborators Worldwide" section
**Animation:**
- Grid fades/slides in as it enters the viewport, likely staggered per row or per logo
- Logos appear to be static once visible (no continuous motion here, unlike the badges row above it)
**Prompt line:** *"Logo grid items fade up with a small stagger (~50ms between items) as the section enters the viewport. No continuous animation once visible."*

---

## 8. Project Cards — Horizontal Scroll Carousel
**Where:** "Our Works" section, large image cards (Empower, Le Mirage, Dubai Police, etc.)
**Animation:**
- Cards scroll horizontally, triggered by vertical mouse-wheel/trackpad scroll (not a native horizontal scrollbar)
- A thin horizontal progress bar beneath the cards fills left-to-right as you scroll through, tracking position in the set
- Cards appear to ease into position rather than moving 1:1 with scroll input — slight lag/smoothing
- Each card has a gradient overlay (dark at the bottom) with title + description text anchored bottom-left
**Prompt line:** *"Horizontal card carousel driven by vertical scroll input (GSAP ScrollTrigger, horizontal scroll section). Progress bar underneath fills proportionally to scroll position within the section. Cards ease with slight smoothing, not 1:1 tracking. Each card: dark gradient overlay bottom-to-transparent-top, title and subtitle text bottom-left."*

---

## 9. Card Hover State
**Where:** Any project/blog card
**Animation:**
- Subtle scale-up (roughly 1.02–1.05x) on hover
- Overlay gradient darkens slightly on hover, or an arrow icon shifts position (common pattern in this style — confirm exact behavior when you get to build this section, since it wasn't fully visible in the recording)
**Prompt line:** *"Cards scale to ~1.03x on hover with a smooth 0.3s ease, gradient overlay darkens slightly. Arrow icons in CTAs shift right ~4px on hover."*

---

## 10. Blog Cards Grid
**Where:** Blog section, 2-column grid of article cards
**Animation:**
- Same fade-up-on-scroll-into-view pattern as the logo grid
- "Read More" links likely have the arrow-shift hover treatment described above
**Prompt line:** *"Blog cards fade up with stagger as section enters viewport. 'Read More' links: arrow icon shifts right on hover."*

---

## 11. FAQ Accordion
**Where:** "FAQs.." section
**Animation:**
- Prev/next circular arrow buttons cycle through FAQ questions one at a time (not a traditional expand/collapse accordion — more like a slideshow of Q&A pairs)
- Content (question + answer) crossfades or slides when navigating between FAQ items
- The "disabled/blocked" cursor icon appeared briefly on the next button in the recording — likely a rate-limit or debounce state preventing rapid clicking through items
**Prompt line:** *"FAQ section shows one question/answer pair at a time with prev/next circular buttons. Content crossfades (~0.3s) between items on navigation. Debounce rapid clicks so a new transition can't start until the previous one finishes."*

---

## 12. Footer — Office Locations Graphic
**Where:** Footer, near India/UAE office cards
**Animation:**
- Dotted world-map style graphic with curved connecting arc lines between points
- Arcs appear to animate — likely a subtle draw-in or pulsing dot traveling along the path (common for this graphic style; confirm exact motion when building since it was only partially visible)
**Prompt line:** *"Dotted map graphic in footer with curved SVG path arcs connecting location points. Arcs draw in on scroll-into-view (stroke-dashoffset animation), optionally with a pulsing dot animating along the path on loop."*

---

## General notes for the agent

- Almost everything follows one of two patterns: **(a) fade/slide up on scroll-into-view**, or **(b) scroll-linked/scrubbed** (tied directly to scroll position rather than a one-time trigger). Tell the agent explicitly which pattern applies per section — mixing them up is the most common way an AI-built clone feels "off" compared to the reference.
- Nothing in this site animates fast or bouncy — everything reads as smooth, eased, slightly slow (think 0.4–0.8s durations, ease-out curves). If the agent's first pass feels snappy/springy, that's the note to give it.
- Items marked "confirm exact behavior when you get to build this section" are places the recording didn't show clearly enough to be certain — treat those as a starting guess, not gospel, and adjust once you see the agent's browser-recorded attempt.
