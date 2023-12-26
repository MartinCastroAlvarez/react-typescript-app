import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Stack from 'react-bootstrap/Stack'
import Navbar from 'react-bootstrap/Navbar'
import { FaUser } from 'react-icons/fa'
import { IoIosCreate } from 'react-icons/io'

import { Profile } from '../components/Profile'
import { LanguageSelect } from '../forms/Language'
import { deauthenticate } from '../slices/Session'
import { CallToAction } from '../forms/CallToAction'
import { Action } from '../forms/Action'

const PrivateHeader = (): JSX.Element | null => {
  const user = useSelector((state: any) => state?.session?.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = useCallback(() => {
    dispatch(deauthenticate())
    navigate('/')
  }, [])

  const handleCreate = useCallback(() => {
    navigate('/create/step-1')
  }, [])

  if (user === null) { return null }

  return (
    <Nav>
      <Nav.Item>
        <Stack direction='horizontal' gap={3}>
          <CallToAction onClick={handleCreate} value='Create Recipe' icon={<IoIosCreate/>}/>
          <LanguageSelect/>
          <Profile user={user}/>
          <Action onClick={handleLogout} value='Logout' icon={<FaUser/>}/>
        </Stack>
      </Nav.Item>
    </Nav>
  )
}

const PublicHeader = (): JSX.Element => {
  const navigate = useNavigate()

  const handleLogin = useCallback(() => {
    navigate('/login')
  }, [])

  return (
    <Nav>
      <Nav.Item>
        <Stack direction='horizontal' gap={3}>
          <LanguageSelect/>
          <CallToAction onClick={handleLogin} icon={<FaUser/>} value='Login'/>
        </Stack>
      </Nav.Item>
    </Nav>
  )
}

export const Header = (): JSX.Element => {
  const user = useSelector((state: any) => state?.session?.user)

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className='aec-header'>
      <Container>
        <Navbar.Brand href="/">AEC</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user === null ? <PublicHeader/> : <PrivateHeader/> }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
