import React from 'react'

import Stack from 'react-bootstrap/Stack'

import { type Recipe } from '../models/Recipe'
import { DifficultyTag } from './Difficulty'
import { CaloriesTag } from './Calories'
import { CostTag } from './Cost'
import { CategoryTag } from './Category'
import { ScoreTag } from './Score'

interface Props {
  recipe: Recipe
}

export const Tags: React.FC<Props> = ({ recipe }): JSX.Element => {
  return (
    <Stack direction="horizontal" gap={1} className="aec-tags col-md-12">
      <CaloriesTag total={recipe.getTotalCalories()}/>
      <CostTag total={recipe.getTotalCost()}/>
      <CategoryTag value={recipe.category}/>
      <DifficultyTag level={recipe.difficulty}/>
      <ScoreTag score={recipe.score} votes={recipe.votes}/>
    </Stack>
  )
}
