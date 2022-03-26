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
        disabled: true
      },
      {
        label: 'Menu',
        href: '/docs/layout/menu',
        disabled: true
      },
      {
        label: 'Footer',
        href: '/docs/layout/Footer',
        disabled: true
      },
      {
        label: 'Content',
        href: '/docs/layout/content',
        disabled: true
      },
      {
        label: 'Section',
        href: '/docs/layout/Section',
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
