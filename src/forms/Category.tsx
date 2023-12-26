import React, { useCallback, useState } from 'react'

import Dropdown from 'react-bootstrap/Dropdown'

import { Category } from '../enums/Category'

interface Props {
  onChange: any
}

export const CategorySelect: React. FunctionComponent<Props> = ({ onChange }): JSX.Element => {
  const [category, setCategory] = useState<Category | null>(null)

  const handleSelect = useCallback((category: Category) => {
    setCategory(category)
    onChange()
  }, [])

  return (
    <Dropdown className='aec-category-select'>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        { category === null ? 'Select Category' : category }
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {
          Object.values(Category).map(category => {
            return <Dropdown.Item key={category} onClick={() => { handleSelect(category) }}>{category}</Dropdown.Item>
          })
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}
