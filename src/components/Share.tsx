import React, { useCallback } from 'react'

import Stack from 'react-bootstrap/Stack'
import toast from 'react-hot-toast'

import { FaFacebook, FaTwitter, FaInstagramSquare } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Action } from '../forms/Action'

export const Share = (): JSX.Element => {
  const handleShare = useCallback(() => toast.success('Shared!'), [])

  return (
    <Stack direction="horizontal" gap={3} className='aec-share'>
      <Action onClick={handleShare} icon={<FaFacebook/>} value='Facebook'/>
      <Action onClick={handleShare} icon={<FaTwitter/>} value='Twitter'/>
      <Action onClick={handleShare} icon={<FaInstagramSquare/>} value='Instagram'/>
      <Action onClick={handleShare} icon={<MdEmail/>} value='Email'/>
    </Stack>
  )
}
