import React, { useCallback } from 'react'

import Stack from 'react-bootstrap/Stack'

import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'

import { Title } from '../components/Title'
import { Subtitle } from '../components/Subtitle'
import { TextInput } from '../forms/Text'
import { PasswordInput } from '../forms/Password'
import { Link } from '../components/Link'
import { CallToAction } from '../forms/CallToAction'
import { authenticate } from '../slices/Session'
import { Checkbox } from '../forms/Checkbox'
import { Form } from '../forms/Form'

export const RegistrationPage = (): JSX.Element => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = useCallback(() => {
    toast.success('Welcome!')
    dispatch(authenticate())
    navigate('/')
  }, [])

  return (
    <Stack className='aec-registration-page' gap={3}>
      <Title value='Registration'/>
      <Form>
        <Subtitle value='Email:'/>
        <TextInput onChange={() => {}} placeholder='Enter your email'/>
        <Subtitle value='Enter your password:'/>
        <PasswordInput onChange={() => {}}/>
        <Subtitle value='Repeat your password:'/>
        <PasswordInput onChange={() => {}}/>
        <Checkbox value='I accept the Terms of Service'/>
        <CallToAction onClick={handleSubmit} value="Sign Up"/>
        <Link href='/login' value='I already have an account'/>
      </Form>
    </Stack>
  )
}
