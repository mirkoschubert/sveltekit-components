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
        label: 'AspectRatio',
        href: '/docs/layout/aspect-ratio',
        tag: 'new'
      },
      {
        label: 'Content',
        href: '/docs/layout/content',
      },
      {
        label: 'ContextMenu',
        href: '/docs/layout/context-menu',
        disabled: true
      },
      {
        label: 'Drawer',
        href: '/docs/layout/drawer',
        disabled: true
      },
      {
        label: 'Footer',
        href: '/docs/layout/footer',
        disabled: true
      },
      {
        label: 'Grid',
        href: '/docs/layout/grid',
      },
      {
        label: 'Header',
        href: '/docs/layout/header',
        tag: 'updated'
      },
      {
        label: 'Hero',
        href: '/docs/layout/hero',
        tag: 'new'
      },
      {
        label: 'Logo',
        href: '/docs/layout/logo',
        disabled: true
      },
      {
        label: 'Menu',
        href: '/docs/layout/menu',
        tag: 'updated'
      },
      {
        label: 'Pagination',
        href: '/docs/layout/pagination',
        disabled: true
      },
      {
        label: 'Search',
        href: '/docs/layout/search',
        disabled: true
      },
      {
        label: 'Section',
        href: '/docs/layout/section',
      },

    ]
  },
  {
    label: 'General',
    items: [
      {
        label: 'Accordion',
        href: '/docs/components/accordion',
        tag: 'new'
      },
      {
        label: 'Alert',
        href: '/docs/components/alert',
        disabled: true,
      },
      {
        label: 'Avatar',
        href: '/docs/components/avatar',
        disabled: true,
      },
      {
        label: 'Badge',
        href: '/docs/components/badge',
        disabled: true,
      },
      {
        label: 'Button',
        href: '/docs/components/button',
      },
      {
        label: 'Card',
        href: '/docs/components/card',
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
        label: 'Dialog',
        href: '/docs/components/dialog',
        disabled: true
      },
      {
        label: 'Image',
        href: '/docs/components/image',
        tag: 'new'
      },
      {
        label: 'Link',
        href: '/docs/components/link',
        disabled: true
      },
      {
        label: 'List',
        href: '/docs/components/list',
      },
      {
        label: 'Loading',
        href: '/docs/components/loading',
      },
      {
        label: 'Modal',
        href: '/docs/components/modal',
        tag: 'new'
      },
      {
        label: 'Notification',
        href: '/docs/components/notification',
      },
      {
        label: 'Popover',
        href: '/docs/components/popover',
        disabled: true
      },
      {
        label: 'Progress',
        href: '/docs/components/progress',
        disabled: true
      },
      {
        label: 'Table',
        href: '/docs/components/table',
        disabled: true
      },
      {
        label: 'Tabs',
        href: '/docs/components/tabs',
      },
      {
        label: 'Tag',
        href: '/docs/components/tag',
      },
      {
        label: 'Toast',
        href: '/docs/components/toast',
        disabled: true
      },
      {
        label: 'Tooltip',
        href: '/docs/components/tooltip',
        disabled: true
      },
    ]
  },
  {
    label: 'Forms',
    items: [
      {
        label: 'Checkbox',
        href: '/docs/advanced/checkbox',
        disabled: true
      },
      {
        label: 'ComboBox',
        href: '/docs/advanced/combobox',
        disabled: true
      },
      {
        label: 'DatePicker',
        href: '/docs/advanced/date-picker',
        disabled: true
      },
      {
        label: 'Dropdown',
        href: '/docs/advanced/dropdown',
        disabled: true
      },
      {
        label: 'FileUploader',
        href: '/docs/advanced/fileuploader',
        disabled: true
      },
      {
        label: 'Form (General)',
        href: '/docs/advanced/form-general',
        disabled: true
      },
      {
        label: 'MultiSelect',
        href: '/docs/advanced/multi-select',
        disabled: true
      },
      {
        label: 'RadioButton',
        href: '/docs/advanced/radio-button',
        disabled: true
      },
      {
        label: 'RadioButtonGroup',
        href: '/docs/advanced/radio-button-group',
        disabled: true
      },
      {
        label: 'Select',
        href: '/docs/advanced/select',
        disabled: true
      },
      {
        label: 'Slider',
        href: '/docs/advanced/slider',
        disabled: true
      },
      {
        label: 'TextArea',
        href: '/docs/advanced/text-area',
        disabled: true
      },
      {
        label: 'TextInput',
        href: '/docs/advanced/text-input',
        disabled: true
      },
      {
        label: 'TimePicker',
        href: '/docs/advanced/time-picker',
        disabled: true
      },
      {
        label: 'Toggle',
        href: '/docs/advanced/Toggle',
        disabled: true
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
        label: 'BreadCrumb',
        href: '/docs/advanced/breadcrumb',
        disabled: true
      },
      {
        label: 'Carousel',
        href: '/docs/advanced/carousel',
        disabled: true
      },
      {
        label: 'Chart',
        href: '/docs/advanced/chart',
        disabled: true
      },
      {
        label: 'Gallery',
        href: '/docs/advanced/gallery',
        disabled: true
      },
      {
        label: 'Maps',
        href: '/docs/advanced/maps',
        disabled: true
      },
      {
        label: 'Player',
        href: '/docs/advanced/player',
        disabled: true
      },
      {
        label: 'SongList',
        href: '/docs/advanced/song-list',
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
