import React from 'react'

import Badge from 'react-bootstrap/Badge'
import { NumericFormat } from 'react-number-format'

interface Props {
  total?: number | null
}

export const CaloriesTag: React. FunctionComponent<Props> = ({ total }): JSX.Element => {
  return (
    <Badge bg="primary" className="aec-calories-tag">
      <NumericFormat thousandSeparator="," decimalSeparator="." displayType="text" allowNegative={false} value={total} suffix=" cc"/>
    </Badge>
  )
}
