import { Image } from '../models/Image'

import { getRandomImage } from '../utils/Random'

export const ImageFactory = (): Image => {
  const image: Image = new Image()
  image.url = getRandomImage()
  return image
}
