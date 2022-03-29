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
      },
      {
        label: 'Menu',
        href: '/docs/layout/menu',
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
        tag: 'new'
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
      },
      {
        label: 'Image',
        href: '/docs/components/image',
        disabled: true
      },
      {
        label: 'List',
        href: '/docs/components/list',
      },
      {
        label: 'Loading',
        href: '/docs/components/loading',
        tag: 'new'
      },
      {
        label: 'Notification',
        href: '/docs/components/notification',
        tag: 'new'
      },
      {
        label: 'Tabs',
        href: '/docs/components/tabs',
      },
      {
        label: 'Tag',
        href: '/docs/components/tag',
      },
    ]
  },
  {
    label: 'Advanced',
    items: [
      {
        label: 'Album',
        href: '/docs/advanced/album',
        disabled: true
      },
      {
        label: 'Gallery',
        href: '/docs/advanced/gallery',
        disabled: true
      },
      {
        label: 'Player',
        href: '/docs/advanced/player',
        disabled: true
      },
      {
        label: 'Songs',
        href: '/docs/advanced/songs',
        disabled: true
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
