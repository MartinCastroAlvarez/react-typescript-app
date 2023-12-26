import React from 'react'

import Badge from 'react-bootstrap/Badge'
import { NumericFormat } from 'react-number-format'

interface Props {
  total?: number | null
}

export const CostTag: React. FunctionComponent<Props> = ({ total }): JSX.Element | null => {
  if (total === null) { return null }
  return (
    <Badge bg="primary" className="aec-cost-tag">
      <NumericFormat thousandSeparator="," decimalSeparator="." displayType="text" allowNegative={false} value={total} prefix="$ "/>
    </Badge>
  )
}
