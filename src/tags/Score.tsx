import React from 'react'

import Badge from 'react-bootstrap/Badge'
import { FaStar } from 'react-icons/fa'
import { NumericFormat } from 'react-number-format'

interface Props {
  score?: number | null
  votes?: number | null
}

export const ScoreTag: React. FunctionComponent<Props> = ({ votes, score }): JSX.Element | null => {
  if (votes === null || score === null) { return null }
  return (
    <Badge bg="primary" className="aec-score-tag">
      <FaStar />
      &nbsp;
      <NumericFormat thousandSeparator="," decimalSeparator="." displayType="text" allowNegative={false} value={score} decimalScale={2} prefix=""/>
      &nbsp;
      (<NumericFormat thousandSeparator="," decimalSeparator="." displayType="text" allowNegative={false} value={votes} decimalScale={4} suffix=" votes"/>)
    </Badge>
  )
}
