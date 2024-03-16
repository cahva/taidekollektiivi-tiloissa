import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import db from "@astrojs/db";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [svelte(), db(), tailwind()]
});