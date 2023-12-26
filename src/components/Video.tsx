import React from 'react'

import Stack from 'react-bootstrap/Stack'
import ReactPlayer from 'react-player'

import { type Video } from '../models/Video'

interface Props {
  video?: Video | null
}

export const RecipeVideo: React. FunctionComponent<Props> = ({ video }): JSX.Element | null => {
  if (video === null) {
    return null
  }
  return (
    <Stack className='aec-video'>
      <ReactPlayer autoPlay={true} url={video?.url} loop={true} controls={true} volume={1}/>
    </Stack>
  )
}
