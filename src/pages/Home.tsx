import React, { useEffect, useState, useCallback } from 'react'

import Stack from 'react-bootstrap/Stack'

import { type Recipe } from '../models/Recipe'
import { RecipeFactory } from '../factories/Recipe'
import { Recipes } from '../components/Recipes'
import { CategorySelect } from '../forms/Category'
import { TypeSelect } from '../forms/Type'
import { DifficultySelect } from '../forms/Difficulty'
import { Search } from '../components/Search'
import { PagesSelect } from '../components/Pages'
import { CaloriesSelect } from '../forms/Calories'
import { CostSelect } from '../forms/Cost'

export const HomePage = (): JSX.Element => {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  const hydrate = useCallback(() => {
    setRecipes([
      RecipeFactory(),
      RecipeFactory(),
      RecipeFactory(),
      RecipeFactory(),
      RecipeFactory(),
      RecipeFactory(),
      RecipeFactory(),
      RecipeFactory(),
      RecipeFactory(),
      RecipeFactory(),
      RecipeFactory(),
      RecipeFactory()
    ])
  }, [])

  useEffect(hydrate, [])

  return (
    <Stack gap={3} className='aec-home-page'>
      <Search onChange={hydrate}/>
      <Stack direction="horizontal" gap={3}>
        <CategorySelect onChange={hydrate}/>
        <TypeSelect onChange={hydrate}/>
        <DifficultySelect onChange={hydrate}/>
        <CaloriesSelect onChange={hydrate}/>
        <CostSelect onChange={hydrate}/>
      </Stack>
      <Recipes recipes={recipes}/>
      <PagesSelect onSelect={hydrate} totalPages={5}/>
    </Stack>
  )
}
