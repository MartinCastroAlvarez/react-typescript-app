import React from 'react'

import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import Stack from 'react-bootstrap/Stack'

import Store from './Store'
import { Header } from './layout/Header'
import { Body } from './layout/Body'
import { Footer } from './layout/Footer'

export const App = (): JSX.Element => {
  return (
    <Provider store={Store}>
      <Router>
        <Stack gap={3} className='aec-app'>
          <Header/>
          <Body/>
          <Footer/>
        </Stack>
      </Router>
      <Toaster/>
    </Provider>
  )
}
