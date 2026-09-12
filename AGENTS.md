📄 # AGENTS.md

# Synapse Agent Guide

## 1. Purpose

This document defines the global rules for any AI agent working on the **Synapse** repository.

Synapse is a group portfolio website for documenting UI/UX Design projects and presenting those works to academic reviewers.

This file defines:

* repository working rules;
* source-of-truth hierarchy;
* agent responsibilities;
* scope boundaries;
* implementation principles;
* design protection rules;
* content and CMS rules;
* quality requirements;
* verification requirements;
* prohibited behavior.

All AI agents must follow these rules unless an explicit instruction from the user overrides them.

---

# 2. Agent Role

When working in this repository, act as a **careful implementation agent**, not an autonomous product owner.

Your responsibility is to:

1. understand the requested task;
2. inspect the relevant existing code;
3. consult the relevant project documentation;
4. implement the smallest correct change;
5. preserve existing functionality;
6. preserve the Synapse product and design identity;
7. verify the result before completion.

Do not independently redefine:

* product requirements;
* website scope;
* information architecture;
* visual identity;
* CMS architecture;
* major technical architecture.

If a requested change requires one of these decisions, identify it explicitly instead of silently making the decision.

---

# 3. Required Documentation

The repository uses four primary project documents:

```text
PRD.md
DESIGN.md
SKILL.md
AGENTS.md
```

Their responsibilities are different.

## 3.1 `PRD.md`

Defines:

* product purpose;
* problems being solved;
* target users;
* goals;
* features;
* scope;
* functional requirements;
* non-functional requirements;
* success criteria.

Use `PRD.md` to answer:

> What should be built, for whom, and why?

---

## 3.2 `DESIGN.md`

Defines:

* user flows;
* screen inventory;
* page layouts;
* components;
* design tokens;
* colors;
* typography;
* spacing;
* responsive behavior;
* UI states;
* motion;
* accessibility rules.

Use `DESIGN.md` to answer:

> How should Synapse look and behave?

---

## 3.3 `SKILL.md`

Defines the operational workflow for implementing and modifying Synapse.

Use `SKILL.md` to answer:

> How should an agent execute a Synapse-related task?

---

## 3.4 `AGENTS.md`

Defines global repository rules.

Use this document to answer:

> What rules must every agent follow while working in this repository?

---

# 4. Source of Truth Hierarchy

When requirements conflict, use the following priority:

1. Explicit instruction from the user in the current task.
2. `PRD.md`
3. `DESIGN.md`
4. `SKILL.md`
5. `AGENTS.md`
6. Existing repository code.
7. Personal assumptions or preferences.

Existing code is not automatically correct.

If code contradicts a higher-priority source, do not blindly preserve the contradiction.

However, do not silently perform a large corrective rewrite unless the requested task requires it.

Identify material conflicts when necessary.

---

# 5. Before Making Changes

Before editing code, perform the following process.

## Step 1: Understand the task

Determine:

* the requested outcome;
* affected feature;
* affected route or page;
* affected component;
* whether data or CMS changes are required;
* whether the task affects design;
* whether the task affects existing functionality.

Do not start modifying files until the task is understood.

---

## Step 2: Read relevant documentation

Read only the relevant parts of:

* `PRD.md`;
* `DESIGN.md`;
* `SKILL.md`;
* `AGENTS.md`.

Do not treat every task as requiring a complete reread of every document.

For example:

### Task

> Update the Team section.

Relevant information:

* Team requirements in `PRD.md`;
* Team layout in `DESIGN.md`;
* implementation workflow in `SKILL.md`;
* repository rules in `AGENTS.md`.

---

## Step 3: Inspect existing code

Before creating something new:

1. search for existing implementations;
2. inspect related components;
3. inspect existing routes;
4. inspect design tokens and styling;
5. inspect related data structures;
6. inspect Sanity schemas when applicable.

Prefer:

```text
Reuse
  ↓
Extend
  ↓
Refactor when necessary
  ↓
Create
```

Do not duplicate existing functionality simply because locating it requires reading more than one file. An astonishing amount of software history consists of this exact mistake.

---

## Step 4: Plan the smallest valid change

Before implementation, determine:

* files that need modification;
* files that need creation;
* expected effect of each change;
* possible regressions.

Do not modify unrelated files.

Do not combine unrelated refactors with feature work unless the refactor is necessary for the requested change.

---

# 6. Scope Protection

Synapse v1.0 must remain within the defined product scope.

Do not independently add:

* public user authentication;
* comments;
* blog functionality;
* search systems;
* analytics dashboards;
* AI-generated portfolio features;
* e-commerce;
* social networking features;
* notification systems;
* custom administration dashboards;
* unnecessary multilingual systems.

Do not introduce a feature simply because it seems useful.

A feature belongs in the implementation only when it is:

1. explicitly requested by the user; or
2. required to satisfy an existing product requirement.

---

# 7. Synapse Product Identity

## 7.1 Synapse is the global visual identity

Synapse has its own visual identity.

The primary palette includes:

```text
Background: #FFF8E7
Primary:    #930500
Secondary:  #95BBEA
```

Education and Industry are project categories.

They are not separate global website themes.

Do not make the overall website alternate between:

```text
Education Website Style
```

and

```text
Industry Website Style
```

based on category.

The global website must remain recognizably Synapse.

---

## 7.2 No gradients

Do not use gradients unless explicitly requested by the user.

This includes:

* linear gradients;
* radial gradients;
* conic gradients;
* gradient text;
* decorative gradient overlays;
* gradient backgrounds.

Do not attempt to bypass this rule by creating a barely visible gradient and pretending CSS semantics are a philosophical question.

Use:

* typography;
* composition;
* whitespace;
* solid colors;
* imagery;
* borders;
* scale;
* contrast.

---

## 7.3 Preserve negative space

The homepage includes a spacious welcome section after the Navbar and before the Split-View Hero.

Its primary content is:

```text
Synapse

Supporting body/caption
```

The large amount of empty space is intentional.

Do not fill it with:

* decorative illustrations;
* random floating elements;
* statistics;
* unnecessary cards;
* hero images;
* excessive animation.

Whitespace is a design element.

---

# 8. Homepage Structure

The homepage must preserve this section order unless explicitly changed:

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

Do not reorder, remove, or insert major sections based only on personal design preference.

---

# 9. Project Rules

## 9.1 Project categories

The primary known categories are:

* Education;
* Industry.

Categories are used to organize portfolio content.

They must not fragment the website into separate global design systems.

---

## 9.2 Project showcase

The project showcase follows an editorial portfolio approach.

Prioritize:

* large visual presentation;
* strong typography;
* generous spacing;
* clear project hierarchy;
* user-controlled exploration.

Do not implement:

* autoplay infinite carousels;
* automatic project movement;
* inaccessible horizontal interactions;
* dense generic card dashboards.

---

## 9.3 Horizontal interaction

When horizontal exploration is used:

### Desktop

The interaction may use scroll-driven or controlled horizontal movement.

### Mobile

The interaction must remain usable with touch/swipe.

Do not require hover to access essential content.

Do not hide projects behind an interaction that cannot be discovered or controlled.

---

## 9.4 Project detail pages

Project detail pages should support the following structure where content exists:

1. Project Hero
2. Project Overview
3. Project Information
4. Process / Documentation
5. Research
6. Wireframe
7. Final Design
8. Figma Prototype
9. Related / Next Project

Not every project requires every section.

Optional sections must be omitted when their content is unavailable.

Do not render empty template sections solely to maintain visual symmetry.

---

# 10. Content Management Rules

## 10.1 CMS

Synapse uses **Sanity** as its CMS.

Content administration is handled through **Sanity Studio**.

Do not create a custom public-facing or repository-local admin dashboard unless the product requirements are explicitly changed.

---

## 10.2 CMS-managed content

At minimum, CMS architecture must support content for:

### Projects

Such as:

* title;
* slug;
* category;
* description;
* project information;
* media;
* documentation;
* optional research;
* optional wireframe;
* final design;
* Figma prototype.

### Team Members

At minimum:

* name;
* photo;
* role.

### Weekly Assignments

At minimum, information needed to display the weekly assignment archive.

---

## 10.3 Do not hardcode editable content

If content is intended to be managed through Sanity, do not hardcode it into UI components.

Avoid:

```text
Project title directly inside JSX
```

when the project title belongs in CMS data.

Separate:

```text
Content
```

from:

```text
Presentation
```

where appropriate.

---

## 10.4 Optional CMS fields

Optional content must remain optional.

Use conditional rendering.

Example logic:

```text
Research exists?
├── Yes → Render research section
└── No  → Omit section
```

Do not require content that some existing projects cannot provide unless the product requirements explicitly change.

---

# 11. Design System Rules

## 11.1 Use design tokens

When a token exists, use it.

Do not scatter visually similar raw values across unrelated components.

Prefer:

```text
--color-primary
```

over repeatedly writing:

```text
#930500
```

when the project's styling architecture supports tokens.

---

## 11.2 Avoid arbitrary values

Before adding a new:

* color;
* spacing value;
* font size;
* border radius;
* shadow;
* animation duration;

check whether an existing design token already satisfies the requirement.

Create a new token only when a new semantic value is genuinely needed.

---

## 11.3 Typography

Maintain the typography hierarchy defined in `DESIGN.md`.

Do not reduce typography to arbitrary sizes to solve local layout problems.

Fix the layout when appropriate instead of shrinking text until the design technically fits.

---

## 11.4 Spacing

Use the spacing system consistently.

Large whitespace between major sections is intentional.

Do not compress major sections merely to make the homepage shorter.

---

## 11.5 Component responsibility

Components should have focused responsibilities.

Prefer:

```text
ProjectShowcase
├── ProjectShowcaseItem
├── ProjectMeta
└── ProjectVisual
```

rather than one large component containing unrelated presentation and data logic.

Do not over-abstract simple one-off markup solely for theoretical purity.

---

# 12. Theme Rules

## 12.1 Required themes

Synapse supports:

* Light mode;
* Dark mode.

Both themes are required.

---

## 12.2 Theme consistency

Dark mode must be intentionally designed.

Do not create dark mode by blindly applying:

```text
background: black;
color: white;
```

The dark theme should preserve:

* hierarchy;
* contrast;
* Synapse identity;
* focus visibility;
* readable surfaces;
* distinguishable borders.

---

## 12.3 Theme changes

Theme switching must not:

* break layout;
* hide content;
* reduce accessibility;
* create unreadable contrast;
* remove visible focus states.

---

# 13. Motion Rules

Synapse uses subtle editorial motion.

Use motion to communicate:

* hierarchy;
* relationship;
* navigation;
* interaction feedback.

Preferred durations:

```text
Micro interaction: 150–200ms
UI transition:    200–300ms
Section motion:   300–500ms
Hero interaction: 400–700ms
```

Avoid:

* continuous decorative animation;
* aggressive parallax;
* unnecessary bouncing;
* autoplay motion that distracts from content;
* animation that delays content access.

Always respect:

```text
prefers-reduced-motion
```

When reduced motion is requested:

* minimize non-essential transforms;
* disable parallax where possible;
* remove unnecessary animation;
* preserve all functionality.

---

# 14. Accessibility Requirements

Synapse targets **WCAG 2.1 AA**.

Every applicable implementation must consider the following.

## 14.1 Semantic HTML

Use appropriate elements:

```text
<header>
<nav>
<main>
<section>
<article>
<footer>
<button>
<a>
```

Do not use generic containers as interactive controls when semantic elements are appropriate.

---

## 14.2 Heading hierarchy

Maintain logical heading structure.

Do not choose heading levels solely because a particular browser default size looks convenient.

Style and semantic hierarchy are separate concerns.

---

## 14.3 Keyboard support

Interactive functionality must be accessible by keyboard.

Check:

* navigation;
* buttons;
* links;
* menus;
* theme toggle;
* dialogs, if any;
* horizontally interactive content where applicable.

---

## 14.4 Focus visibility

Keyboard focus must be visible.

Do not remove outlines without providing an accessible replacement.

---

## 14.5 Color contrast

Text and meaningful UI elements must have sufficient contrast according to the WCAG 2.1 AA target.

Do not use color as the only way to communicate information.

Combine color with:

* text;
* icons where appropriate;
* labels;
* position;
* structural changes.

---

## 14.6 Images

Informative images require meaningful alternative text.

Decorative images may use:

```text
alt=""
```

Do not use meaningless filenames as alternative text.

---

## 14.7 Touch targets

Interactive controls must remain usable on touch devices.

Target approximately:

```text
44 × 44px minimum
```

where applicable.

---

## 14.8 Figma prototypes

When a Figma prototype is embedded:

* provide a meaningful accessible label;
* provide a fallback link when necessary;
* do not make the embed the only possible method of access.

---

# 15. Responsive Requirements

Every relevant UI change must consider:

```text
Mobile
Tablet
Desktop
```

Do not validate a responsive feature only at one viewport size.

At minimum, check for:

* unintended horizontal overflow;
* text clipping;
* image cropping problems;
* inaccessible controls;
* broken horizontal scrolling;
* layout collisions;
* unusably small text;
* inadequate touch targets.

---

# 16. UI State Requirements

Content-driven features must handle applicable states.

## Loading

Use appropriate:

* skeletons;
* placeholders;
* progressive loading.

Avoid blocking the entire interface unnecessarily.

---

## Empty

When valid content does not exist:

* communicate the situation clearly;
* avoid unexplained blank space;
* provide an action only when meaningful.

---

## Error

Error states should:

* use understandable language;
* preserve stable layout where possible;
* provide retry when useful;
* avoid exposing raw internal errors to public users.

---

## Success

Use concise confirmation feedback when confirmation is necessary.

Do not interrupt the user with unnecessary full-screen success pages for minor actions.

---

# 17. Code Change Rules

## 17.1 Make minimal changes

Implement the smallest change that fully satisfies the task.

Do not combine:

```text
Feature request
+
unrelated redesign
+
dependency replacement
+
large refactor
```

into one change without necessity.

---

## 17.2 Reuse before creating

Before creating a new component:

1. search for an existing equivalent;
2. determine whether it can be reused;
3. determine whether it can be extended;
4. create a new component only when necessary.

---

## 17.3 Preserve existing behavior

Before changing shared code, identify where it is used.

Do not break:

* routes;
* existing props/contracts;
* CMS data;
* theme behavior;
* responsive behavior;
* accessibility.

If a breaking change is necessary, update all affected implementations as part of the task when within scope.

---

## 17.4 Avoid unnecessary dependencies

Before installing a package:

1. inspect existing dependencies;
2. check whether the existing stack can solve the problem;
3. determine whether the dependency is necessary;
4. prefer the simpler justified solution.

Do not add packages for trivial functionality.

---

## 17.5 Do not leave temporary artifacts

Do not leave unnecessary:

* debug logs;
* temporary mock UI;
* unused imports;
* dead code;
* abandoned files;
* commented-out experimental code.

Remove temporary implementation artifacts before completion.

---

# 18. Verification Requirements

Before completing a task, verify all applicable areas.

## Functional

* [ ] Requested behavior works.
* [ ] Relevant routes work.
* [ ] Links work.
* [ ] Dynamic data renders correctly.
* [ ] Optional data does not break the UI.
* [ ] Theme switching works when affected.

## Visual

* [ ] Synapse identity is preserved.
* [ ] No unauthorized gradients exist.
* [ ] Typography hierarchy is preserved.
* [ ] Spacing follows the design system.
* [ ] Negative space is preserved.
* [ ] Layout matches the relevant design specification.

## Responsive

* [ ] Mobile checked.
* [ ] Tablet checked.
* [ ] Desktop checked.
* [ ] No unintended overflow.
* [ ] Touch interaction works where required.

## Accessibility

* [ ] Semantic HTML used.
* [ ] Keyboard interaction works.
* [ ] Focus is visible.
* [ ] Contrast considered.
* [ ] Alternative text added where required.
* [ ] Reduced motion supported when motion is introduced.

## Scope

* [ ] No unnecessary feature was added.
* [ ] No custom admin dashboard was introduced.
* [ ] No unrelated refactor was introduced.
* [ ] No unnecessary dependency was added.

---

# 19. Common Agent Mistakes

## Mistake 1: Assuming instead of inspecting

Do not assume a component or schema does not exist.

Search the repository first.

---

## Mistake 2: Treating existing code as the highest authority

Existing code can contain outdated decisions.

Documentation and explicit current instructions take priority.

---

## Mistake 3: Adding gradients

Gradients are prohibited unless explicitly requested.

Do not add them because they seem fashionable.

---

## Mistake 4: Mixing Education and Industry into the global design

They are categories.

Synapse remains the global visual identity.

---

## Mistake 5: Filling intentional whitespace

The Welcome section is supposed to be spacious.

Do not interpret empty space as unfinished design.

---

## Mistake 6: Making every project identical

Project documentation is flexible.

Optional sections should only render when relevant content exists.

---

## Mistake 7: Hardcoding CMS content

Projects, team members, and weekly assignments should remain editable through the CMS where applicable.

---

## Mistake 8: Building duplicate administration features

Sanity Studio is the CMS administration interface.

Do not create an additional custom admin dashboard without a changed requirement.

---

## Mistake 9: Desktop-first without mobile verification

A layout is not complete merely because it looks good at one desktop resolution.

---

## Mistake 10: Adding motion without accessibility

Every meaningful motion implementation must consider reduced-motion preferences.

---

## Mistake 11: Solving local problems with arbitrary design values

Do not fix every layout issue by introducing:

```text
font-size: 13.7px
margin-top: 37px
border-radius: 11px
```

when the design system already provides a coherent scale.

---

## Mistake 12: Overengineering

Do not create complex abstractions for simple problems.

Prefer understandable code and minimal justified complexity.

---

# 20. Completion Protocol

Before declaring a task complete, follow this sequence:

```text
1. Understand the request
        ↓
2. Read relevant project documents
        ↓
3. Inspect existing implementation
        ↓
4. Identify the smallest valid change
        ↓
5. Implement the change
        ↓
6. Check design consistency
        ↓
7. Check responsive behavior
        ↓
8. Check accessibility
        ↓
9. Check relevant states
        ↓
10. Verify affected functionality
        ↓
11. Remove temporary artifacts
        ↓
12. Confirm scope was not expanded
        ↓
13. Complete the task
```

---

# 21. Final Rule

When working on Synapse:

> **Do not optimize for the largest amount of code written. Optimize for the smallest correct change that faithfully satisfies the product, design, and repository requirements.**

If uncertain, follow this order:

```text
Current User Instruction
        ↓
PRD.md
        ↓
DESIGN.md
        ↓
SKILL.md
        ↓
AGENTS.md
        ↓
Existing Implementation
        ↓
Minimal Correct Decision
```

Do not invent requirements.

Do not expand scope silently.

Do not replace intentional design decisions with generic conventions.

Inspect first, implement second, verify last.