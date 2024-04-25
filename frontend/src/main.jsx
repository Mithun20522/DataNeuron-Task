import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TestdataProvider from './context/testdata/TestdataProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TestdataProvider>
    <App />
  </TestdataProvider>,
)
