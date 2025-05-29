import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar'
import About from './components/About'

function App() {
  return (
    <main className='w-full h-screen px-[7%]'>
    <Navbar />
     <About />
    </main>
  )
}

export default App
