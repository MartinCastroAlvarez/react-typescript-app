import React from 'react'

interface Props {
  value?: string
}

export const Subtitle: React. FunctionComponent<Props> = ({ value }): JSX.Element | null => {
  if (value === null) { return null }
  return (
    <h2 className='aec-subtitle'>{ value }</h2>
  )
}
