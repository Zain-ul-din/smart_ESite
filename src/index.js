import React from 'react'
import  ReactDOM  from 'react-dom/client'

// styles
import './styles/bootstrap.min.css'
import './styles/index.css'

// Main Component
import App from './App'

// React 18 render syntax
const target = ReactDOM.createRoot(document.querySelector('#root'))
target.render ( <> <App/> </> )


