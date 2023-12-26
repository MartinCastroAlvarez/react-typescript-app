import React from 'react'

import Badge from 'react-bootstrap/Badge'
import { HiEmojiHappy } from 'react-icons/hi'
import { RiEmotionUnhappyFill } from 'react-icons/ri'

import { Difficulty } from '../enums/Difficulty'

interface Props {
  level?: Difficulty | null
}

export const DifficultyTag: React. FunctionComponent<Props> = ({ level }): JSX.Element | null => {
  if (level === null) { return null }
  return (
    <Badge bg="primary" className="aec-difficulty-tag">
      {level === Difficulty.VeryEasy ? <HiEmojiHappy/> : null}
      {level === Difficulty.Easy ? <HiEmojiHappy/> : null}
      {level === Difficulty.Normal ? <HiEmojiHappy/> : null}
      {level === Difficulty.Difficult ? <RiEmotionUnhappyFill/> : null}
      {level === Difficulty.VeryDifficult ? <RiEmotionUnhappyFill/> : null}
      &nbsp;
      { level }
    </Badge>
  )
}
