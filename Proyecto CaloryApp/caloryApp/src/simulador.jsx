import React from 'react'
import ReactDOM from 'react-dom/client'
import SimuladorApp from '../src/components/SimuladorApp.jsx'
import Navbar from '../src/components/Navbar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('simulador')).render(
<React.StrictMode>
    <Navbar/>
    <SimuladorApp/>
</React.StrictMode>
)
