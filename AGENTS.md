## 1. Project Overview

**Synapse** is a group UI/UX portfolio website created to document and present the team's UI/UX work, design process, team contributions, design-system exploration, and weekly academic assignments.

The primary audience is:

- Lecturers
    
- Academic reviewers
    

The secondary audience is:

- Team members
    
- General visitors
    

The website should feel like a **curated editorial portfolio**, not a generic academic dashboard or assignment-management system.

---

## 2. Instruction Hierarchy

This repository uses four project documents with different responsibilities:

|File|Responsibility|
|---|---|
|`PRD.md`|Product requirements, goals, users, scope|
|`DESIGN.md`|Visual design, UX, layout, components, tokens|
|`SKILL.md`|Development workflow, implementation procedure, validation|
|`AGENTS.md`|Repository-level rules and always-on agent instructions|

Follow this distinction strictly.

### Priority

When instructions conflict:

1. Follow the most specific applicable repository instruction.
    
2. Follow explicit requirements over assumptions.
    
3. Follow the closest `AGENTS.md` if nested agent instructions exist.
    
4. Use `PRD.md` for product requirements.
    
5. Use `DESIGN.md` for design decisions.
    
6. Use `SKILL.md` for development workflow.
    
7. Do not silently invent requirements.
    

Do not copy the entire contents of `PRD.md`, `DESIGN.md`, or `SKILL.md` into implementation decisions. Read the relevant source document when needed.

---

# 3. Technology Direction

The intended web stack is:

- Next.js
    
- React
    
- TypeScript
    
- Tailwind CSS
    
- Framer Motion
    
- Sanity.io
    
- Sanity Studio
    
- Vercel
    

Use the versions and configuration actually present in the repository as the authoritative technical source.

Do not upgrade framework or dependency versions simply because newer versions exist.

If the repository configuration differs from the stack listed above, inspect the current implementation before changing it.

---

# 4. Repository Orientation

Before modifying the repository:

1. Inspect the root directory.
    
2. Inspect `package.json`.
    
3. Inspect the Next.js application structure.
    
4. Inspect existing components.
    
5. Inspect styling and design-token files.
    
6. Inspect Sanity configuration and schemas if the task involves CMS content.
    
7. Inspect relevant route files.
    
8. Check for nested `AGENTS.md` or equivalent repository instructions.
    

Do not assume a directory structure that has not been verified.

Typical areas may include:

```text
app/
components/
lib/
public/
sanity/
styles/
```

These names are examples of expected responsibilities, not mandatory paths.

Use the repository's actual structure when working.

---

# 5. Development Commands

Use the commands defined by the repository's `package.json`.

Before running commands, inspect available scripts:

```bash
npm run
```

or the equivalent package-manager command already established by the repository.

At minimum, identify the available commands for:

- development server
    
- build
    
- lint
    
- type checking
    
- tests
    
- formatting
    

Do not invent missing scripts.

## Recommended validation order

For a normal frontend change:

```text
1. focused validation
2. lint
3. type check
4. build
```

If the repository provides automated tests, run the relevant focused test first and the broader test suite when appropriate.

If a command does not exist, do not create a new script merely to satisfy this document unless the task explicitly requires it.

---

# 6. Local Development

Use the repository's documented package manager.

Do not switch package managers without a reason.

Respect existing lockfiles:

```text
package-lock.json
pnpm-lock.yaml
yarn.lock
bun.lockb
```

Do not replace or regenerate a lockfile using a different package manager.

Environment variables must be provided through the repository's expected environment mechanism.

Never commit secrets.

Never place credentials, API keys, tokens, or private CMS credentials into:

- source code
    
- Markdown documentation
    
- committed configuration
    
- client-side code
    
- `AGENTS.md`
    

---

# 7. Application Architecture

## 7.1 App structure

Use Next.js App Router conventions where the repository has adopted them.

Prefer:

- Server Components by default
    
- Client Components only when interaction or browser APIs require them
    
- route-level composition
    
- reusable presentation components
    
- data-driven content
    

Do not add `"use client"` to a component unless it actually needs client-side behavior.

---

## 7.2 Component architecture

Components should have one clear responsibility.

Prefer:

```text
ProjectShowcase
ProjectCard
ProjectMeta
```

over a single oversized component containing every project-related behavior.

Reuse existing components before creating new ones.

Before creating a component:

1. Search for an existing equivalent.
    
2. Determine whether an existing component can be extended.
    
3. Create a new component only when its responsibility is meaningfully different.
    

Avoid duplicate variants with names such as:

```text
Card.tsx
CardNew.tsx
CardFinal.tsx
CardV2.tsx
```

unless the repository has a documented reason for the distinction.

---

# 8. Styling Rules

The visual system defined in `DESIGN.md` is authoritative for Synapse.

The website's primary palette is:

```text
#FFF2B2
#A8C6E7
#FFE08A
#FFF7D6
#7FA8D6
```

Do not replace these colors with an unrelated global palette.

Use semantic design tokens rather than scattering raw color values throughout components.

Preferred:

```text
background
surface
primary
primary-strong
accent
text
text-muted
border
```

Avoid:

```text
blue-1
blue-2
random-yellow
card-blue-final
```

unless the existing codebase already uses another documented token convention.

---

## 8.1 No gradients

Gradients are prohibited for the Synapse website unless the user explicitly changes this requirement.

Do not introduce:

```css
linear-gradient(...)
radial-gradient(...)
conic-gradient(...)
```

Use solid colors, imagery, typography, borders, spacing, and subtle shadows instead.

---

## 8.2 Typography

Preferred typeface:

**Plus Jakarta Sans**

Fallback:

```text
Inter, system-ui, sans-serif
```

Use typography to establish hierarchy.

Avoid compensating for weak layout with:

- excessive font weights
    
- excessive uppercase text
    
- oversized labels
    
- unnecessary decorative typography
    

---

# 9. Layout Rules

Synapse uses a spacious editorial layout.

Target desktop system:

```text
max content width: approximately 1280px
columns: 12
gutter: approximately 24px
```

Target tablet system:

```text
columns: 8
gutter: approximately 20px
```

Target mobile system:

```text
columns: 4
side padding: approximately 16px
gutter: approximately 16px
```

Use the actual values defined by the current `DESIGN.md` and implementation tokens when available.

Do not compress the interface simply to display more content above the fold.

Whitespace is part of the design.

---

# 10. Homepage Structure

The homepage should follow this hierarchy:

```text
Navbar
↓
Welcome / Intro
↓
Split-View Hero
↓
Project Showcase
↓
Design System Preview
↓
Team Profile
↓
Weekly Assignment Archive
↓
Footer
```

## Welcome / Intro

The opening section should be spacious and minimal.

It introduces:

```text
Synapse
Group UI/UX Portfolio
```

Do not fill this section with unnecessary cards, statistics, or decorative graphics.

---

## Split-View Hero

The hero communicates the contrast between:

- Education
    
- Industry
    

This contrast represents the portfolio's project spectrum.

Do not confuse these project categories with the website's global visual identity.

The website itself retains the Synapse visual system.

---

## Project Showcase

The showcase should use an editorial portfolio presentation.

Preferred qualities:

- spacious composition
    
- strong typography
    
- visual project previews
    
- clear metadata
    
- controlled interaction
    
- deliberate scrolling
    
- responsive behavior
    

Do not implement an infinite autoplay carousel.

Horizontal project progression should remain usable through:

- pointer interaction
    
- touch interaction
    
- keyboard interaction where applicable
    
- direct project links
    

---

# 11. Project Detail

Project route:

```text
/proyek/[slug]
```

Project pages must be data-driven.

Possible content includes:

```text
Project Hero
Overview
Project Information
Process / Documentation
Research
Wireframe
Final Design
Figma Prototype
Next Project
```

Not every project must contain every section.

Optional content must be conditionally rendered.

Do not render empty headings or blank content blocks.

---

# 12. Sanity CMS

Sanity Studio is the required CMS approach for v1.

Do not build a custom CMS administration dashboard.

Expected content domains include:

### Project

Potential fields:

- title
    
- slug
    
- category
    
- year
    
- description
    
- hero image
    
- overview
    
- documentation
    
- research
    
- wireframe
    
- final design
    
- Figma prototype
    

### Team Member

Potential fields:

- name
    
- photo
    
- role
    

### Weekly Assignment

Potential fields:

- week
    
- title
    
- description
    
- status
    
- related project
    

The actual schema in the repository is authoritative.

Do not duplicate CMS content inside page components unless static fallback content is explicitly required.

---

# 13. Data and Content Rules

Prefer data-driven rendering.

Example:

```tsx
projects.map((project) => (
  <ProjectCard
    key={project.slug}
    project={project}
  />
))
```

Avoid repeating structurally identical markup for every project.

Do not hardcode CMS-managed content into components.

Do not assume every project has identical documentation.

Use optional content safely.

---

# 14. Responsive Requirements

Every frontend change must consider:

- desktop
    
- tablet
    
- mobile
    

Check specifically for:

- text overflow
    
- horizontal page overflow
    
- image cropping
    
- navigation behavior
    
- touch targets
    
- table usability
    
- Figma embed sizing
    
- project showcase interaction
    
- typography scaling
    
- spacing
    
- section height
    

Do not simply shrink desktop layouts.

When an interaction changes on mobile, preserve the underlying user goal.

---

# 15. Accessibility

Target:

**WCAG 2.1 AA**

Required practices include:

- semantic HTML
    
- keyboard navigation
    
- visible focus indicators
    
- meaningful alt text
    
- accessible interactive controls
    
- adequate color contrast
    
- usable touch targets
    
- reduced-motion support
    
- accessible tables
    
- understandable error messages
    

Do not use color as the only method of communicating meaning.

Interactive elements must remain identifiable without hover.

---

# 16. Motion

Use Framer Motion where it provides meaningful interaction value.

Motion should be:

- subtle
    
- editorial
    
- purposeful
    
- short enough to preserve flow
    

Preferred effects:

```text
fade
slide
slight scale
light parallax
controlled hover movement
```

Respect:

```text
prefers-reduced-motion
```

Do not add animation merely because Framer Motion is installed.

Do not create animations that prevent users from quickly accessing content.

---

# 17. Loading, Empty, Error, and Success States

Use predictable state patterns.

### Loading

Use skeletons or placeholders.

Reserve layout space to reduce layout shift.

### Empty

Explain why content is unavailable.

Use an optional CTA where useful.

### Error

Provide:

- understandable message
    
- retry action where applicable
    

Do not expose stack traces or internal implementation details.

### Success

Use:

- inline confirmation
    
- toast
    
- lightweight feedback
    

Do not use disruptive confirmation UI for trivial actions.

---

# 18. Images and Assets

Optimize images before shipping them.

Consider:

- appropriate dimensions
    
- modern formats where supported
    
- responsive sizing
    
- lazy loading where appropriate
    
- meaningful alt text
    
- preventing layout shifts
    

Do not use a large source image when a smaller asset is sufficient.

Do not add decorative imagery solely to fill empty space.

---

# 19. Dependencies

Before adding a dependency:

1. Check whether the repository already contains an equivalent capability.
    
2. Check whether the feature can be implemented with existing tools.
    
3. Consider bundle size and maintenance cost.
    
4. Add the dependency only when it materially improves the implementation.
    

Do not add libraries for trivial functionality.

Do not upgrade unrelated dependencies during a feature task.

---

# 20. Security and Secrets

Never commit:

```text
.env
.env.local
.env.production
API keys
access tokens
passwords
private credentials
```

Do not expose Sanity private credentials to the browser.

Use public/client-safe configuration only where appropriate.

If a security-sensitive change is requested, inspect the existing architecture before modifying authentication, authorization, or credential handling.

Do not weaken security controls merely to make local development easier.

---

# 21. Generated and Configuration Files

Do not manually modify generated files when the repository provides a source-of-truth generator.

Examples may include:

```text
generated/
.next/
node_modules/
coverage/
build output
```

The actual repository structure is authoritative.

If generated output changes as a consequence of a build, do not commit it unless the repository explicitly requires generated artifacts to be version controlled.

---

# 22. Git Rules

Keep changes focused.

A task should not silently become a repository-wide refactor.

Before modifying files, understand the current working tree when possible.

Do not overwrite unrelated user changes.

Do not reset, revert, or delete user work unless explicitly instructed.

Do not modify deployment, CI, infrastructure, or unrelated configuration merely because it is convenient.

Prefer focused commits when the user is asking for commit-ready work.

Follow the repository's existing commit-message convention if one exists.

---

# 23. Do Not Do These Things

Unless explicitly requested, do not:

- add features outside the current product scope
    
- introduce gradients
    
- replace the Synapse visual identity
    
- copy another portfolio's branding
    
- create a custom CMS dashboard
    
- add unnecessary authentication flows
    
- add comments/likes/guestbooks
    
- add a blog
    
- add AI/chatbot features
    
- add recommendation systems
    
- add real-time collaboration
    
- add native mobile applications
    
- add unrelated analytics dashboards
    
- introduce unnecessary dependencies
    
- perform broad refactors
    
- upgrade unrelated dependencies
    
- hardcode CMS-managed content
    
- expose secrets
    
- delete user-created work
    
- report unverified work as complete
    

---

# 24. Validation Before Completion

Every implementation change must be validated according to its scope.

## For UI changes

Check:

- correct route
    
- visual hierarchy
    
- responsive layout
    
- hover/focus behavior
    
- keyboard navigation
    
- loading/error/empty states when relevant
    
- no horizontal overflow
    
- no unintended gradients
    

## For data/CMS changes

Check:

- schema validity
    
- query behavior
    
- missing/optional fields
    
- rendering with real content
    
- rendering with incomplete content
    
- error handling
    

## For architecture changes

Check:

- type safety
    
- lint
    
- build
    
- relevant tests
    
- affected routes
    

Use the repository's actual scripts rather than assuming command names.

---

# 25. Definition of Done

A change is considered complete only when:

-  The requested behavior is implemented.
    
-  The implementation follows `PRD.md`.
    
-  The implementation follows `DESIGN.md`.
    
-  Existing project conventions are preserved.
    
-  Responsive behavior is considered.
    
-  Accessibility requirements relevant to the change are satisfied.
    
-  No gradient was introduced.
    
-  No secrets were added.
    
-  CMS content remains data-driven where applicable.
    
-  Relevant validation has been executed.
    
-  No known blocking error introduced by the change remains.
    
-  Unrelated files were not modified without reason.
    

---

# 26. Reporting

When reporting completed work, keep the report factual and concise.

Use:

```text
Changed
- files/components modified

Implemented
- behavior added or changed

Validation
- checks actually executed

Notes
- assumptions
- known limitations
- deferred work
```

Never claim:

```text
"Tests passed"
```

unless tests were actually run.

Never claim:

```text
"Build successful"
```

unless the build actually completed successfully.

Evidence beats confidence.

---

# 27. Maintenance

Keep this file synchronized with the repository.

Update `AGENTS.md` when any of these materially change:

- framework
    
- package manager
    
- build process
    
- test process
    
- repository architecture
    
- CMS architecture
    
- security boundaries
    
- design-system constraints
    
- generated-file rules
    

Do not turn this file into a second `PRD.md`, `DESIGN.md`, or `README.md`.

Its purpose is to provide **durable operational instructions that an agent needs before modifying the repository**.

When a rule is no longer true, remove or update it.

A stale instruction is worse than a missing instruction because it causes the agent to confidently do the wrong thing.