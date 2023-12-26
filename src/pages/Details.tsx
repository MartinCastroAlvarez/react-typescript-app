import React, { useState, useEffect, useCallback } from 'react'

import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { type Recipe } from '../models/Recipe'
import { RecipeFactory } from '../factories/Recipe'
import { Title } from '../components/Title'
import { Text } from '../components/Text'
import { RecipeVideo } from '../components/Video'
import { Gallery } from '../components/Gallery'
import { Tags } from '../tags/Tags'
import { Utensils } from '../components/Utensils'
import { Ingredients } from '../components/Ingredients'
import { Share } from '../components/Share'
import { Vote } from '../components/Vote'

export const DetailsPage = (): JSX.Element | null => {
  const [recipe, setRecipe] = useState<Recipe | null>(null)

  const hydrate = useCallback(() => {
    setRecipe(RecipeFactory())
  }, [])

  useEffect(hydrate, [])

  if (recipe === null) { return null }

  return (
    <Stack gap={3} className="aec-details-page">
      <Title value={recipe.name}/>
      <Tags recipe={recipe}/>
      <Text value={recipe?.description}/>
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <Vote/>
          </Col>
          <Col xs={12} md={6}>
          </Col>
        </Row>
      </Container>
      <RecipeVideo video={recipe?.video}/>
      <Gallery images={recipe?.images}/>
      <Title value="Ingredients"/>
      <Ingredients ingredients={recipe?.ingredients}/>
      <Title value="Utensils"/>
      <Utensils utensils={recipe?.utensils}/>
      <Share/>
    </Stack>
  )
}
