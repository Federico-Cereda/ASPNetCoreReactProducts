import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AuthProvider } from './shared/context/AuthProvider.tsx';
import 'bootstrap/dist/css/bootstrap.css';
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider email={null} pwd={null} idRuolo={null} accessToken={null}>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
