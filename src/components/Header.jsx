import React, { useState } from "react";
import "./Header.css";
// ❌ import logo from "../assets/logo.png";  // Eliminado
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      {/* ===== BARRA SUPERIOR ===== */}
      <div className="top-bar">
        <div className="social-icons">
          <a
            href="https://api.whatsapp.com/send/?phone=18098327894&text&type=phone_number&app_absent=0&wame_ctl=1"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://www.facebook.com/share/1AduQcnyL6/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
    
          <a
            href="https://www.instagram.com/grupodimher?igsh=MXJrcmt5OXNwamc5Mg=="
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.youtube.com/results?search_query=grupo+dimher"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>

      {/* ===== FRANJA MEDIA ===== */}
      <div className="middle-bar">
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
          <div>
            <p className="label">LLÁMANOS</p>
            <p className="info">809-832-7894</p>
          </div>
        </div>

        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <div>
            <p className="label">ESCRÍBENOS</p>
            <p className="info">info@grupodimher.com</p>
          </div>
        </div>

        <div className="contact-item">
          <FontAwesomeIcon icon={faClock} className="icon" />
          <div>
            <p className="label">HORARIO</p>
            <p className="info">L a V: 8:00 AM a 6:00 PM - S: 9:00 AM a 1:00 PM</p>
          </div>
        </div>
      </div>

      {/* ===== BARRA INFERIOR ===== */}
      <div className="bottom-bar">
        <div className="logo">
          <img
            src="https://grupodimher.com/assets/images/logo_icon/logo.png"
            alt="Grupo Dimher"
          />
        </div>

        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><NavLink to="/" end>Inicio</NavLink></li>
            <li><NavLink to="/nosotros">Nosotros</NavLink></li>
            <li><NavLink to="/proyectos">Proyectos</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
            <li><NavLink to="/contacto">Contacto</NavLink></li>
          </ul>
        </nav>

        <div
          className={`hamburger ${isOpen ? "toggle" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span><span></span><span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
