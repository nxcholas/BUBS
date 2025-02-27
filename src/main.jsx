import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css';
import LoadingScreen from './apps/LoadingScreen'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoadingScreen />
  </StrictMode>,
)
