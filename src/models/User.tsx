import { type Image } from './Image'

export class User {
  email: string = ''
  password: string = ''
  registrationCode: number | null = null
  avatar: Image | null = null
  isVerified: boolean = false
  isActive: boolean = false
}
