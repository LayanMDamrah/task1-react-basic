// import { useState } from 'react'
import NavBar from './componnent/navbar/NavBar'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'
import Footer from './componnent/footer/Footer'
import Hero from './pages/hero/Hero'

function App() {
  return (
    <>
      <NavBar />
      <Hero/>
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>

  )


}

export default App
