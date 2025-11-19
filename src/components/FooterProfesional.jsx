import React from "react";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTwitter, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./FooterProfesional.css";

function FooterProfesional() {
  const LOGO_URL = "https://grupodimher.com/assets/images/logo_icon/logo.png";

  return (
    <footer className="footer-profesional">
      <div className="contenedor-footer">

        {/* 🔹 Logo y descripción */}
        <div className="footer-col logo-col">
          <img src={LOGO_URL} alt="Logo Grupo Dimher" className="footer-logo" />
          <p className="footer-descripcion">
            GRUPO DIMHER, expertos en desarrollo inmobiliario, brindando soluciones innovadoras y confiables.
          </p>
        </div>

        {/* 🔹 Enlaces */}
        <div className="footer-col enlaces-col">
          <h4>Sobre Nosotros</h4>
          <ul>
            <li>
              <NavLink to="/nosotros">¿Quiénes Somos?</NavLink>
            </li>
            <li>
              <NavLink to="/nosotros">Misión, Visión y Valores</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-col servicios-col">
          <h4>Servicios</h4>
          <ul>
            <li><NavLink to="/proyectos">Proyectos Residenciales</NavLink></li>
            <li><NavLink to="/contacto">Asesoría Legal</NavLink></li>
            <li><NavLink to="/contacto">Consultoría Inmobiliaria</NavLink></li>
          </ul>
        </div>

        {/* 🔹 Contacto */}
        <div className="footer-col contacto-col">
          <h4>Contacto</h4>
          <ul>
            <li className="contacto-item">
              <FontAwesomeIcon icon={faPhoneAlt} />
              <NavLink to="/contacto">+1 829-345-6741</NavLink>
            </li>

            <li className="contacto-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <NavLink to="/contacto">grupodimher@gmail.com</NavLink>
            </li>

            {/* ✅ MODIFICACIÓN: Ubicación lleva al mapa correctamente */}
            <li className="contacto-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <HashLink smooth to="/contacto#mapa">Bonao, República Dominicana</HashLink>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-redes-centradas">
        <a 
          href="https://www.facebook.com/share/1AduQcnyL6/?mibextid=wwXIfr" 
          className="facebook" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>

        <a 
          href="https://www.instagram.com/grupodimher?igsh=MXJrcmt5OXNwamc5Mg==" 
          className="instagram" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a 
          href="https://api.whatsapp.com/send/?phone=18098327894&text&type=phone_number&app_absent=0&wame_ctl=1" 
          className="whatsapp" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>

        <a 
          href="https://www.youtube.com/results?search_query=grupo+dimher" 
          className="youtube" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} GRUPO DIMHER. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default FooterProfesional;
