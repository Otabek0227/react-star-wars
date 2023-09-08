import { RouterProvider } from "react-router-dom"

import routes from "routes/routes" 

import styles from './App.module.css'

export default function App() {
  
  return (
      <RouterProvider router={routes}></RouterProvider>
  )
}
