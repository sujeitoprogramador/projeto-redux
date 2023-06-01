import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Address } from './pages/address'
 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },
  {
    path: '/painel',
    element: <Home/>
  },
  {
    path: '/address',
    element: <Address/>
  },
])

export { router };