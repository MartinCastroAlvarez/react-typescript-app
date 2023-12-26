import React, { useCallback, useState } from 'react'

import Dropdown from 'react-bootstrap/Dropdown'

import { Type } from '../enums/Type'

interface Props {
  onChange: any
}

export const TypeSelect: React. FunctionComponent<Props> = ({ onChange }): JSX.Element => {
  const [type, setType] = useState<Type | null>(null)

  const handleSelect = useCallback((type: Type) => {
    setType(type)
    onChange()
  }, [])

  return (
    <Dropdown className="aec-type-select">
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        { type === null ? 'Select Type' : type }
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {
          Object.values(Type).map(type => {
            return <Dropdown.Item key={type } onClick={() => { handleSelect(type) }}>{type}</Dropdown.Item>
          })
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}
