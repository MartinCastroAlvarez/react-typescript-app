import React, { useState, useCallback } from 'react'

import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'

interface Props {
  onSelect: any
  totalPages: number
}

export const PagesSelect: React. FunctionComponent<Props> = ({ onSelect, totalPages }): JSX.Element => {
  const [page, setPage] = useState(1)

  const handleClick = useCallback((page: number) => { setPage(page); onSelect() }, [])

  return (
    <Pagination className='aec-pagination'>
      {
        Array.from({ length: totalPages }, (_, index) => index).map(number => {
          return <PageItem key={number} active={number + 1 === page} onClick={() => { handleClick(number + 1) }}>
            {number + 1}
          </PageItem>
        })
      }
    </Pagination>
  )
}
