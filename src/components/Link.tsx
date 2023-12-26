import React from 'react'

interface Props {
  value?: string
  href?: string
}

export const Link: React. FunctionComponent<Props> = ({ value, href }): JSX.Element | null => {
  if (value === null) { return null }
  return (
    <a href={href} className='aec-link'>{ value }</a>
  )
}
