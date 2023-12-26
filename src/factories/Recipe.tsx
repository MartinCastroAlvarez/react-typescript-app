import { Recipe } from '../models/Recipe'
import { VideoFactory } from './Video'
import { ImageFactory } from './Image'
import { UtensilFactory } from './Utensil'
import { IngredientFactory } from './Ingredient'
import { Category } from '../enums/Category'
import { Difficulty } from '../enums/Difficulty'
import { getRandomRecipeName, getRandomNumber, getRandomElementFromEnum, getRandomText, getRandomEmail, getRandomInteger } from '../utils/Random'

export const RecipeFactory = (): Recipe => {
  const recipe: Recipe = new Recipe()
  recipe.userEmail = getRandomEmail()
  recipe.name = getRandomRecipeName()
  recipe.description = getRandomText(100)
  recipe.score = getRandomNumber(0, 3)
  recipe.votes = getRandomInteger(1, 100)
  recipe.category = getRandomElementFromEnum(Category)
  recipe.difficulty = getRandomElementFromEnum(Difficulty)
  recipe.video = VideoFactory()
  recipe.images = [
    ImageFactory(),
    ImageFactory(),
    ImageFactory(),
    ImageFactory(),
    ImageFactory()
  ]
  recipe.ingredients = [
    IngredientFactory(),
    IngredientFactory(),
    IngredientFactory(),
    IngredientFactory(),
    IngredientFactory(),
    IngredientFactory()
  ]
  recipe.utensils = [
    UtensilFactory(),
    UtensilFactory(),
    UtensilFactory()
  ]
  return recipe
}
