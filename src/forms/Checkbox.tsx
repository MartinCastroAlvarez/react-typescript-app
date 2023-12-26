import React from 'react'

import Form from 'react-bootstrap/Form'

interface Props {
  value: string
}

export const Checkbox: React. FunctionComponent<Props> = ({ value }): JSX.Element => {
  return (
    <Form.Check
      className="aec-checkbox"
      type='checkbox'
      label={value}/>
  )
}
