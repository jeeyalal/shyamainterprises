import React from 'react'
import Navbar from './components/Navbar'
import FloatingContactIcons from './components/FloatingContactIcons'
import Hero from './components/Hero'
import Services from './components/Services'
import Ourwoks from './components/Ourwoks'
import Achievements from './components/Achivement'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Review from './components/Review'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Services />
      <Ourwoks />
      <Achievements />
      <Review />
      <Contact />
      <Footer />
      
      <FloatingContactIcons />

      

    </div>
  )
}

export default App