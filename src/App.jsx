import React from 'react'
import Navbar from './components/Navbar'
import FloatingContactIcons from './components/FloatingContactIcons'
import Hero from './components/Hero'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <FloatingContactIcons />
      <div className="flex items-center justify-center h-screen">
  <p className="text-center font-medium text-7xl">Under Working</p>
</div>

    </div>
  )
}

export default App