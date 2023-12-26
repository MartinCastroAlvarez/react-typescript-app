import React, { useCallback, useState } from 'react'

import Dropdown from 'react-bootstrap/Dropdown'

import { Nutrient } from '../enums/Nutrient'

interface Props {
  onChange: any
}

export const NutrientSelect: React. FunctionComponent<Props> = ({ onChange }): JSX.Element => {
  const [nutrient, setNutrient] = useState<Nutrient | null>(null)

  const handleSelect = useCallback((nutrient: Nutrient) => {
    setNutrient(nutrient)
    onChange()
  }, [])

  return (
    <Dropdown className='aec-nutrient-select'>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        { nutrient === null ? 'Select nutrients' : nutrient }
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {
          Object.values(Nutrient).map(nutrient => {
            return <Dropdown.Item key={nutrient} onClick={() => { handleSelect(nutrient) }}>{nutrient}</Dropdown.Item>
          })
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}
