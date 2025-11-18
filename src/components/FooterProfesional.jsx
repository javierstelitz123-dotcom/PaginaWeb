import React from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTwitter, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom"; // 🔹 Import necesario para la navegación interna
import "./FooterProfesional.css";

function FooterProfesional() {
  const LOGO_URL =
    "https://odoocdn.com/web/image/res.partner/17562788/avatar_1920/DESARROLLO%20INMOBILIARIO%20MHER%20SRL%20-%20Grupo%20Dimher?unique=07785c8";

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
              <NavLink to="/nosotros">Quiénes Somos</NavLink>
            </li>
            <li>
              <NavLink to="/nosotros">Misión, Visión y Valores</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-col servicios-col">
          <h4>Servicios</h4>
          <ul>
            <li><a href="#">Proyectos Residenciales</a></li>
            <li><a href="#">Asesoría Legal</a></li>
            <li><a href="#">Consultoría Inmobiliaria</a></li>
          </ul>
        </div>

        {/* 🔹 Contacto */}
        <div className="footer-col contacto-col">
          <h4>Contacto</h4>
          <ul>
            <li><FontAwesomeIcon icon={faPhoneAlt} /> +1 829-345-6741</li>
            <li><FontAwesomeIcon icon={faEnvelope} /> grupodimher@gmail.com</li>
            <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Monseñor Nouel, RD</li>
          </ul>
        </div>

      </div>

      {/* 🔹 Redes sociales centradas y grandes */}
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
