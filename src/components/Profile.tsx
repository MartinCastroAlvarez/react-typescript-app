import React from 'react'

import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'
import { type User } from '../models/User'

interface Props {
  user: User
}

export const Profile: React. FunctionComponent<Props> = ({ user }): JSX.Element | null => {
  return (
    <Stack className='aec-profile' direction='horizontal' gap={3}>
      <Image src={user.avatar?.url}/>
      <p>{user.email}</p>
    </Stack>
  )
}
