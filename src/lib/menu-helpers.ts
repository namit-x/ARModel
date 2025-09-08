import { MENU_ITEMS, MENU_CATEGORIES } from "../lib/constants"
import type { MenuCategoryId, MenuItem, MenuCategory } from "../lib/types"

export function getMenuItemsByCategory(categoryId: MenuCategoryId): readonly MenuItem[] {
    return MENU_ITEMS[categoryId] || []
  }

export function getCategoryById(categoryId: string): MenuCategory | undefined {
  return MENU_CATEGORIES.find((category) => category.id === categoryId)
}

export function formatPrice(price: number): string {
  return `$${price}`
}

export function scrollToCategory(categoryId: string): void {
  const element = document.getElementById(categoryId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}
