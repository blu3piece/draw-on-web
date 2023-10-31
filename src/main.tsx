import React from 'react'
import ReactDOM from 'react-dom/client'
import Settings from './popup/Popup.tsx'
import { log } from './app/modules/logger.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Settings />
  </React.StrictMode>,
)

log("Successfully loaded.");