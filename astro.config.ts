import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import remarkHtml from 'remark-html';
import remarkToc from "remark-toc";
import remarkWikiLink from 'remark-wiki-link';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default defineConfig({
    site: "https://jnpngshiii.github.io/",
    base: "/",
    integrations: [sitemap()],
    markdown: {
        shikiConfig: {
            theme: "rose-pine-moon",
            langs: [],
        },

        remarkPlugins: [
            remarkHtml,
            [
                remarkToc,
                {
                    heading: '目录',
                    maxDepth: 3,
                }

            ],
            [
                remarkWikiLink,
                {
                    aliasDivider: '|',
                    pageResolver: (name: String) => [name.replace(/ /g, '-').toLowerCase()],
                    hrefTemplate: (permalink: String) => `/post/${permalink.replace('#', '/#')}`,
                }

            ],
        ],
        rehypePlugins: [
            rehypeAutolinkHeadings,
        ]
    },
});
