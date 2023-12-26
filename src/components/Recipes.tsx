import React from 'react'

import { useNavigate } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { type Recipe } from '../models/Recipe'
import { Subtitle } from '../components/Subtitle'
import { DifficultyTag } from '../tags/Difficulty'
import { ScoreTag } from '../tags/Score'

interface Props {
  recipes: Recipe[]
}

export const Recipes: React.FC<Props> = ({ recipes }): JSX.Element => {
  const navigate = useNavigate()

  return (
    <Container className='aec-recipes'>
      <Row className="justify-content-md-center">
        {
          recipes.map((recipe, index) => {
            return (
              <Col key={index} xs={12} sm={6} md={6} lg={3}>
                <div className='aec-card' onClick={() => { navigate(`/recipe/${recipe.name}`) }}>
                  {(recipe.images.length > 0) ? <Image src={recipe.images[0].url}/> : null}
                  <Subtitle value={recipe.name}/>
                  <DifficultyTag level={recipe.difficulty}/>
                  <ScoreTag score={recipe.score} votes={recipe.votes}/>
                </div>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}
