import React from 'react'

import Stack from 'react-bootstrap/Stack'

interface Props {
  children: React.ReactNode
}

export const Form: React.FunctionComponent<Props> = ({ children }): JSX.Element => {
  return (
    <Stack className='aec-form' direction='vertical' gap={3}>
      {children}
    </Stack>
  )
}
