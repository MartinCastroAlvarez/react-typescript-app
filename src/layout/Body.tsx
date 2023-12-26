import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { HomePage } from '../pages/Home'
import { CreatePage1, CreatePage2, CreatePage3, CreatePage4, CreatePage5, CreatePage6 } from '../pages/Create'
import { DetailsPage } from '../pages/Details'
import { ResetPage } from '../pages/Reset'
import { LoginPage } from '../pages/Login'
import { RegistrationPage } from '../pages/Registration'

export const Body = (): JSX.Element => {
  return (
    <Container className='aec-body'>
      <Row className="justify-content-md-center">
        <Col xs={12}>
          <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/registration" element={<RegistrationPage/>} />
            <Route path="/reset" element={<ResetPage/>} />
            <Route path="/recipe/:slug" element={<DetailsPage />} />
            <Route path="/create/step-1" element={<CreatePage1/>} />
            <Route path="/create/step-2" element={<CreatePage2/>} />
            <Route path="/create/step-3" element={<CreatePage3/>} />
            <Route path="/create/step-4" element={<CreatePage4/>} />
            <Route path="/create/step-5" element={<CreatePage5/>} />
            <Route path="/create/step-6" element={<CreatePage6/>} />
            <Route path="*" element={<HomePage/>} />
          </Routes>
        </Col>
      </Row>
    </Container>
  )
}
