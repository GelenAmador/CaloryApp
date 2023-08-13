import React from 'react'
import ReactDOM from 'react-dom/client'
import Informacion from '../src/components/Informacion.jsx'
import Navbar from '../src/components/Navbar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('informacion')).render(
    <React.StrictMode>
        <Navbar/>
        <Informacion/>
    </React.StrictMode>
)