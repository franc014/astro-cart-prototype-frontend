import { defineConfig } from 'astro/config';
import sanity from "astro-sanity";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
    useCdn: true
  }), svelte()]
});