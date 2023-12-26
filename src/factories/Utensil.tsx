import { Utensil } from '../models/Utensil'

import { getRandomUtensilName, getRandomInteger } from '../utils/Random'
import { ImageFactory } from './Image'

export const UtensilFactory = (): Utensil => {
  const utensil: Utensil = new Utensil()
  utensil.name = getRandomUtensilName()
  utensil.cost = getRandomInteger(0, 100)
  utensil.image = ImageFactory()
  return utensil
}
