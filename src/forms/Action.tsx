import React from 'react'

import Button from 'react-bootstrap/Button'

interface Props {
  onClick: any
  value?: string | null
  icon?: any | null
}

export const Action: React. FunctionComponent<Props> = ({ onClick, value, icon }): JSX.Element => {
  return (
    <Button className='aec-normal-button' variant='primary' onClick={onClick}>
      {icon === null ? null : icon}
      {icon === null || value === null || value === undefined || icon === undefined ? null : <>&nbsp;</>}
      {value === null ? null : value}
    </Button>
  )
}
