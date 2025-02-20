import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navBar">
        <div className="navImageContainer">
          <div className="navImage"></div>
        </div>
        <div
          className="navLinks"
          style={{ fontFamily: "oswald", fontSize: "23px" }}
        >
          <p>pRog.R Studio</p>
          <p>VoD MusicVerse</p>
          <p>VoD Records</p>
          <p>Contact</p>
          <p>About</p>
        </div>
      </nav>

      <section className="welcomeContainer">
        <p style={{ fontFamily: "oswald", fontSize: "30px", color: "white" }}>
          Welcome to pRog.R Studio
        </p>
        <p style={{ fontFamily: "oswald", color: "white", fontSize: "50px" }}>
          WHERE YOUR SOUND COMES ALIVE
        </p>
      </section>

      <section class="gear-section">
        <h2 style={{fontFamily: "oswald", fontSize: "50px", padding: "30px"}}>Studio Gear List</h2>
        <div class="gear-category">
          <div className="studioPhoto1"></div>
          <div className="gearText">
            <h3>Audio Interfaces & Monitors</h3>
            <ul>
              <li>RME Fireface UFX+ Interface</li>
              <li>Adam Audio A77x Monitors</li>
              <li>GIK Acoustics Room Calculated Treatment</li>
              <li>Sonarworks Reference 4 Calibration</li>
            </ul>
          </div>
        </div>

        <div class="gear-category">
          <div className="gearText">
            <h3>Preamps & Compressors</h3>
            <ul>
              <li>Warm Audio WA273 Preamp & EQ</li>
              <li>Warm Audio WA76 Compressor</li>
              <li>Warm Audio WA2A Compressor</li>
              <li>Rupert Neve DI Box</li>
            </ul>
          </div>
          <div className="studioPhoto3"></div>
        </div>

        <div class="gear-category">
        <div className="studioPhoto2"></div>
          <div className="gearText">
            <h3>Microphones & Headphones</h3>
            <ul>
              <li>Shure Sm7b Microphone</li>
              <li>Slate ML-1 Microphone</li>
              <li>Slate ML-2 Microphone</li>
              <li>Aston Halo Shadow Reflection Absorber</li>
              <li>Focal Listen Pro Headphones</li>
              <li>Slate VSX Modeling Headphones</li>
            </ul>
          </div>
        </div>
      </section>

      <footer
        className="footerContainer"
        style={{
          fontFamily: "Josefin Sans",
          fontSize: "20px",
          fontWeight: "700",
        }}
      >
        <div>
          <p style={{ fontSize: "30px" }}>LETS CREATE MUSIC TOGETHER</p>
        </div>
        <div className="footerLinks">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
        <p>2025 © pRog.R Studio - Valley of Dreams</p>
      </footer>
    </div>
  );
}

export default App;
