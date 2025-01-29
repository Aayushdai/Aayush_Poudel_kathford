import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyRoutes from './MyRoutes'
import Header from './Header'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <MyRoutes/>
  
    </>
  )
}

export default App
