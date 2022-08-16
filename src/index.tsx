import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss'
import 'sweetalert2/src/sweetalert2.scss'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
