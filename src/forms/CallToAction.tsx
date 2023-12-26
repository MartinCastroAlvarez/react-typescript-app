import React from 'react'

import Button from 'react-bootstrap/Button'

interface Props {
  onClick: any
  value?: string | null
  icon?: any | null
}

export const CallToAction: React. FunctionComponent<Props> = ({ onClick, value, icon }): JSX.Element => {
  return (
    <Button className='aec-cta-button' variant='primary' onClick={onClick}>
      {icon === null ? null : icon}
      {icon === null || value === null || value === undefined || icon === undefined ? null : <>&nbsp;</>}
      {value === null ? null : value}
    </Button>
  )
}
