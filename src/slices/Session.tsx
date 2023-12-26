import { createSlice } from '@reduxjs/toolkit'

import { UserFactory } from '../factories/User'
import { type User } from '../models/User'

export interface SessionState {
  user: User | null
}

const initialState: SessionState = {
  user: null
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    authenticate: state => {
      state.user = UserFactory()
    },
    deauthenticate: state => {
      state.user = null
    }
  }
})

export const { authenticate, deauthenticate } = sessionSlice.actions
