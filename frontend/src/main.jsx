import './index.css'
import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store.jsx'
import App from './App.jsx'
import Login from './components/Login.jsx'
import ProtectedRoutes from './components/ProtectedRoutes.jsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoutes><App /></ProtectedRoutes>,
  },
  {
    path: '/login',
    element: <Login />,
  }
])

const qclient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={qclient}>
      <Provider store={store}>
        <RouterProvider router={router}>
        </RouterProvider>
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
)

