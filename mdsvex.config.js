import { defineMDSveXConfig as defineConfig } from 'mdsvex'
import slug from 'remark-slug'
import { plugin, linkify } from './remark.plugins.js'

const config = defineConfig({
  extensions: ['.md', '.svx'],
  remarkPlugins: [ plugin, slug, linkify ],
  layout: {
    overview: './src/lib/layouts/overview.svelte',
    component: './src/lib/layouts/component.svelte',
    _: './src/lib/layouts/component.svelte',
  }
})

export default config