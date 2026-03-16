import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './routing/AppRoutes'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
