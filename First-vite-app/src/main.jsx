import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import Add from './componet/Add.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Add /> */}
  </StrictMode>,
) 
