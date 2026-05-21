# Design Brief: Premium Industrial S Logo & Intro Animation

## Aesthetic
Premium industrial B2B intro animation. Metallic S logo with clean modern vector style, yellow/black/silver branding. White/light grey background. Smooth fade-in, subtle shine, golden line sweep. Text slides for premium, corporate, refined feel — not flashy or cinematic.

## Tone
Refined, authoritative, premium. Institutional confidence through minimal metallic detail and precise motion choreography.

## Logo Design
| Element | Color | Style |
|---------|-------|-------|
| Primary S | #F5C518 (metallic yellow) | Sharp geometric edges, modern vector |
| Black accent | #0a0a0a (matte black) | Accent strokes for depth |
| Silver detail | #C0C0C0 (metallic silver) | Reflection highlights |
| Gold shine line | #D4AF37 (metallic gold) | Thin sweep animation |

## Intro Animation Sequence
| Phase | Timing | Element | Motion |
|-------|--------|---------|--------|
| 1 | 0–1.2s | S logo | Fade-in + zoom (0.6 → 1.0 scale) |
| 2 | 0.4–1.9s | Metallic shine | Diagonal sweep with opacity pulse |
| 3 | 0.4–1.9s | Golden line | Vertical sweep top-to-bottom |
| 4 | 0.8–1.6s | "STANDARD" text | Slide from left + fade |
| 5 | 1.0–1.8s | "COMMERCIAL KITCHEN EQUIPMENTS" | Slide from right + fade |
| 6 | 1.8s+ | Full screen fade + transition to homepage | Smooth exit |

## Branding Integration
- S logo replaces SK text placeholder in navbar post-animation
- Metallic yellow (#F5C518) used as primary logo accent throughout site
- Golden line color (#D4AF37) reserved for premium highlights and active states
- Animation tokens support future motion on hero, CTAs, and product reveals

## Typography
- **Intro Display**: Inter 700, 2.5rem, letter-spacing -0.02em
- **Intro Subtitle**: Inter 500, 0.95rem, letter-spacing 0.05em

## Motion Library
- `animate-logo-zoom-fade` — 1.2s zoom + fade entrance
- `animate-golden-sweep` — 1.5s vertical line sweep with delay
- `animate-slide-in-standard` — 0.8s left slide + fade
- `animate-slide-in-subtitle` — 0.8s right slide + fade
- `animate-metallic-shine` — Continuous diagonal glint effect

## Structural Zones
| Zone | Background | Treatment | Motion |
|------|------------|-----------|--------|
| Intro screen | #f5f5f5–#f9f9f9 gradient | Minimal, centered | Choreographed entrance + exit |
| Logo container | Fixed center | Relative positioning for shine layer | Scale + opacity |
| Text container | Below logo | Stacked flex | Alternating left/right slides |

## Constraints
- Intro animation plays once on first homepage load (state-managed)
- No autoplay sound; motion is purely visual
- Animation duration ~2.5s total (professional pacing)
- Logo SVG composites yellow/black/silver with sharp 45° angles
- Metallic effects use opacity + gradients only, no blur or heavy filters

## Signature Detail
Metallic S with golden line sweep conveys premium manufacturing and industrial confidence. Staggered text entrances create rhythm without excess motion. Clean gradient background avoids visual noise — animation remains focal point.
