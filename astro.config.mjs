import { defineConfig } from 'astro/config';
import 'dotenv/config'

const base = process.env.BASE ?? '/ditto.github.io/';

// https://astro.build/config
export default defineConfig({
    site: 'https://dittokun.github.io/ditto.github.io/',
    base: base,
});
