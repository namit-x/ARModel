export type MenuCategoryId = "starters" | "mains" | "desserts" | "cocktails"

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
}

export interface MenuCategory {
  id: MenuCategoryId
  name: string
  description: string
}
