import { parse, walk } from 'svelte/compiler'
import { format } from 'prettier'
import { readFileSync } from 'fs'
import { join } from 'path'
import { visit } from 'unist-util-visit'
import Prism from 'prismjs'
import 'prism-svelte'

export const createImports = (source) => {
  const inlineComponents = new Set()
  const icons = new Set()

  const isIcon = (text) => text.match(/(16|20|24|32)/)

  walk(parse(source), {
    enter(node) {
      if (node.type === 'InlineComponent') {
        if (isIcon(node.name)) {
          icons.add(node.name)
        } else {
          inlineComponents.add(node.name)
        }
      } else if (node.type === 'MustacheTag') {
        if (node.expression.type === 'Identifier' && isIcon(node.expression.name)) {
          icons.add(node.expression.name)
        }
      }
    }
  })

  const ccs_imports = Array.from(inlineComponents.keys())
  const icon_imports = Array.from(icons.keys())

  //console.log(ccs_imports, icon_imports)

  if (ccs_imports.length === 0) return ''

  return `
  <script>
    import {${ccs_imports.join(',')}} from '$lib/components'

  </script>\n
  `
}

export const plugin = () => {

  const visitor = (node) => {
    if (
      node.lang !== 'svelte' &&
      !node.value.startsWith('<FileSource') &&
      !node.value.startsWith('<script>') &&
      !node.value.match(/svx-ignore/g)
    ) {
      const scriptBlock = createImports(node.value)
      const formattedCode = format(scriptBlock + node.value, {
        parser: 'svelte',
        svelteSortOrder: 'scripts-markup-styles-options'
      })
      const highlightedCode = Prism.highlight(formattedCode, Prism.languages.svelte, 'svelte')

      node.value = `<Preview codeRaw="{\`${formattedCode}\`}" code="{\`${highlightedCode}\`}">${node.value}</Preview>`
    }

    if (node.value.startsWith('<FileSource')) {
      let src = ''

      walk(parse(node.value), {
        enter(node) {
          if (node.name === 'FileSource') {
            node.attributes.forEach((attribute) => {
              if (attribute.name === 'src') {
                src += attribute.value[0].raw
              }
            })
          }
        }
      })

      const sourceCode = readFileSync(join('src/routes', `${src}.svelte`), 'utf-8')
      const formattedCode = format(sourceCode, { parser: 'svelte' })
      const highlightedCode = Prism.highlight(formattedCode, Prism.languages.svelte, 'svelte')

      node.value = `<Preview framed src="${src}" codeRaw="{\`${formattedCode}\`}" code="{\`${highlightedCode}\`}" />`
      //node.value = `${formattedCode}`
      //console.log(node.value)
    }
  }

  return (tree) => {
    visit(tree, 'html', visitor)
  }
}

export const linkify = () => {
  return (tree) => {
    visit(tree, 'link', (node) => {
      node.data = { hProperties: { class: 'link' } }
    })
  }
}