import React from 'react'

import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { type Utensil } from '../models/Utensil'
import { Subtitle } from '../components/Subtitle'
import { CostTag } from '../tags/Cost'

interface Props {
  utensils?: Utensil[]
  maxUtensils?: number
}

export const Utensils: React. FunctionComponent<Props> = ({ utensils = [], maxUtensils = 6 }): JSX.Element | null => {
  return (
    <Container className='aec-utensils'>
      <Row>
        {
          utensils.map((utensil, index) => {
            return <Col key={index} xs={6} sm={6} md={4} lg={2}>
              <div className='aec-card'>
                <Image src={utensil.image?.url}/>
                <Subtitle value={utensil.name}/>
                <CostTag total={utensil?.cost}/>
              </div>
            </Col>
          })
        }
      </Row>
    </Container>
  )
}
