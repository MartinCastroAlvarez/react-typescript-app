import { User } from '../models/User'
import { getRandomBoolean, getRandomInteger, getRandomEmail, getRandomString } from '../utils/Random'
import { ImageFactory } from './Image'

export const UserFactory = (): User => {
  const user: User = new User()
  user.email = getRandomEmail()
  user.avatar = ImageFactory()
  user.password = getRandomString()
  user.registrationCode = getRandomInteger()
  user.isVerified = getRandomBoolean()
  user.isActive = getRandomBoolean()
  return user
}
