import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import remarkToc from "remark-toc";
import remarkWikiLink from 'remark-wiki-link';

// https://astro.build/config
export default defineConfig({
    site: "https://jnpngshiii.github.io/",
    base: "/",
    integrations: [sitemap()],
    markdown: {
        shikiConfig: {
            theme: "rose-pine-dawn",
            langs: [],
        },

        remarkPlugins: [
            remarkToc,
            [
                remarkWikiLink,
                {
                    aliasDivider: '|',
                    pageResolver: (name: String) => [name.replace(/ /g, '-').toLowerCase()],
                    hrefTemplate: (permalink: String) => `/posts/${permalink.replace('#', '/#')}`,
                }

            ],
        ],
    },
});
