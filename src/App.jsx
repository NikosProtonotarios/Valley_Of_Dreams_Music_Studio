import { useState } from "react";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ttykjgj", // Replace with your EmailJS service ID
        "template_vvrw7oq", // Replace with your EmailJS template ID
        form.current,
        "6g5ZjsDWvkdDpnB_7" // Replace with your EmailJS user ID
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div className="bodyContainer">
      <nav className="navBar">
        <div className="navImageContainer">
          <div className="navImage"></div>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>

        <div className="navLinks" style={{ fontFamily: "oswald" }}>
          <Link to="welcome-container" smooth={true} duration={600}>
            <p className="homePointer">Home</p>
          </Link>

          <Link to="gearSection" smooth={true} duration={600}>
            <p className="studioPointer">Studio Gear List</p>
          </Link>

          <Link to="youtube-container" smooth={true} duration={600}>
            <p className="featuredPointer">Featured Works</p>
          </Link>

          <Link to="musicVerse-container" smooth={true} duration={600}>
            <p className="valleyPointer">Valley of Dreams</p>
          </Link>

          <Link to="bio-container" smooth={true} duration={600}>
            <p className="aboutPointer">About</p>
          </Link>

          <Link to="email-container" smooth={true} duration={600}>
            <p className="contactPointer">Contact</p>
          </Link>
        </div>
      </nav>

      <section id="welcome-container" className="welcomeContainer">
        <p style={{ fontFamily: "oswald", color: "white" }}>
          Welcome to pRog.R Studio
        </p>
        <p style={{ fontFamily: "oswald", color: "white" }}>
          WHERE YOUR SOUND COMES ALIVE
        </p>
      </section>

      <section id="gearSection" class="gear-section">
        <h2
          style={{
            fontFamily: "oswald",
            padding: "30px",
          }}
        >
          Studio Gear List
        </h2>
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

      <section id="spotify-container" className="spotifyContainer">
        <div className="spotifySongs">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/69nr4Kz592CgB7ridRjtDu?utm_source=generator"
            width="25%"
            height="352"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/0QOBy5QIynixPhjBzvQWLK?utm_source=generator"
            width="25%"
            height="352"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/5EA7EkWFFi5vMOFT8XaQm5?utm_source=generator"
            width="25%"
            height="352"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div className="spotifySongs">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/77LKzpVKqoe6kutMtdx6Q6?utm_source=generator"
            width="25%"
            height="352"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/1bcHeGjdiZYRmXBIAuAxS7?utm_source=generator"
            width="25%"
            height="352"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section id="bio-container" className="bioContainer">
        <div className="bioText">
          <h1
            style={{
              fontFamily: "oswald",
              textAlign: "center",
            }}
          >
            ABOUT ROGER
          </h1>
          <div className="rogerText">
            <p style={{ fontFamily: "oswald" }}>
              Hailing from Greece, <strong>Roger Rovento</strong> is a talented
              musician with over a decade of experience as a{" "}
              <strong>music teacher</strong>, <strong>composer</strong>, and{" "}
              <strong>producer</strong>. His deep passion for music shines
              through in every note, whether he’s playing, teaching, or
              creating.
            </p>
            <br />
            <p style={{ fontFamily: "oswald", fontSize: "20px" }}>
              Having mastered a wide range of skills, Roger brings a{" "}
              <strong>unique and diverse approach</strong> to his craft,
              constantly exploring new sounds and techniques. With more than{" "}
              <strong>10 years of teaching experience</strong>, Roger has helped
              shape the musical journeys of countless students, guiding them
              with his patient and engaging approach.
            </p>
            <br />
            <p style={{ fontFamily: "oswald", fontSize: "20px" }}>
              His <strong>collaborative spirit</strong> has also led him to work
              with musicians from various backgrounds, contributing his talents
              to numerous creative projects. As a composer and producer, Roger’s
              ability to <strong>blend genres and styles</strong> makes his
              music stand out, earning him respect in the industry.
            </p>
            <br />
            <p style={{ fontFamily: "oswald", fontSize: "20px" }}>
              Whether in the classroom, the studio, or on stage, Roger Rovento
              continues to <strong>push the boundaries</strong> of what’s
              possible in music, inspiring both his students and peers alike.
            </p>
          </div>
        </div>
        <div className="bioPhoto"></div>
      </section>

      <section id="youtube-container">
        <div style={{ margin: "80px" }}>
          <h1
            style={{
              fontFamily: "oswald",
              fontSize: "70px",
              textAlign: "center",
            }}
          >
            FEATURED WORKS
          </h1>
          <p
            style={{
              fontFamily: "oswald",
              fontSize: "30px",
              textAlign: "center",
            }}
          >
            PRODUCED | ENGINEERED | MIXED | MASTERED
          </p>
        </div>
        <div style={{ padding: "30px", backgroundColor: "#333333" }}>
          <iframe
            width="25%"
            height="315"
            src="https://www.youtube.com/embed/LEK51tqAFTE?si=x8BU1TZgkKJFVLuG"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="25%"
            height="315"
            src="https://www.youtube.com/embed/yg4VZ-p_rUY?si=MA8eHZkjjIo47uLA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="25%"
            height="315"
            src="https://www.youtube.com/embed/YZb0KN8d9gU?si=Ke6hQlRbaeAy7QYT"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="25%"
            height="315"
            src="https://www.youtube.com/embed/0QKlhfCWH_I?si=kGYGtDBvmW1gukj3"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      {/* <div className="musicVerseImage"></div> */}
      <section id="musicVerse-container" className="musicVerseContainer">
        <div>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/0Gh9v1x85KdhI0cJ4SUpGN?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/3TBP3U27Mqc4o9GwXhrshb?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section id="email-container" className="emailContainer">
        <div className="contactForm">
          <h2 style={{ fontSize: "60px", textAlign: "center" }}>CONTACT ME</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label>Name: </label>
              <input type="text" name="name" required />
            </div>
            <div>
              <label>Email: </label>
              <input type="email" name="email" required />
            </div>
            <div>
              <label>Message:</label>
              <textarea name="message" required />
            </div>
            <button
              type="submit"
              style={{
                display: "block",
                margin: "20px auto",
                padding: "10px 20px",
                fontSize: "16px",
                fontFamily: "oswald",
              }}
            >
              Send Message
            </button>
          </form>
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
          <a href="https://www.facebook.com/pRog.RoventoStudio">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/rogerrovento?fbclid=IwZXh0bgNhZW0CMTAAAR2d8lH7GoKtKg8kMYF2KAdsCSTi4ElPi_CgiVNzNEU5C-bbKTAxLMmKv48_aem_QBI_ejCe6QfcgY25_qTJKw">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@RogerRovento">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a href="https://www.linkedin.com/in/roger-rovento-24827214b/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <p>2025 © pRog.R Studio - Valley of Dreams</p>
      </footer>
    </div>
  );
}

export default App;
