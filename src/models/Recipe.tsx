import { type Image } from './Image'
import { type Video } from './Video'
import { type Utensil } from './Utensil'
import { type Ingredient } from './Ingredient'
import { type Category } from '../enums/Category'
import { type Difficulty } from '../enums/Difficulty'
import { toSlug } from '../utils/Text'

export class Recipe {
  name: string = ''
  description: string = ''
  userEmail: string = ''
  score: number | null = null
  votes: number | null = null
  category: Category | null = null
  difficulty: Difficulty | null = null
  video: Video | null = null
  images: Image[] = []
  ingredients: Ingredient[] = []
  utensils: Utensil[] = []

  getSlug (): string {
    return toSlug(this.name)
  }

  getTotalCalories (): number {
    return this.ingredients.reduce((totalCalories, ingredient) => {
      return totalCalories + (ingredient.calories ?? 0)
    }, 0)
  }

  getTotalCost (): number {
    let totalCost = this.ingredients.reduce((total, ingredient) => {
      return total + (ingredient.cost ?? 0)
    }, 0)
    totalCost += this.utensils.reduce((total, utensil) => {
      return total + (utensil.cost ?? 0)
    }, 0)
    return totalCost
  }
}
