import React from 'react'

import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { type Image as Model } from '../models/Image'

interface Props {
  images?: Model[]
  maxImages?: number
}

export const Gallery: React. FunctionComponent<Props> = ({ images = [], maxImages = 6 }): JSX.Element | null => {
  return (
    <Container className='aec-gallery'>
      <Row>
        {
          images.map(image => (
            <Col key={image.url} xs={6} sm={6} md={4} lg={2}>
              <div className='aec-card'>
                <Image src={image.url}/>
              </div>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}
