import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'

import './index.scss'

import 'react-placeholder/lib/reactPlaceholder.css'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css'

const root = ReactDOM.createRoot(document.getElementById('app-root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
