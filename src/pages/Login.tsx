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
import { getRandomBoolean } from '../utils/Random'
import { Checkbox } from '../forms/Checkbox'
import { Form } from '../forms/Form'

export const LoginPage = (): JSX.Element => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = useCallback(() => {
    if (getRandomBoolean()) {
      toast.success('Welcome!')
      dispatch(authenticate())
      navigate('/')
    } else {
      toast.error('Invalid credentials!')
    }
  }, [])

  return (
    <Stack className='aec-login-page' gap={3}>
      <Title value='Welcome!'/>
      <Form>
        <Subtitle value='Email:'/>
        <TextInput onChange={() => {}} placeholder='Enter your email'/>
        <Subtitle value='Password:'/>
        <PasswordInput onChange={() => {}}/>
        <Checkbox value='Remember this session'/>
        <CallToAction onClick={handleSubmit} value="Sign In"/>
        <Link href='/registration' value='I do not have an account'/>
        <Link href='/reset' value='I forgot my password'/>
      </Form>
    </Stack>
  )
}
