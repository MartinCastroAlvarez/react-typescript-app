import React from 'react'

import Stack from 'react-bootstrap/Stack'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Subtitle } from './Subtitle'

interface Props {
  current: number
  total: number
}

export const Progress: React. FunctionComponent<Props> = ({ current, total }): JSX.Element => {
  return (
    <Stack className='aec-progress' gap={3}>
      <Subtitle value={`Step ${current} of ${total}`}/>
      <ProgressBar now={100 * current / total}/>
    </Stack>
  )
}
