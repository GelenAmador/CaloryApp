import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/components/App.jsx'
import Navbar from '../src/components/Navbar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <App/>
  </React.StrictMode>
)
