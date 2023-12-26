import React from 'react'

import Badge from 'react-bootstrap/Badge'
import { FaBowlFood } from 'react-icons/fa6'

import { type Category } from '../enums/Category'

interface Props {
  value?: Category | null
}

export const CategoryTag: React. FunctionComponent<Props> = ({ value }): JSX.Element | null => {
  if (value === null) { return null }
  return (
    <Badge bg="primary" className="aec-category-tag">
      <FaBowlFood/>
      &nbsp;
      { value }
    </Badge>
  )
}
