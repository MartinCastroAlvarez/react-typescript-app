import React from 'react'

import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { type Ingredient } from '../models/Ingredient'
import { Subtitle } from '../components/Subtitle'
import { CostTag } from '../tags/Cost'
import { CaloriesTag } from '../tags/Calories'

interface Props {
  ingredients?: Ingredient[]
  maxIngredients?: number
}

export const Ingredients: React. FunctionComponent<Props> = ({ ingredients = [], maxIngredients = 6 }): JSX.Element | null => {
  return (
    <Container className='aec-ingredients'>
      <Row>
        {
          ingredients.map((ingredient, index) => {
            return <Col key={index} xs={6} sm={6} md={4} lg={2}>
              <div className='aec-card'>
                <Image src={ingredient.image?.url}/>
                <Subtitle value={ingredient.name}/>
                <CostTag total={ingredient?.cost}/>
                <CaloriesTag total={ingredient?.calories}/>
              </div>
            </Col>
          })
        }
      </Row>
    </Container>
  )
}
