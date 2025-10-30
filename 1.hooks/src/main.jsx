import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Number from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Number />
  </StrictMode>,
)
