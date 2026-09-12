# Synapse Portfolio Implementation Skill

## 1. Skill Name

**Synapse Portfolio Implementation**

---

## 2. Description

Use this skill when building, implementing, modifying, refactoring, or reviewing the **Synapse** website, a group portfolio for documenting UI/UX Design coursework and making the work easy for academic reviewers to explore.

This skill applies whenever a task involves one or more of the following:

* Building a new Synapse page or section.
* Implementing a UI component for Synapse.
* Modifying an existing Synapse page, component, or interaction.
* Implementing a project showcase or project detail page.
* Implementing the Design System Preview section.
* Implementing the Team section.
* Implementing the Weekly Assignment Archive.
* Implementing light/dark mode.
* Implementing responsive behavior.
* Connecting portfolio content to Sanity CMS.
* Implementing Figma prototype embeds or fallback links.
* Adding or modifying animations and interactions.
* Fixing a bug while preserving the Synapse design system.
* Refactoring code that affects Synapse UI or functionality.
* Reviewing an implementation against the Synapse requirements and design specifications.
* Adding content-driven functionality that is already defined by `PRD.md` or `DESIGN.md`.

### Do NOT use this skill for

Do not use this skill when the task is unrelated to Synapse, such as:

* Building a completely different website.
* Creating a generic UI component with no relationship to Synapse.
* Changing project requirements without updating the appropriate source document.
* Introducing features that are explicitly outside the v1.0 scope.
* Replacing Sanity with another CMS without an explicit requirement change.
* Creating a custom administration dashboard when Sanity Studio already fulfills the administration requirement.

---

# 3. Source of Truth

Before changing code, treat the project documents as the authoritative specification.

Read them in this order:

1. `PRD.md`
2. `DESIGN.md`
3. `SKILL.md`
4. `AGENTS.md`, if present
5. Existing project code and configuration
6. Existing Sanity schemas/content, if relevant

### Authority hierarchy

When information conflicts, use this priority:

1. Explicit user instruction in the current task.
2. `PRD.md` for product requirements, scope, users, goals, and functionality.
3. `DESIGN.md` for visual design, layout, components, interaction, accessibility, and design tokens.
4. `AGENTS.md` for repository-specific engineering conventions.
5. `SKILL.md` for implementation workflow and execution rules.
6. Existing code, only when it does not contradict the documents above.

Never silently invent a requirement to resolve a conflict.

If two documents conflict:

1. Follow the more specific rule.
    
2. Prefer explicit project requirements over assumptions.
    
3. Do not silently invent a new product requirement.
    
4. If the conflict materially changes the implementation, report it before making a destructive change.

---

# 4. Synapse Product Context

Synapse is a group portfolio website for documenting UI/UX Design coursework and presenting the group's work to academic reviewers.

The primary user is:

> **Dosen / Reviewer Akademik**

Secondary users include:

* Group members.
* General visitors.

The website must help visitors:

* Understand what Synapse is.
* Explore Education and Industry project categories.
* Browse portfolio projects.
* Open detailed project documentation.
* View available design process documentation.
* View Figma prototypes.
* Understand the team and each member's role.
* Browse the weekly assignment archive.
* Switch between light and dark themes.

Synapse is **not** a generic portfolio template. Do not introduce visual or structural patterns simply because they are popular in other portfolio websites.

---

# 5. Core Design Rules

These rules are mandatory unless the user explicitly overrides them.

## 5.1 Synapse has its own visual identity

Do not use the Education or Industry visual directions as the website's global visual system.

Education and Industry are **content categories**, not separate global themes.

Synapse's primary visual identity uses:

* Light background: `#FFF8E7`
* Primary: `#930500`
* Secondary: `#95BBEA`

Additional colors may be used when required by the design system, but new colors must have a clear purpose.

Dark mode may use an appropriate dark adaptation while preserving Synapse's identity.

---

## 5.2 No gradients

Do not introduce gradients anywhere in the Synapse interface unless the user explicitly requests one.

Avoid:

* Linear gradients.
* Radial gradients.
* Gradient text.
* Gradient backgrounds.
* Gradient overlays used purely for decoration.

Use typography, spacing, imagery, borders, contrast, scale, and composition to create visual interest instead.

---

## 5.3 Negative space is intentional

The homepage begins with a large welcome section immediately after the Navbar.

Its content is intentionally minimal:

* Website name: `Synapse`
* A short supporting body/caption.

Do not fill this area with unnecessary:

* Images.
* Cards.
* Illustrations.
* Decorative gradients.
* Floating shapes.
* Excessive animation.
* Marketing copy.

Whitespace is part of the design, not missing content.

---

## 5.4 Project showcase

The project showcase should feel editorial and portfolio-oriented.

Use:

* Large visual elements.
* Strong typography.
* Generous whitespace.
* Intentional asymmetry where appropriate.
* Clear project hierarchy.
* User-controlled horizontal exploration.

Do not create:

* Autoplaying infinite carousels.
* Content that moves without user control.
* Excessive card grids.
* Generic SaaS dashboard layouts.

On mobile, horizontal project exploration must remain usable through touch/swipe interaction.

---

## 5.5 Project detail pages

Project detail content is flexible.

The expected structure is:

1. Project Hero
2. Project Overview
3. Project Information
4. Process / Documentation
5. Research, if available
6. Wireframe, if available
7. Final Design
8. Figma Prototype
9. Related / Next Project

Do not display empty sections merely because the section exists in the template.

If documentation is unavailable, omit that section gracefully.

---

## 5.6 Motion

Use subtle editorial motion.

Preferred motion characteristics:

* Short duration.
* Smooth transitions.
* Low visual intensity.
* Clear relationship to user interaction.
* No animation that blocks content access.

Typical duration ranges:

* Micro interaction: `150–200ms`
* UI transition: `200–300ms`
* Section transition: `300–500ms`
* Hero interaction: `400–700ms`

Support `prefers-reduced-motion`.

If motion is not necessary to communicate hierarchy or interaction, do not add it.

---

# 6. Required Workflow

Every implementation task must follow these steps.

---

## Step 1 — Understand the request

Identify:

* What the user wants changed.
* Which page or component is affected.
* Whether the task is visual, functional, content-related, or architectural.
* Whether the request is within v1.0 scope.
* Which requirements in `PRD.md` are affected.
* Which rules in `DESIGN.md` are affected.

Do not immediately start coding.

First determine the intended outcome.

---

## Step 2 — Inspect the relevant source documents

Read the relevant sections of:

* `PRD.md`
* `DESIGN.md`
* `AGENTS.md`, if available.

Do not read unrelated sections solely to increase context.

For example:

If asked to implement the Team section:

* Read the Team requirements in `PRD.md`.
* Read the Team layout and component specification in `DESIGN.md`.
* Read relevant repository conventions in `AGENTS.md`.

---

## Step 3 — Inspect the existing implementation

Before creating or changing a component:

1. Find whether the component already exists.
2. Find related components.
3. Inspect existing styling and design tokens.
4. Inspect existing data structures.
5. Inspect existing Sanity schemas if content-driven.
6. Reuse existing primitives when appropriate.

Do not create duplicate components when an existing component can fulfill the requirement.

Prefer:

> Reuse → Extend → Refactor → Create new

rather than:

> Create new → Duplicate → Fix conflicts later.

Humanity has suffered enough from 17 nearly identical `Button` components.

---

## Step 4 — Determine the smallest valid change

Implement the smallest change that fully satisfies the request.

Do not introduce unrelated:

* Features.
* Dependencies.
* Design patterns.
* Refactors.
* File restructuring.
* CMS schemas.
* Animations.

A task asking for a project card should not result in a new design system, routing architecture, and philosophical treatise on cards.

---

## Step 5 — Implement according to the design specification

Translate `DESIGN.md` into implementation.

Respect:

* Color tokens.
* Typography hierarchy.
* Spacing.
* Responsive behavior.
* Component structure.
* Interaction rules.
* Motion rules.
* Accessibility requirements.
* Empty/loading/error/success states.

Do not approximate the design with arbitrary values when an existing token already exists.

---

## Step 6 — Implement responsive behavior

Every new UI implementation must consider:

### Mobile

* Narrow viewport.
* Touch interaction.
* Stacked layouts where necessary.
* Horizontal scrolling when specified.
* Readable typography.
* Adequate touch targets.

### Tablet

* Intermediate layout.
* Appropriate spacing.
* Avoid simply stretching the mobile layout.

### Desktop

* Full editorial composition.
* Maximum content width.
* Large typography where specified.
* Generous negative space.

Do not treat responsiveness as an afterthought.

---

## Step 7 — Implement accessibility

Every relevant implementation must follow WCAG 2.1 AA design intent.

Check:

* Semantic HTML.
* Heading hierarchy.
* Keyboard navigation.
* Visible focus states.
* Sufficient color contrast.
* Meaningful `alt` text.
* Correct button/link semantics.
* Touch target size.
* Reduced-motion behavior.
* Information that is not conveyed through color alone.

For Figma prototypes:

* Provide a fallback link if embedding is unavailable or inaccessible.

---

## Step 8 — Implement content architecture when required

When content is managed through Sanity:

1. Determine whether an appropriate schema already exists.
2. Reuse the existing schema when possible.
3. Add fields only when the requirement requires them.
4. Ensure required and optional content are clearly distinguished.
5. Handle missing optional content gracefully.
6. Do not create a custom admin dashboard.

Sanity Studio is the administration interface.

---

## Step 9 — Handle states

Every content-driven component should consider relevant states.

### Loading

Use:

* Skeletons.
* Reserved layout space.
* Non-blocking loading indicators where appropriate.

### Empty

Show a clear message when content does not exist.

Do not leave unexplained blank space.

### Error

Show:

* Clear error feedback.
* Retry action where meaningful.
* Stable surrounding layout where possible.

### Success

Use lightweight confirmation feedback when an action requires confirmation.

Do not create intrusive success screens for simple interactions.

---

## Step 10 — Validate the implementation

After implementation, verify:

### Functional

* The requested behavior works.
* Navigation works.
* Links point to the correct destinations.
* Dynamic content renders correctly.
* Optional content does not create broken layouts.
* Theme switching works where relevant.

### Visual

* Colors follow Synapse tokens.
* No unauthorized gradients exist.
* Typography hierarchy is preserved.
* Spacing is consistent.
* Negative space is preserved.
* Layout behaves correctly at different viewport sizes.

### Responsive

Check at minimum:

* Mobile.
* Tablet.
* Desktop.

### Accessibility

Check:

* Keyboard navigation.
* Focus visibility.
* Semantic structure.
* Contrast.
* Reduced motion.
* Alternative text.

### Scope

Confirm that the implementation did not accidentally introduce an out-of-scope v1.0 feature.

---

## Step 11 — Review against the requirement

Before considering the task complete, explicitly compare the implementation against the relevant requirement.

Use this mental checklist:

```text
Requirement understood?
        ↓
Correct existing implementation inspected?
        ↓
Smallest valid change implemented?
        ↓
Design specification respected?
        ↓
Responsive behavior handled?
        ↓
Accessibility handled?
        ↓
Content/state edge cases handled?
        ↓
Implementation verified?
        ↓
No unnecessary scope added?
        ↓
DONE
```

---

# 7. Implementation Rules

## 7.1 Reuse existing tokens

If a design token exists, use it.

Prefer:

```text
Synapse primary token
```

over:

```text
#8F0603
```

unless the different value is explicitly required.

Do not create visually similar duplicate values.

---

## 7.2 Avoid arbitrary styling

Do not add arbitrary:

* Colors.
* Font sizes.
* Border radii.
* Shadows.
* Spacing.
* Animation durations.

If a new value is genuinely required, choose it consistently with the existing design system.

---

## 7.3 Keep components focused

A component should have one clear responsibility.

Prefer:

```text
ProjectShowcase
ProjectShowcaseItem
ProjectMeta
```

over one enormous component containing every section of the application.

---

## 7.4 Separate content from presentation

Content that belongs in Sanity should not be hardcoded into UI components when the requirement expects it to be editable.

For example:

Do not hardcode:

```text
Project title
Project description
Team member role
Weekly assignment title
```

when these are CMS-managed fields.

---

## 7.5 Preserve optional content

Project documentation is flexible.

For example:

```text
Research available?
    Yes → render ResearchSection
    No  → omit ResearchSection
```

Do not render:

```text
Research
No research available
```

unless the design explicitly requires an empty state.

---

## 7.6 Avoid unnecessary dependencies

Before adding a package:

1. Check whether the functionality already exists.
2. Check whether the existing stack can solve the problem.
3. Check whether the dependency is justified by project requirements.
4. Add it only when necessary.

Do not install a library because its README has a particularly attractive screenshot.

---

## 7.7 Do not break existing behavior

When modifying an existing component:

* Preserve existing public behavior.
* Preserve required props/data contracts unless intentionally changing them.
* Preserve accessibility.
* Preserve responsive behavior.
* Preserve theme support.

If the requested change necessarily breaks an existing contract, identify the affected areas before proceeding.

---

# 8. Synapse Page Rules

## 8.1 Homepage order

The homepage should follow this order:

```text
Navbar
↓
Welcome / Negative Space
↓
Split-View Hero
↓
Project Showcase
↓
Design System Preview
↓
Team
↓
Weekly Assignment Archive
↓
Footer
```

Do not reorder these sections without an explicit design/product decision.

---

## 8.2 Split-View Hero

The Split-View Hero provides entry points into:

* Education
* Industry

It is a content/category distinction.

It must not make the entire website look like two unrelated websites.

Possible interaction:

* Hover-based panel emphasis on desktop.
* Touch-friendly interaction on mobile.
* Subtle motion.

Avoid aggressive animation.

---

## 8.3 Design System Preview

The Design System Preview should expose enough of Synapse's visual language to demonstrate:

* Colors.
* Typography.
* Components.
* Theme differences.
* Visual hierarchy.

It is a showcase of the system, not a separate design playground application.

---

## 8.4 Team

Each team member should support at least:

* Name.
* Photo.
* Role.

Additional information may be added only when supported by the requirements or available content.

---

## 8.5 Weekly Assignment Archive

The archive represents weekly college assignments.

Present the information in a table-oriented structure on desktop.

On smaller screens, use a responsive representation such as:

* Horizontal table scrolling.
* Stacked rows/cards when appropriate.

Do not sacrifice readability merely to force a desktop table into a narrow viewport.

---

# 9. Sanity Content Rules

At minimum, support content concepts for:

### Project

Potential fields include:

* Title.
* Slug.
* Category.
* Description.
* Project information.
* Hero media.
* Documentation.
* Research.
* Wireframe.
* Final design.
* Figma prototype.
* Related/next project.

Optional fields must remain optional when the project does not have that documentation.

### Team Member

At minimum:

* Name.
* Photo.
* Role.

### Weekly Assignment

At minimum:

* Assignment title.
* Week information.
* Relevant project/category reference when applicable.
* Supporting information required by the archive design.

Do not invent additional required fields without a product requirement.

---

# 10. Examples

## Example 1 — Add a new project

### User request

> Tambahkan project baru ke Synapse.

### Correct execution

1. Read project requirements.
2. Inspect existing project schema.
3. Check whether the project model already supports the required fields.
4. Add the project through Sanity content management.
5. Verify the project appears in the showcase.
6. Verify `/proyek/[slug]` renders the project.
7. Verify optional sections are omitted when data is unavailable.
8. Verify responsive behavior.
9. Verify the Figma prototype fallback if applicable.

Do not create a new project page template if the existing dynamic project route already supports it.

---

## Example 2 — Add Research documentation

### User request

> Project X sekarang punya dokumentasi research. Tampilkan di halaman detail.

### Correct execution

1. Inspect the existing project detail implementation.
2. Inspect the Sanity project schema.
3. Determine whether research content is already supported.
4. If supported, populate the existing field.
5. If not supported, add the minimum required schema structure.
6. Render `ResearchSection` only when research content exists.
7. Verify the layout does not break for projects without research.
8. Verify mobile and desktop presentation.

Do not force every project to have a Research section.

---

## Example 3 — Change the primary color

### User request

> Ganti warna utama Synapse.

### Correct execution

1. Confirm that this is a global design change.
2. Inspect `DESIGN.md`.
3. Identify every component using the primary color token.
4. Update the design token rather than manually changing individual components.
5. Verify light mode.
6. Verify dark mode.
7. Verify contrast.
8. Verify components such as links, buttons, headings, and interactive states.

Do not replace individual hex values randomly throughout the codebase.

---

## Example 4 — Add an animation

### User request

> Bikin hero lebih hidup saat hover.

### Correct execution

1. Identify the Hero interaction.
2. Use the existing motion principles.
3. Keep the animation subtle and editorial.
4. Use a short, smooth transition.
5. Ensure the interaction does not block navigation.
6. Provide reduced-motion behavior.
7. Verify keyboard/focus behavior.
8. Test on touch devices.

Do not introduce autoplay animation or large continuous motion.

---

## Example 5 — Add a custom admin dashboard

### User request

> Buat dashboard admin sendiri untuk mengelola project.

### Correct execution

Reject the implementation as unnecessary under the current specification.

Reason:

* Sanity is the CMS.
* Sanity Studio is the administration interface.
* A custom admin dashboard is not part of the current v1.0 scope.

Only implement it if the product requirements are explicitly changed.

---

## Example 6 — Build a new section not mentioned in the PRD

### User request

> Tambahkan blog dan komentar untuk setiap project.

### Correct execution

Do not silently implement it.

First classify the request as a scope change because blog/comment functionality is outside the current v1.0 scope.

The requirement must be intentionally updated before implementation.

---

# 11. Common Failure Modes

## Failure 1 — Coding before reading the specification

### Problem

The model immediately writes code based on the user's short request.

### Consequence

The implementation may contradict existing requirements or duplicate existing components.

### Prevention

Always inspect:

```text
PRD.md
DESIGN.md
AGENTS.md
existing implementation
```

before making non-trivial changes.

---

## Failure 2 — Treating Education and Industry as website themes

### Problem

The model creates a blue/orange Education theme and a dark cyan Industry theme across the entire interface.

### Why it is wrong

Education and Industry are content categories.

Synapse has its own visual identity.

### Correct behavior

Use the Synapse design system globally.

Use Education/Industry as content classification and navigation context.

---

## Failure 3 — Adding gradients

### Problem

The model adds a gradient to make the design "more modern."

### Why it is wrong

Gradients are explicitly prohibited.

### Correct behavior

Use:

* Typography.
* Scale.
* Spacing.
* Imagery.
* Borders.
* Contrast.
* Composition.

---

## Failure 4 — Filling the welcome section

### Problem

The model adds images, illustrations, cards, statistics, or decorative shapes to the large opening area.

### Why it is wrong

The negative space is intentional.

### Correct behavior

Keep the opening focused on:

```text
Synapse
+
supporting caption/body
```

---

## Failure 5 — Creating excessive UI

### Problem

Every piece of content becomes a card.

### Why it is wrong

Synapse follows an editorial portfolio direction rather than a generic dashboard/card-grid aesthetic.

### Correct behavior

Use composition, typography, imagery, and whitespace to create hierarchy.

---

## Failure 6 — Autoplay carousel

### Problem

The project showcase automatically scrolls.

### Why it is wrong

The showcase is user-controlled.

### Correct behavior

Use horizontal exploration controlled by the visitor, including touch/swipe on mobile.

---

## Failure 7 — Rendering unavailable project sections

### Problem

Every project displays:

```text
Research
Wireframe
Final Design
Prototype
```

even when the project has no corresponding documentation.

### Why it is wrong

Project case studies are intentionally flexible.

### Correct behavior

Render optional sections only when content exists.

---

## Failure 8 — Hardcoding CMS content

### Problem

The model writes project titles, team members, and assignments directly into components.

### Why it is wrong

These are content-managed entities.

### Correct behavior

Use Sanity content when the relevant information is expected to be editable.

---

## Failure 9 — Building a custom admin dashboard

### Problem

The model creates `/admin` even though Sanity Studio already handles administration.

### Why it is wrong

It duplicates existing CMS functionality and expands scope unnecessarily.

### Correct behavior

Use Sanity Studio.

---

## Failure 10 — Ignoring mobile

### Problem

The model creates a desktop layout and assumes it will automatically become responsive.

### Why it is wrong

Editorial layouts often require deliberate responsive behavior.

### Correct behavior

Explicitly design and test mobile, tablet, and desktop behavior.

---

## Failure 11 — Overengineering

### Problem

A small feature causes:

* New dependencies.
* New architecture.
* New abstraction layers.
* Large refactors.
* Unrelated file changes.

### Why it is wrong

The implementation becomes harder to maintain than the feature itself.

### Correct behavior

Make the smallest change that satisfies the requirement.

---

## Failure 12 — Adding unrequested features

### Problem

The model adds:

* Search.
* Comments.
* Blog.
* Analytics dashboard.
* Authentication for public visitors.
* AI features.
* Multi-language support.
* Marketplace functionality.

### Why it is wrong

These are outside the defined v1.0 scope.

### Correct behavior

Do not expand scope unless explicitly requested and intentionally accepted.

---

## Failure 13 — Ignoring reduced motion

### Problem

The model adds animated transitions without considering users who prefer reduced motion.

### Correct behavior

Respect:

```text
prefers-reduced-motion
```

and provide a reduced-motion experience.

---

## Failure 14 — Using color as the only information signal

### Problem

A project category, state, or action is distinguished only through color.

### Why it is wrong

This reduces accessibility.

### Correct behavior

Combine color with:

* Text.
* Icons where appropriate.
* Labels.
* Structure.
* Position.
* Other visual cues.

---

## Failure 15 — Figma embed without fallback

### Problem

The model assumes an embedded Figma prototype will always load.

### Correct behavior

Provide a fallback link or alternative access method when appropriate.

---

# 12. Definition of Done

A Synapse implementation task is complete only when all applicable conditions are satisfied.

### Requirements

* [ ] The requested requirement is implemented.
* [ ] The implementation does not contradict `PRD.md`.
* [ ] The implementation follows `DESIGN.md`.
* [ ] The implementation follows `AGENTS.md`, if available.

### Design

* [ ] Synapse visual identity is preserved.
* [ ] No unauthorized gradients are used.
* [ ] Typography hierarchy is preserved.
* [ ] Spacing is intentional.
* [ ] Negative space is preserved where specified.
* [ ] Project showcase remains editorial and user-controlled.

### Responsive

* [ ] Mobile behavior works.
* [ ] Tablet behavior works.
* [ ] Desktop behavior works.
* [ ] Touch interactions work where required.

### Accessibility

* [ ] Semantic HTML is used.
* [ ] Keyboard interaction works.
* [ ] Focus states are visible.
* [ ] Contrast is acceptable.
* [ ] Images have appropriate alternative text.
* [ ] Touch targets are usable.
* [ ] Reduced motion is supported.

### Content

* [ ] CMS-managed content is not unnecessarily hardcoded.
* [ ] Optional content is handled gracefully.
* [ ] Empty states are intentional.
* [ ] Loading states are handled where necessary.
* [ ] Error states are handled where necessary.

### Engineering

* [ ] Existing components are reused where appropriate.
* [ ] No unnecessary dependencies were added.
* [ ] No unnecessary refactor was introduced.
* [ ] No unrelated files were changed.
* [ ] No out-of-scope feature was introduced.

### Verification

* [ ] The requested behavior was manually or programmatically verified.
* [ ] Relevant routes work.
* [ ] Relevant interactions work.
* [ ] Theme behavior works when applicable.
* [ ] The implementation does not introduce obvious regressions.

---

# 13. Final Execution Principle

When uncertain, follow this sequence:

```text
Read the requirement
        ↓
Check PRD.md
        ↓
Check DESIGN.md
        ↓
Check AGENTS.md
        ↓
Inspect existing implementation
        ↓
Reuse before creating
        ↓
Implement the smallest valid change
        ↓
Respect Synapse design rules
        ↓
Handle responsive + accessibility + states
        ↓
Verify against the requirement
        ↓
Stop
```

The goal is not to build the most complicated implementation.

The goal is to build the **correct Synapse implementation**, with the smallest amount of unnecessary complexity.
