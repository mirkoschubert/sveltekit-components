import adapter from '@sveltejs/adapter-auto'
import vercel from '@sveltejs/adapter-vercel'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import { resolve } from 'path'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import slug from 'remark-slug'
import { directives } from './directives.config.js'
import { plugin, linkify } from './remark.plugins.js'

const rootDomain = process.env["VITE_DOMAIN"] // or your server IP for dev

const dev = process.env.NODE_ENV === 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
    preprocess({
      sass: {
        includePaths: ['src'],
        prependData: '@import "src/lib/sass/main.sass"',
        renderSync: true
      },
      postcss: {
        plugins: [
          cssnano({ preset: 'cssnano-preset-default' }),
          autoprefixer({})
        ]
      },
    }),
    mdsvex({
      extensions: ['.md', '.svx'],
      remarkPlugins: [plugin, slug, linkify],
      layout: {
        overview: 'src/lib/layouts/overview.svelte',
        component: 'src/lib/layouts/component.svelte',
        _: 'src/lib/layouts/overview.svelte',
      }
    })
  ],

	kit: {
		adapter: dev ? adapter() : vercel(),
    csp: {
			mode: 'auto',
			directives: directives(dev, rootDomain)
    },
    files: {
			assets: 'static',
			lib: 'src/lib',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
			template: 'src/app.html',
			hooks: 'src/hooks'
		},
    vite: {
			resolve: {
				alias: {
          $lib: resolve('src/lib'),
					$stores: resolve('./src/lib/stores'),
          $types: resolve('src/lib/types'),
					$components: resolve('./src/lib/components')
				}
			},
		},
    package: {
      dir: 'package',
			emitTypes: true,
    }
	}
};

export default config;
