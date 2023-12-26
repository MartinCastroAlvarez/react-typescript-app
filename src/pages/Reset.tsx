import React, { useCallback } from 'react'

import Stack from 'react-bootstrap/Stack'

import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'

import { Title } from '../components/Title'
import { Subtitle } from '../components/Subtitle'
import { TextInput } from '../forms/Text'
import { CallToAction } from '../forms/CallToAction'
import { Form } from '../forms/Form'

export const ResetPage = (): JSX.Element => {
  const navigate = useNavigate()

  const handleSubmit = useCallback(() => {
    toast.success('An email has been sent to your inbox!')
    navigate('/login')
  }, [])

  return (
    <Stack className='aec-reset-page' gap={3}>
      <Title value='Password Recovery'/>
      <Form>
        <Subtitle value='Enter tour email:'/>
        <TextInput onChange={() => {}} placeholder='Enter your email'/>
        <CallToAction onClick={handleSubmit} value="Send Recovery Code"/>
      </Form>
    </Stack>
  )
}
