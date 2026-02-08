# Task 2.5: Apply Scroll Reveal to All Sections

## Changes Implemented
- Applied `useScrollReveal` hook to all 7 sections in `src/sections/`.
- Used a helper `Reveal` component (locally defined) for mapped lists to ensure hooks are called correctly.
- Implemented staggered delays for list items (skills, projects, certificates, timeline) using `index * 0.1s`.
- Ensured Hero headline remains instant (only applied reveal to stats).
- Added `"use client"` directive to sections that were previously server components.

## Technical Details
- **Hero**: Applied ref directly to stats container.
- **About**: Applied refs to 3 main columns (Education, Org, Achievements) with manual stagger.
- **Skills**: Wrapped mapped categories in `Reveal` component.
- **Projects**: Wrapped mapped project cards in `Reveal` component.
- **Certificates**: Wrapped mapped certificate cards in `Reveal` component.
- **Bug Hunting**: Wrapped stats row and mapped entries in `Reveal` component.
- **Resume**: Wrapped timeline items in `Reveal` component.

## Verification
- `pnpm tsc --noEmit` passed.
- `pnpm build` passed.
- Logic ensures elements fade in and translate up as they enter the viewport.
