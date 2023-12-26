import React from 'react'

interface Props {
  value?: string
}

export const Text: React. FunctionComponent<Props> = ({ value }): JSX.Element | null => {
  if (value === null) { return null }
  return (
    <p className='aec-text'>{ value }</p>
  )
}
