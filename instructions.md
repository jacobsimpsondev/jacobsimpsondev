# SCSS Instructions

Use this guide when adding or editing `.scss` files in this repo.

## Structure
- Prefer a single entry file (e.g. `styles/main.scss`) that imports partials.
- Name partials with a leading underscore, e.g. `_variables.scss`, `_mixins.scss`.
- Group partials by concern: `base/`, `layout/`, `components/`, `utilities/`.

## Style conventions
- Use two spaces for indentation.
- Use lowercase, dash-separated class names (BEM optional).
- Prefer nesting up to 2 levels deep.
- Use CSS custom properties for theming when appropriate.
- Use `rem` for typography and spacing.

## Imports
- Use `@use` and `@forward` instead of `@import`.
- Example:
  ```scss
  // styles/main.scss
  @use "base/reset";
  @use "base/typography";
  @use "components/buttons";
  ```

## Variables & Mixins
- Keep variables in `base/_variables.scss` and mixins in `base/_mixins.scss`.
- Prefix mixins with a verb, e.g. `@mixin center-flex { ... }`.

## Media queries
- Use a small set of breakpoints and store them in variables.
- Prefer mobile-first rules.

## Build output
- Compiled CSS should go to `styles/main.css`.
- Do not commit compiled CSS unless explicitly required.
- Compile CSS without node JS or any other residue/third party tool.
