import React, { useCallback, useState } from 'react'

import Dropdown from 'react-bootstrap/Dropdown'
import { TbWorld } from 'react-icons/tb'

import { Language } from '../enums/Language'
import { getRandomElementFromEnum } from '../utils/Random'

export const LanguageSelect = (): JSX.Element => {
  const [language, setLanguage] = useState(getRandomElementFromEnum(Language))

  const handleSelect = useCallback((language: Language) => { setLanguage(language) }, [])

  return (
    <Dropdown className="ms-auto aec-language-select">
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        <TbWorld/> { language }
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {
          Object.values(Language).map(language => {
            return <Dropdown.Item key={language} onClick={() => { handleSelect(language) }}>{language}</Dropdown.Item>
          })
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}
