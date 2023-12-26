import React from 'react'

import toast from 'react-hot-toast'
import Stack from 'react-bootstrap/Stack'
import { FaStar } from 'react-icons/fa'
import { CallToAction } from '../forms/CallToAction'

export const Vote = (): JSX.Element => {
  return (
    <Stack direction="horizontal" gap={3} className='aec-vote'>
      <h3><FaStar/></h3>
      <h3><FaStar/></h3>
      <h3><FaStar/></h3>
      <CallToAction onClick={() => { toast.success('Voted!') }} value='Vote'/>
    </Stack>
  )
}
