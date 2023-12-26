import React, { useCallback } from 'react'

import FormControl from 'react-bootstrap/FormControl'

interface Props {
  onChange: any
}

export const Search: React. FunctionComponent<Props> = ({ onChange }): JSX.Element => {
  const handleSearch = useCallback((event: any) => {
    event.preventDefault()
    onChange()
  }, [])

  return (
    <FormControl
      type="text"
      placeholder="What are you looking for?"
      className="mr-sm-2 aec-search"
      onChange={handleSearch}
    />
  )
}
