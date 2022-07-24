import { defineMDSveXConfig as defineConfig } from "mdsvex";
import remarkParse from 'remark-parse'
import remarkRehype from "remark-rehype";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import remarkGfm from "remark-gfm";


const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },
  layout: {
    _: './src/lib/components/MdLayout.svelte',
    //location: './src/lib/components/Standalone.svelte',
    //trail: './src/lib/components/Trail.svelte'
  },

  remarkPlugins: [remarkParse, remarkGfm, remarkDirective, remarkDirectiveRehype],
  rehypePlugins: [],
});

export default config;