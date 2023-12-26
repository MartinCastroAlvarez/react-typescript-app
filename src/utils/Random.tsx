import { toTitleCase } from './Text'
import { BACON_IPSUM } from '../mocks/Text'
import { VIDEOS_IPSUM } from '../mocks/Videos'
import { UTENSILS_IPSUM } from '../mocks/Utensils'
import { INGREDIENTS_IPSUM } from '../mocks/Ingredients'
import { RECIPES_IPSUM } from '../mocks/Recipes'

export const getRandomNumber = (floor: number = 0, ceiling: number = 100000000): number => {
  return floor + Math.random() * (ceiling - floor)
}

export const getRandomInteger = (floor: number = 0, ceiling: number = 100000000): number => {
  return Math.floor(getRandomNumber(floor, ceiling))
}

export const getRandomString = (size: number = 10): string => {
  return Math.random().toString(10).substring(2, 2 + size)
}

export const getRandomText = (size: number = 10): string => {
  const words = BACON_IPSUM.split(/\s+/).filter(word => word.trim().length > 0)
  const result: string[] = []
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * words.length)
    result.push(words[randomIndex])
  }
  return toTitleCase(result.join(' '))
}

export const getRandomBoolean = (probability: number = 0.5): boolean => {
  return Math.random() > probability
}

export const getRandomEmail = (size: number = 20): string => {
  return `${getRandomString(size)}@mock.com`
}

export const getRandomImage = (width: number = 200, height: number = 200): string => {
  return `https://picsum.photos/id/${getRandomInteger(0, 20)}/${width}/${height}?blur`
}

export const getRandomVideo = (): string => {
  return VIDEOS_IPSUM[Math.floor(Math.random() * VIDEOS_IPSUM.length)]
}

export const getRandomUtensilName = (): string => {
  return UTENSILS_IPSUM[Math.floor(Math.random() * UTENSILS_IPSUM.length)]
}

export const getRandomIngredientName = (): string => {
  return INGREDIENTS_IPSUM[Math.floor(Math.random() * INGREDIENTS_IPSUM.length)]
}

export const getRandomRecipeName = (): string => {
  return RECIPES_IPSUM[Math.floor(Math.random() * RECIPES_IPSUM.length)]
}

export const getRandomElementFromEnum = (enumeration: any): any => {
  const values = Object.values(enumeration)
  const randomIndex = Math.floor(Math.random() * values.length)
  return values[randomIndex]
}
