import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

// نقطه شروع برنامه React؛ کامپوننت App داخل عنصر root نمایش داده می‌شود.
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
