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
      },
      {
        label: 'Hero',
        href: '/docs/layout/hero',
      },
      {
        label: 'Logo',
        href: '/docs/layout/logo',
        disabled: true
      },
      {
        label: 'Menu',
        href: '/docs/layout/menu',
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
        href: '/docs/general/accordion',
      },
      {
        label: 'Alert',
        href: '/docs/general/alert',
        disabled: true,
      },
      {
        label: 'Avatar',
        href: '/docs/general/avatar',
      },
      {
        label: 'Badge',
        href: '/docs/general/badge',
      },
      {
        label: 'Button',
        href: '/docs/general/button',
      },
      {
        label: 'Card',
        href: '/docs/general/card',
      },
      {
        label: 'Carousel',
        href: '/docs/general/carousel',
        disabled: true
      },
      {
        label: 'CodeSnippet',
        href: '/docs/general/codesnippet',
      },
      {
        label: 'DefinitionList',
        href: '/docs/general/definitionlist',
      },
      {
        label: 'Dialog',
        href: '/docs/general/dialog',
        disabled: true
      },
      {
        label: 'Image',
        href: '/docs/general/image',
      },
      {
        label: 'Link',
        href: '/docs/general/link',
      },
      {
        label: 'List',
        href: '/docs/general/list',
      },
      {
        label: 'Loading',
        href: '/docs/general/loading',
      },
      {
        label: 'Modal',
        href: '/docs/general/modal',
      },
      {
        label: 'Notification',
        href: '/docs/general/notification',
      },
      {
        label: 'Popover',
        href: '/docs/general/popover',
        disabled: true
      },
      {
        label: 'Progress',
        href: '/docs/general/progress',
        disabled: true
      },
      {
        label: 'Table',
        href: '/docs/general/table',
      },
      {
        label: 'Tabs',
        href: '/docs/general/tabs',
      },
      {
        label: 'Tag',
        href: '/docs/general/tag',
      },
      {
        label: 'Toast',
        href: '/docs/general/toast',
        disabled: true
      },
      {
        label: 'Tooltip',
        href: '/docs/general/tooltip',
        disabled: true
      },
    ]
  },
  {
    label: 'Forms',
    items: [
      {
        label: 'Checkbox',
        href: '/docs/forms/checkbox',
        disabled: true
      },
      {
        label: 'ComboBox',
        href: '/docs/forms/combobox',
        disabled: true
      },
      {
        label: 'DatePicker',
        href: '/docs/forms/date-picker',
        disabled: true
      },
      {
        label: 'Dropdown',
        href: '/docs/forms/dropdown',
        disabled: true
      },
      {
        label: 'FileUploader',
        href: '/docs/forms/file-uploader',
        disabled: true
      },
      {
        label: 'Form (General)',
        href: '/docs/forms/form-general',
        tag: 'update'
      },
      {
        label: 'MultiSelect',
        href: '/docs/forms/multi-select',
        disabled: true
      },
      {
        label: 'RadioButton',
        href: '/docs/forms/radio-button',
        disabled: true
      },
      {
        label: 'RadioButtonGroup',
        href: '/docs/forms/radio-button-group',
        disabled: true
      },
      {
        label: 'Select',
        href: '/docs/forms/select',
        disabled: true
      },
      {
        label: 'Slider',
        href: '/docs/forms/slider',
        disabled: true
      },
      {
        label: 'TextArea',
        href: '/docs/forms/text-area',
        tag: 'new'
      },
      {
        label: 'TextInput',
        href: '/docs/forms/text-input',
        tag: 'update'
      },
      {
        label: 'TimePicker',
        href: '/docs/forms/time-picker',
        disabled: true
      },
      {
        label: 'Toggle',
        href: '/docs/forms/Toggle',
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
