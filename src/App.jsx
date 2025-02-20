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
      <footer className='footerContainer' style={{fontFamily: "Josefin Sans", fontSize: "20px", fontWeight: "700"}}>
        <div>
          <p style={{fontSize: '30px'}}>LETS CREATE MUSIC TOGETHER</p>
        </div>
        <div className='footerLinks'>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
        <p>2025 © pRog.R Studio - Valley of Dreams</p>
      </footer>
    </div>
  )
}

export default App
