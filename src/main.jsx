import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Useffect from './Useffect/Useffect.jsx'
import WindowSize from './Useffect/WindowResize.jsx'
import ComponentA from './Component/ComponentA.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Useffect/>
    <WindowSize/>
    <ComponentA/>
  </StrictMode>,
)
