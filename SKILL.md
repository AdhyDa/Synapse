## name: synapse-website-development  
description: >-  
Builds, modifies, and validates the Synapse group UI/UX portfolio website.  
Use when the user asks to implement, modify, refactor, style, debug, review,  
or improve any part of the Synapse website, including Next.js pages,  
components, responsive layouts, project showcases, project detail pages,  
dark/light mode, animations, accessibility, Sanity CMS integration,  
Figma prototype presentation, team profiles, weekly assignment archives,  
or design-system implementation. Do not use for unrelated websites or  
isolated coding tasks that do not belong to Synapse.

# Synapse Website Development Skill

## 1. Purpose

Your job is to build and maintain the **Synapse** group UI/UX portfolio website consistently with its product requirements, visual system, UX rules, accessibility requirements, and technical architecture.

The website is an academic group portfolio intended primarily for **lecturers and academic reviewers**. It documents UI/UX work, the design process, team contributions, and weekly assignments.

Treat the website as an **editorial portfolio**, not as a generic student assignment dashboard.

The intended visual character is:

- Editorial
    
- Spacious
    
- Minimal
    
- Contemporary
    
- Academic
    
- Creative
    
- Typography-driven
    
- Content-first
    
- Subtly interactive
    

The website must **not use gradients**.

# 2. Source of Truth

Before making implementation decisions, use the project documents in this priority order:

1. `PRD.md`
    
    - Defines WHAT the product must contain and WHY.
        
    - Use it for requirements, scope, priorities, personas, user stories, and acceptance criteria.
        
2. `DESIGN.md`
    
    - Defines HOW the product should look and behave.
        
    - Use it for layout, visual hierarchy, components, design tokens, responsive behavior, motion, accessibility, and UI states.
        
3. `SKILL.md`
    
    - Defines HOW an agent should execute development work.
        
    - Use this document for workflow, implementation discipline, validation, and failure recovery.
        
4. `AGENTS.md`
    
    - Defines repository-level agent rules and project-specific operating constraints.
        
    - Follow it whenever it provides a more specific instruction.
        

If two documents conflict:

1. Follow the more specific rule.
    
2. Prefer explicit project requirements over assumptions.
    
3. Do not silently invent a new product requirement.
    
4. If the conflict materially changes the implementation, report it before making a destructive change.
    

Never treat an old implementation as more authoritative than the current `PRD.md` or `DESIGN.md`.

---

# 3. When to Trigger

Trigger this skill when the task involves any of the following:

### Website implementation

- Build Synapse
    
- Create a page
    
- Create a component
    
- Implement a section
    
- Convert a design into code
    
- Implement a Figma design
    
- Add a project page
    
- Add CMS content
    
- Add responsive behavior
    

### Website modification

- Change the homepage
    
- Redesign a section
    
- Change colors or typography
    
- Change project showcase behavior
    
- Modify navigation
    
- Add or remove a section
    
- Update project detail layout
    
- Modify dark/light mode
    

### UX and interaction

- Add animations
    
- Improve transitions
    
- Improve scrolling
    
- Improve project exploration
    
- Improve responsive UX
    
- Improve accessibility
    
- Fix keyboard navigation
    

### Technical work

- Integrate Sanity
    
- Modify content schemas
    
- Refactor Synapse components
    
- Fix frontend bugs
    
- Optimize assets
    
- Fix responsive bugs
    
- Fix hydration/rendering issues
    
- Improve loading/error/empty states
    

### Quality work

- Review Synapse implementation
    
- Audit the website against `PRD.md`
    
- Audit the website against `DESIGN.md`
    
- Check accessibility
    
- Check responsive behavior
    
- Check visual consistency
    
- Validate a completed feature
    

Do **not** trigger this skill for:

- unrelated websites
    
- generic programming questions
    
- isolated algorithm exercises
    
- unrelated Next.js projects
    
- generic UI examples with no relationship to Synapse
    
- writing a standalone PRD or DESIGN document without implementing or validating the website
    

---

# 4. Core Project Rules

These rules are mandatory unless explicitly overridden by the project's current documentation.

## 4.1 Product identity

The website is named:

**Synapse**

The homepage must communicate Synapse as a curated group UI/UX portfolio.

The homepage structure is:

1. Navbar
    
2. Spacious Welcome / Intro section
    
3. Split-View Hero
    
4. Project Showcase
    
5. Design System Preview
    
6. Team Profile
    
7. Weekly Assignment Archive
    
8. Footer
    

Do not add major homepage sections merely because they are common portfolio patterns.

---

## 4.2 Visual identity

Synapse has its own visual identity.

Do **not** use the visual directions of the Education or Industrial project domains as the website's global visual theme.

The website palette is:

- `#FFF2B2`
    
- `#A8C6E7`
    
- `#FFE08A`
    
- `#FFF7D6`
    
- `#7FA8D6`
    

These colors must remain recognizable in the implementation.

Dark mode may use an appropriate dark blue-gray foundation while preserving the project's blue/yellow identity.

Do not introduce gradients.

Avoid unnecessary decorative effects.

---

## 4.3 Typography

Preferred typeface:

**Plus Jakarta Sans**

Fallback:

```text
Inter, system-ui, sans-serif
```

Typography should create hierarchy rather than relying on excessive cards, borders, shadows, or decoration.

Large typography is encouraged for major editorial headings.

---

## 4.4 Layout

Use a spacious editorial layout.

Default desktop structure:

- maximum content width around `1280px`
    
- 12-column grid
    
- approximately `24px` gutter
    

Tablet:

- 8-column grid
    
- approximately `20px` gutter
    

Mobile:

- 4-column grid
    
- approximately `16px` side padding
    

Use whitespace intentionally.

Do not compress sections merely to fit more information above the fold.

---

## 4.5 Motion

Motion should follow the **Subtle / Editorial** direction.

Preferred motion:

- fade
    
- slide
    
- slight scale
    
- light parallax
    
- controlled hover transitions
    

Typical duration range:

- micro interaction: `120–180ms`
    
- buttons: `180–220ms`
    
- component transitions: `250–350ms`
    
- section transitions: `350–500ms`
    
- hero transitions: `500–700ms`
    

Do not add animation simply because an animation library is available.

Every significant animation must preserve usability and support reduced-motion preferences.

---

## 4.6 Project showcase

The project showcase should feel inspired by high-end editorial portfolio presentation, including the general presentation language associated with Awwwards-style sites.

Use Awwwards as a **presentation reference**, not as a source for copying another site's identity or layout.

Preferred behavior:

- editorial composition
    
- generous whitespace
    
- strong typography
    
- visual project previews
    
- clear project metadata
    
- controlled hover interaction
    
- horizontal progression where appropriate
    
- touch-friendly interaction on mobile
    

Do not implement an infinite autoplay carousel.

The showcase must remain understandable without animation.

---

## 4.7 Project detail

Project detail route:

```text
/proyek/[slug]
```

The page may contain:

1. Project Hero
    
2. Overview
    
3. Project Information
    
4. Process / Documentation
    
5. Research
    
6. Wireframe
    
7. Final Design
    
8. Figma Prototype
    
9. Next Project
    

These sections are **conditional**.

Do not render empty headings when a project does not have corresponding content.

A project does not need to follow a rigid case-study template.

---

## 4.8 CMS

Use:

**Sanity Studio**

Do not build a custom CMS dashboard for v1.

The CMS must support at minimum:

- projects
    
- team members
    
- weekly assignments
    
- relevant site content
    

Project content should be flexible enough to support different documentation structures.

---

## 4.9 Accessibility

Target:

**WCAG 2.1 AA**

Always consider:

- semantic HTML
    
- keyboard navigation
    
- visible focus states
    
- meaningful image alt text
    
- sufficient contrast
    
- accessible interactive controls
    
- touch target sizing
    
- reduced motion
    
- accessible tables
    
- accessible error states
    
- accessible empty states
    
- accessible loading states
    

Never make accessibility dependent on visual styling alone.

---

# 5. Execution Workflow

Always execute the following workflow unless the task is explicitly limited to a smaller operation.

## Step 1 — Understand the request

Identify:

- what the user wants changed
    
- which page or component is affected
    
- whether the task is visual, functional, technical, or mixed
    
- whether existing behavior must be preserved
    
- whether the task affects desktop, tablet, mobile, or all breakpoints
    

Do not start coding before identifying the affected area.

---

## Step 2 — Read the relevant project documentation

At minimum, inspect:

```text
PRD.md
DESIGN.md
SKILL.md
AGENTS.md
```

If only a small implementation change is requested, read the relevant sections rather than unnecessarily processing the entire repository.

For example:

- color change → design tokens
    
- project page → project detail requirements
    
- Sanity work → CMS requirements
    
- animation → motion rules
    
- responsive issue → responsive rules
    
- accessibility issue → accessibility rules
    

---

## Step 3 — Inspect the existing implementation

Before creating a new component, determine whether an equivalent component already exists.

Search for:

- existing routes
    
- components
    
- design tokens
    
- utility functions
    
- CMS schemas
    
- existing animation patterns
    
- existing responsive patterns
    

Prefer reuse over duplication.

Do not create:

```text
ProjectCard.tsx
ProjectCardNew.tsx
ProjectCardFinal.tsx
ProjectCardV2.tsx
```

when one reusable component can solve the problem.

---

## Step 4 — Define the smallest implementation plan

Before modifying code, determine:

1. Files to create
    
2. Files to modify
    
3. Existing components to reuse
    
4. Data sources involved
    
5. Validation required
    

Prefer the smallest change that satisfies the requirement.

Do not refactor unrelated code while implementing a feature unless the existing architecture prevents the requested behavior.

---

## Step 5 — Implement using project conventions

Follow the existing repository conventions for:

- file naming
    
- component naming
    
- imports
    
- route structure
    
- styling
    
- TypeScript types
    
- data fetching
    
- CMS access
    
- error handling
    

If the repository already has a pattern for solving the problem, follow that pattern.

Do not introduce a new dependency when an existing project dependency already solves the requirement.

---

## Step 6 — Implement responsive behavior

Every visual feature must be evaluated at:

```text
Desktop
Tablet
Mobile
```

Do not treat mobile as an afterthought.

Check:

- text wrapping
    
- image cropping
    
- navigation
    
- spacing
    
- horizontal overflow
    
- button sizes
    
- tables
    
- embeds
    
- cards
    
- touch interaction
    
- animation behavior
    

If a desktop interaction cannot work naturally on mobile, provide an appropriate mobile interaction rather than forcing the desktop pattern.

---

## Step 7 — Implement states

Interactive or data-driven components must account for relevant states:

### Loading

Use:

- skeleton
    
- placeholder
    
- reserved layout space
    

Avoid layout jumps.

### Empty

Use:

- simple explanation
    
- optional illustration
    
- optional CTA
    

Do not leave a blank section without explanation.

### Error

Use:

- clear error message
    
- retry action where applicable
    

Do not expose raw stack traces or implementation errors to normal users.

### Success

Use:

- inline confirmation
    
- toast
    
- or another lightweight confirmation mechanism
    

Do not interrupt the user's flow unnecessarily.

---

## Step 8 — Validate

Validation is mandatory.

After implementation:

1. Check that the application builds.
    
2. Check the affected route.
    
3. Check console/runtime errors.
    
4. Check responsive behavior.
    
5. Check accessibility requirements relevant to the change.
    
6. Check the implementation against `PRD.md`.
    
7. Check the implementation against `DESIGN.md`.
    

If validation fails:

1. Identify the smallest cause.
    
2. Fix it.
    
3. Run the relevant validation again.
    
4. Repeat until the affected validation passes.
    

Never declare the task complete while a known blocking error remains.

---

# 6. Decision Rules

When multiple implementation approaches are possible, use these rules.

## Rule 1 — Requirement beats convention

If an existing implementation conflicts with `PRD.md` or `DESIGN.md`, follow the project documentation.

## Rule 2 — Reuse beats duplication

Reuse existing components and tokens whenever possible.

## Rule 3 — Simple beats clever

Prefer understandable code over abstractions that exist only to demonstrate technical sophistication.

Humanity already has enough unnecessary abstractions.

## Rule 4 — Content beats decoration

If a visual effect competes with project content, remove or reduce the effect.

## Rule 5 — Accessibility beats aesthetics

Never sacrifice keyboard access, readability, contrast, or reduced-motion support for a visual effect.

## Rule 6 — Progressive enhancement

The core content and navigation must remain usable without relying on animation.

## Rule 7 — No invented requirements

If the project documentation does not specify a behavior, do not present an assumption as a requirement.

Choose the least surprising implementation or identify the assumption explicitly.

---

# 7. Examples

## Example 1 — Adding a project card

### User request

> Tambahkan project baru ke showcase homepage.

### Correct behavior

1. Inspect `PRD.md` for project showcase requirements.
    
2. Inspect `DESIGN.md` for `ProjectCard` and showcase behavior.
    
3. Inspect the existing project data model.
    
4. Check whether Sanity already contains the project.
    
5. Reuse the existing `ProjectCard`.
    
6. Add the project through the CMS/data source rather than hardcoding it in the page.
    
7. Verify:
    
    - project title
        
    - category
        
    - year
        
    - preview image
        
    - description
        
    - link to `/proyek/[slug]`
        
8. Check desktop, tablet, and mobile.
    
9. Verify keyboard accessibility.
    
10. Verify that the project appears correctly without breaking the horizontal showcase.
    

### Incorrect behavior

Create a one-off card directly inside the homepage:

```tsx
<div className="custom-project-card">
  ...
</div>
```

while an existing `ProjectCard` and CMS model already exist.

---

## Example 2 — Adding animation

### User request

> Bikin project card-nya lebih hidup ketika di-hover.

### Correct behavior

1. Inspect the existing motion system.
    
2. Use a subtle transform or opacity transition.
    
3. Keep the interaction within the editorial motion direction.
    
4. Avoid excessive scale or rotation.
    
5. Ensure the card remains readable.
    
6. Respect `prefers-reduced-motion`.
    
7. Verify keyboard/focus behavior.
    
8. Test touch behavior so mobile users do not depend on hover.
    

A suitable interaction might be:

```text
rest
→ slight image movement
→ subtle scale
→ metadata transition
```

### Incorrect behavior

```text
card
→ rotate 8 degrees
→ scale 1.2
→ particle effect
→ glowing border
→ autoplay animation
```

That is not editorial design. That is a cry for help from a CSS file.

---

## Example 3 — Adding a new project-detail section

### User request

> Tambahkan bagian research ke halaman project.

### Correct behavior

1. Check whether `research` already exists in the project content model.
    
2. If it exists, render it conditionally.
    
3. If it does not exist, determine whether the CMS schema needs extension.
    
4. Follow the project-detail layout in `DESIGN.md`.
    
5. Do not render an empty section when research content is unavailable.
    
6. Make images accessible.
    
7. Check responsive image layout.
    
8. Validate the project route.
    

### Incorrect behavior

Always render:

```text
RESEARCH

No research available.
```

for every project even when research is not part of that project's documentation.

---

## Example 4 — Adding a new color

### User request

> Pakai warna merah untuk tombol utama.

### Correct behavior

First check whether the requirement is intentional and whether an existing semantic token can satisfy it.

Do not immediately add:

```css
--red: #ff0000;
```

Instead:

1. Check the existing semantic color system.
    
2. Check `DESIGN.md`.
    
3. Determine whether the requested color belongs to the Synapse visual identity.
    
4. Check contrast.
    
5. If the change would materially alter the design system, identify the impact before applying it broadly.
    

If the user explicitly confirms the new color as a design-system change, introduce it through semantic tokens rather than scattered literal values.

---

# 8. Common Failure Modes

## Failure 1 — Building from memory

### Problem

The agent remembers generic portfolio conventions and ignores the project's actual documentation.

### Recovery

Re-read the relevant sections of:

```text
PRD.md
DESIGN.md
```

Then compare the implementation against them.

---

## Failure 2 — Treating Synapse like a generic portfolio template

### Problem

The agent adds:

- testimonials
    
- blog
    
- services
    
- contact form
    
- pricing
    
- likes
    
- comments
    
- unnecessary search
    
- unnecessary analytics
    

### Recovery

Check the v1 scope in `PRD.md`.

Do not implement features outside scope unless explicitly requested.

---

## Failure 3 — Using gradients

### Problem

The implementation adds:

```css
background: linear-gradient(...);
```

### Recovery

Remove the gradient.

Use:

- solid color
    
- typography
    
- spacing
    
- borders
    
- imagery
    
- subtle shadow
    
- motion
    

to establish hierarchy instead.

---

## Failure 4 — Copying Awwwards directly

### Problem

The agent copies a specific website's:

- layout
    
- branding
    
- typography
    
- visual identity
    
- exact interaction
    

### Recovery

Use Awwwards only as a reference for general presentation qualities:

- editorial composition
    
- whitespace
    
- typography
    
- visual hierarchy
    
- interaction quality
    

Maintain Synapse's own visual identity.

---

## Failure 5 — Hardcoding CMS content

### Problem

Projects, members, or assignments are directly embedded into components even though Sanity is required.

### Recovery

Move content into the appropriate Sanity schema/query and keep presentation components data-driven.

---

## Failure 6 — Empty optional sections

### Problem

A project renders headings for Research, Wireframe, or Final Design even when there is no content.

### Recovery

Make optional sections conditional.

No content:

```text
do not render section
```

Content exists:

```text
render section
```

---

## Failure 7 — Desktop-only implementation

### Problem

The desktop version looks correct but:

- horizontal scrolling breaks on mobile
    
- text overflows
    
- tables become unusable
    
- navigation becomes inaccessible
    
- Figma embeds overflow the viewport
    

### Recovery

Re-test at mobile and tablet breakpoints.

Adapt interaction patterns instead of merely shrinking desktop components.

---

## Failure 8 — Animation without reduced-motion support

### Problem

Important movement continues even when the user requests reduced motion.

### Recovery

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Reduce or disable non-essential animation while preserving usability.

---

## Failure 9 — Duplicate components

### Problem

A new component is created even though an equivalent reusable component already exists.

### Recovery

Search the repository first.

Prefer extending the existing component when the behavior belongs to the same conceptual component.

Only create a new component when the responsibility is genuinely different.

---

## Failure 10 — Fixing unrelated code

### Problem

A small UI request results in a massive refactor.

### Recovery

Return to the smallest change that satisfies the requirement.

Only expand scope when:

- the existing architecture prevents implementation,
    
- the change fixes a directly related bug,
    
- or the user explicitly requested refactoring.
    

---

## Failure 11 — Declaring success without validation

### Problem

The agent modifies code and immediately reports completion.

### Recovery

Run the appropriate validation workflow.

At minimum:

```text
build
→ affected route
→ runtime/console check
→ responsive check
→ accessibility check
→ PRD/DESIGN check
```

Fix failures before completion.

---

# 9. Definition of Done

A Synapse implementation task is complete only when:

-  The requested behavior is implemented.
    
-  Existing functionality is preserved unless intentionally changed.
    
-  The implementation follows `PRD.md`.
    
-  The implementation follows `DESIGN.md`.
    
-  Existing components/tokens were reused where appropriate.
    
-  No unnecessary dependency was introduced.
    
-  No gradient was introduced.
    
-  Responsive behavior was considered.
    
-  Relevant loading/empty/error/success states exist.
    
-  Relevant accessibility requirements are satisfied.
    
-  Motion respects reduced-motion preferences.
    
-  CMS content is not unnecessarily hardcoded.
    
-  The affected route/component was validated.
    
-  Build/runtime errors introduced by the change are resolved.
    

For larger features, also verify:

-  The feature works with real CMS data.
    
-  The feature works when optional content is missing.
    
-  The feature works on mobile and tablet.
    
-  Keyboard navigation remains usable.
    
-  The final implementation still feels like Synapse rather than a generic template.
    

---

# 10. Completion Report

When the implementation is finished, report concisely:

### Changed

List the important files/components changed.

### Implemented

Summarize the actual behavior added or modified.

### Validated

List the validation performed.

### Notes

Mention:

- assumptions
    
- unresolved issues
    
- intentionally deferred work
    
- any requirement conflict that needs human decision
    

Do not claim a validation was performed if it was not actually performed.