import { type Type } from '../enums/Type'
import { type Nutrient } from '../enums/Nutrient'
import { type Image } from './Image'

export class Ingredient {
  name: string = ''
  cost: number | null = null
  calories: number | null = null
  type: Type | null = null
  nutrients: Nutrient[] = []
  image: Image | null = null
}
