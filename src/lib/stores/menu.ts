import type { MenuType } from '$lib/types'
import { writable } from 'svelte/store'

const menuMap: MenuType = [
  {
    label: 'Overview',
    items: [
      {
        label: 'Introduction',
        href: '/docs/overview/introduction',
      },
      {
        label: 'Getting Started',
        href: '/docs/overview/getting-started',
      },
      {
        label: 'Styling',
        href: '/docs/overview/styling',
      },
    ]
  },
  {
    label: 'Layout',
    items: [
      {
        label: 'Header',
        href: '/docs/layout/header',
        tag: 'new'
      },
      {
        label: 'Menu',
        href: '/docs/layout/menu',
        tag: 'new'
      },
      {
        label: 'Footer',
        href: '/docs/layout/footer',
        disabled: true
      },
      {
        label: 'Content',
        href: '/docs/layout/content',
        disabled: true
      },
      {
        label: 'Section',
        href: '/docs/layout/section',
        disabled: true
      },
      {
        label: 'Grid',
        href: '/docs/layout/grid',
        disabled: true
      },

    ]
  },
  {
    label: 'Components',
    items: [
      {
        label: 'Accordeon',
        href: '/docs/components/accordeon',
        disabled: true,
        tag: 'upcoming'
      },
      {
        label: 'Button',
        href: '/docs/components/button',
      },
      {
        label: 'Card',
        href: '/docs/components/card',
        disabled: true
      },
      {
        label: 'Carousel',
        href: '/docs/components/carousel',
        disabled: true
      },
      {
        label: 'CodeSnippet',
        href: '/docs/components/codesnippet',
        disabled: true
      },
      {
        label: 'DefinitionList',
        href: '/docs/components/definitionlist',
        tag: 'new'
      },
      {
        label: 'Image',
        href: '/docs/components/image',
        disabled: true
      },
      {
        label: 'List',
        href: '/docs/components/list',
        tag: 'new'
      },
      {
        label: 'Loading',
        href: '/docs/components/loading',
        disabled: true
      },
      {
        label: 'Tabs',
        href: '/docs/components/tabs',
        tag: 'new'
      },
      {
        label: 'Tag',
        href: '/docs/components/tag',
        tag: 'new'
      },
    ]
  }
]


const createMenuStore = () => {
  const { subscribe, update } = writable({
    map: menuMap,
    opened: false
  })

  return {
    subscribe: subscribe,
    setOpened: (value: boolean) => update((state) => ({ ...state, opened: value })),
    toggleOpened: () => update((state) => ({ ...state, opened: !state.opened }))
  }
}

export const menu = createMenuStore()
