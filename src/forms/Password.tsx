import React, { useCallback, useState } from 'react'
import Form from 'react-bootstrap/Form'

interface Props {
  onChange: any
  placeholder?: string
}

export const PasswordInput: React. FunctionComponent<Props> = ({ onChange, placeholder = 'Insert your password' }): JSX.Element => {
  const [value, setValue] = useState('')

  const handleChange = useCallback((value: string) => {
    setValue(value)
    onChange(value)
  }, [])

  return (
    <Form.Control
      type="password"
      className='aec-password-input'
      value={value}
      placeholder={placeholder}
      onChange={event => { handleChange(event.target.value) }}
    />
  )
}
