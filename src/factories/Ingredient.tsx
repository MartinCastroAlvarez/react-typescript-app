import { Ingredient } from '../models/Ingredient'

import { Type } from '../enums/Type'
import { Nutrient } from '../enums/Nutrient'
import { getRandomIngredientName, getRandomInteger, getRandomElementFromEnum } from '../utils/Random'
import { ImageFactory } from './Image'

export const IngredientFactory = (): Ingredient => {
  const ingredient: Ingredient = new Ingredient()
  ingredient.name = getRandomIngredientName()
  ingredient.cost = getRandomInteger(0, 100)
  ingredient.calories = getRandomInteger(0, 1000)
  ingredient.type = getRandomElementFromEnum(Type)
  ingredient.image = ImageFactory()
  ingredient.nutrients = [
    getRandomElementFromEnum(Nutrient),
    getRandomElementFromEnum(Nutrient),
    getRandomElementFromEnum(Nutrient)
  ]
  return ingredient
}
