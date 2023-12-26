import React from 'react'

interface Props {
  value?: string
}

export const Title: React. FunctionComponent<Props> = ({ value }): JSX.Element | null => {
  if (value === null) { return null }
  return (
    <h1 className='aec-title'>{ value }</h1>
  )
}
