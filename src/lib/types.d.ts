
/** General */

export type OrientationType = 'vertical' | 'horizontal'

export type FlexAlignmentType = 'topleft' | 'topcenter' | 'topright' | 'left' | 'center' | 'right' | 'bottomleft' | 'bottomcenter' | 'bottomright'

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