// @ts-check
import { defineConfig } from 'astro/config';

// Deployed as a GitHub Pages *project* site from the `jacobsimpsondev/jacobsimpsondev`
// repo, so it lives under the `/jacobsimpsondev` base path.
// Live URL: https://jacobsimpsondev.github.io/jacobsimpsondev
export default defineConfig({
  site: 'https://jacobsimpsondev.github.io',
  base: '/jacobsimpsondev',
});
