import adapter from '@sveltejs/adapter-auto'
import vercel from '@sveltejs/adapter-vercel'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import { resolve } from 'path'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import { parse, walk } from 'svelte/compiler'
import slug from 'remark-slug'
import { directives } from './directives.config.js'
import { plugin, linkify } from './remark.plugins.js'
//import toc from './toc.preprocess.js'

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
    /* {
      markup: ({ filename, content }) => {
        if (/node_modules/.test(filename) || !filename.endsWith(".svelte"))
          return;
        return {
          code: content.replace(
            /process.env.VERSION/g,
            JSON.stringify(pkg.version)
          ),
        };
      },
    }, */
    mdsvex({
      extensions: ['.md', '.svx'],
      remarkPlugins: [ plugin, slug, linkify ],
      layout: {
        overview: 'src/lib/layouts/overview.svelte',
        component: 'src/lib/layouts/component.svelte',
        _: 'src/lib/layouts/component.svelte',
      }
    }),
    {
      markup({ content, filename }) {
        if (/node_modules/.test(filename)) return null
        if (filename.endsWith(".md") && filename.match(/routes\/docs\/(overview)/)) {
          const toc = []

          walk(parse(content), {
            enter(node) {
              if (node.type === "Element") {
                if (node.name === "h2") {
                  const id = node.attributes.find(
                    (attribute) => attribute.name === "id"
                  )
                  toc.push({
                    id: id.value[0].raw,
                    text: node.children[0].raw,
                  })
                }
              }
            },
          })

          return {
            code: content.replace(
              "</Layout_MDSVEX_DEFAULT>",
              `<div slot="aside">
                <ul class="list">
                ${toc
                  .map((item) => {
                    return `
                      <li class="list-item">
                        <a class="link" href="\#${item.id}">${item.text}</a>
                      </li>`;
                  })
                  .join("")}
                </ul>
              </div>
            </Layout_MDSVEX_DEFAULT>`
            ),
          }
        }

        if (filename.endsWith(".md") && filename.match(/routes\/docs\/(general|layout|forms|advanced)/)) {
          const toc = []

          walk(parse(content), {
            enter(node) {
              if (node.type === "Element") {
                if (node.name === "h3") {
                  const id = node.attributes.find(
                    (attribute) => attribute.name === "id"
                  )
                  toc.push({
                    id: id.value[0].raw,
                    text: node.children[0].raw,
                  })
                }
              }
            },
          })

          return {
            code: content.replace(
              "</Layout_MDSVEX_DEFAULT>",
              `<div slot="aside">
                <ul class="list">
                  <li class="list-item">
                    <a class="link" href="#usage">Usage</a>
                    <ul class="list nested">
                    ${toc
                      .map((item) => {
                        return `
                          <li class="list-item">
                            <a class="link" href="\#${item.id}">${item.text}</a>
                          </li>`;
                      })
                      .join("")}
                    </ul>
                  </li>
                  <li class="list-item">
                    <a class="link" href="#component-api">Component API</a>
                    <ul class="list nested">
                      <li class="list-item">
                        <a class="link" href="#props">Props</a>
                      </li>
                      <li class="list-item">
                        <a class="link" href="#typedefs">Typedefs</a>
                      </li>
                      <li class="list-item">
                        <a class="link" href="#slots">Slots</a>
                      </li>
                      <li class="list-item">
                        <a class="link" href="#forwarded-events">Forwarded events</a>
                      </li>
                      <li class="list-item">
                        <a class="link" href="#dispatched-events">Dispatched events</a>
                      </li>
                      <li class="list-item">
                        <a class="link" href="#rest-props">restProps</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </Layout_MDSVEX_DEFAULT>`
            ),
          }
        }
      }
    }
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
    floc: dev,
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
