import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Comp1 from "./components/Comp1.jsx"
import Faq1 from "./components/Faq1.jsx"
import Faq2 from "./components/Faq2.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Faq2 />
  </React.StrictMode>,
)
