
/** General */

export type OrientationType = 'vertical' | 'horizontal'

export type FlexAlignmentType = 'topleft' | 'topcenter' | 'topright' | 'left' | 'center' | 'right' | 'bottomleft' | 'bottomcenter' | 'bottomright'

export type AspectRatioType = '1x1' | '4x3' | '3x2' | '16x9' | '2x1' | '21x9' | '3x4' | '2x3' | '9x16' | '1x2' | '9x21'

/** Actions */

export type Action = (
  node: HTMLElement,
  parameters: Record<string, unknown>
) => {
  update?: (parameters: unknown) => void | Promise<void>
  destroy?: () => void
}

/** Notification */

export type NotificationPositionsType = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'

export interface NotificationOptionsType {
  duration?: number
  position?: NotificationPositionType
}

export interface NotificationType {
  title?: string
  description?: string
  type?: 'error' | 'success' | 'warning' | 'info'
  href?: string
  closable?: boolean
  [key: string]: unknown
}

/** Menu */

export interface MenuItemType {
  label: string
  href: string
  disabled?: boolean
  tag?: string
}

export interface MenuSectionType {
  label: string
  items: MenuItemType[]
}

export type MenuType = MenuSectionType[]

/** DefinitionList */

export interface DefinitionListItemType {
  title: string,
  description: string
}

export type DefinitionListType = DefinitionListItemType[]

/** Card */

export interface CardType {
  image?: string,
  icon?: object,
  title?: string,
  subtitle?: string,
  description?: string,
  href?: string,
  list?: DefinitionListType
}

/** Images (Image & Gallery) */

export interface GalleryType {
  uid: string
  title: string
  items: ImageType | ImageType[]
}

export interface ImageType {
  alt: string
  copyright: string
  dimensions: {
    width: number
    height: number
  }
  url: string
  placeholder?: string
  responsive?: {
    src: string
    srcset: string
  }
}

export interface ThumbnailType {
  alt: string
  url: string
  dimensions: {
    width: number
    height: number
  }
  placeholder?: string
}

/** Forms */

export interface RadioButtonType {
  id: string
  label: string
}

export type RadioButtonGroupType = RadioButtonType[]

export interface DropdownItem {
  id: string
  text: string
  disabled?: boolean
  [key: string]: unknown
}

export type DropdownItems = DropdownItem[]

/** Music (Album, Song & Player) */

export interface URLType {
  type: string
  url: string
}

export interface AlbumType {
  id: string
  uid: string
  title: string
  artist?: string
  description?: []
  type?: string
  published?: string
  genres?: []
  urls?: URLType[]
  songs?: SongType[]
  cover?: {
    main?: string
    thumbnail?: string
  }
  image?: {
    hero?: string
    thumbnail?: string
  }
}

export interface SongType {
  id: string
  uid: string
  index?: number
  title?: string
  artist?: string
  length?: string
  explicit?: boolean
  file?: string
}