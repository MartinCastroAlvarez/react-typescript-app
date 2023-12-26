import React, { useCallback, useState } from 'react'

import Dropdown from 'react-bootstrap/Dropdown'

import { Difficulty } from '../enums/Difficulty'

interface Props {
  onChange: any
}

export const DifficultySelect: React. FunctionComponent<Props> = ({ onChange }): JSX.Element => {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null)

  const handleSelect = useCallback((difficulty: Difficulty) => {
    setDifficulty(difficulty)
    onChange()
  }, [])

  return (
    <Dropdown className='aec-difficulties-select'>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        { difficulty === null ? 'Select Difficulty' : difficulty }
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {
          Object.values(Difficulty).map(difficulty => {
            return <Dropdown.Item key={difficulty} onClick={() => { handleSelect(difficulty) }}>{difficulty}</Dropdown.Item>
          })
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}
