import React, { useCallback, useState } from 'react'
import Form from 'react-bootstrap/Form'

interface Props {
  onChange: any
  placeholder: string
}

export const TextInput: React. FunctionComponent<Props> = ({ onChange, placeholder }): JSX.Element => {
  const [value, setValue] = useState('')

  const handleChange = useCallback((value: string) => {
    setValue(value)
    onChange(value)
  }, [])

  return (
    <Form.Control
      className='aec-input'
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={event => { handleChange(event.target.value) }}
    />
  )
}
