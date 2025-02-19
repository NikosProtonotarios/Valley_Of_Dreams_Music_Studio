import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
      <nav className='navBar'>
        <div className='navImageContainer'>
          <div className='navImage'></div>
        </div>
        <div className='navLinks' style={{fontFamily: "oswald", fontSize: "23px"}}>
          <p>pRog.R Studio</p>
          <p>VoD MusicVerse</p>
          <p>VoD Records</p>
          <p>Contact</p>
          <p>About</p>
        </div>
      </nav>
      <section className='sectionContainer'>

      </section>
      <footer className='footerContainer'>
        <p>2023 pRog.R Studio</p>
      </footer>
    </div>
  )
}

export default App
