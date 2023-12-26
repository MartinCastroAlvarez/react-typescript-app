import React, { useCallback, useState } from 'react'

import Stack from 'react-bootstrap/Stack'
import RangeSlider from 'react-bootstrap-range-slider'
import { NumericFormat } from 'react-number-format'

interface Props {
  onChange: any
  max?: number
  step?: number
}

export const CaloriesSelect: React. FunctionComponent<Props> = ({ onChange, max = 100000, step = 100 }): JSX.Element => {
  const [total, setTotal] = useState<number>(0)

  const handleSelect = useCallback((value: string) => {
    setTotal(parseInt(value))
    onChange()
  }, [])

  return (
    <Stack className='aec-calories-select' direction="horizontal" gap={3}>
      <RangeSlider
        value={total}
        variant="primary"
        min={0}
        max={max}
        step={step}
        onChange={event => { handleSelect(event.target.value) }}
      />
      <NumericFormat thousandSeparator="," decimalSeparator="." displayType="text" allowNegative={false} value={total} suffix=" Calories"/>
    </Stack>
  )
}
