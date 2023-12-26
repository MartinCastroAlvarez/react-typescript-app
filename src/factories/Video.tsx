import { Video } from '../models/Video'

import { getRandomVideo } from '../utils/Random'

export const VideoFactory = (): Video => {
  const video: Video = new Video()
  video.url = getRandomVideo()
  return video
}
