
/** MENU */

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