import React, { useState } from "react";
import "./Proyecto7.css";
import { MapPin, Home, Ruler, Building2 } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaArrowLeft,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Proyecto7 = () => {
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.href;
  const navigate = useNavigate();

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVolver = () => {
    navigate(-1);
  };

  return (
    <section className="proyecto-detalle">
      {/* Botón Volver */}
      <button className="proyecto-volver" onClick={handleVolver}>
        <FaArrowLeft />
        Volver
      </button>

      {/* Banner */}
      <div className="proyecto-banner">
        <div className="proyecto-badge">Detalles de propiedad</div>

        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXFxgaGBgYGRcdGhgdGhgYFxgaGxgYHSggHRolHRoXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lICUvLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwYFBwj/xABJEAABAgMEBQgFCAgHAAMAAAABAhEAAyEEEjFBBVFhcYEGEyIykaHR8AdCUrHBFCNigpLS4fEVJDNTVHKT0xYXQ0SDouKjssL/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EACcRAAICAQQCAQMFAAAAAAAAAAABAhEhAxITMUFRYSKBoQQyQmJx/9oADAMBAAIRAxEAPwDzkqvAmrjsGqLbDb1IVuwcwEoMXyz1RdITfUE6hkO+tGGMc7WBHcnW1Kg5BCmxy7DHOMsk451pwrEmIIGLPXX4wr2ZHv8AOyMkkug/0gUlsTnqaK5gZz63uggpAOpmxZhXxiu1AO7kgnMMW2g18iKTV0NoqUu8HPHyIgJrY+RDTpDkNnWHF1iDiCD5aKXRFE7SoEOCxrsiNnm4A4ONbw6askCpxBwrnDLsikFwNRrgdmMF2qKSoMNncsSGYF/Pui1UhJFanLKGcgEUzI41DbBES6R5pujO2HbJCRLBx7AKed0H2FEoP0Ao5FRVTgAx7IBmJKWIOIHeHHGOhKtKwKLFGoPyinN1QK0wmZawKAgDUmg7LsVCeNnd92OetZUSdcRf7Ve7jGaTY8h0tBWaAkbGHHV5zrEp6Fg0SoD/AI/CIWQgipUD9HVlSOxO0XIo1q5x6UIxNBgouIqc89YHTl0cGaCxJF3bQasbucVJOOYpWurfjHfn6Ls8tImm0KxZgi8H1F1AcaQBItctyGABLFd0MCSwdlUxGuBNNYHTWGBSiUl6eQNcETJ6SGKH4oH/AOYjaLcJZa8xrQpYjVR4ps9rlrUb6wnHAZ7n90bRh7Iu8Euc1VGpS0twYRUuUlVVUO9/x74rtN0ZB9zeT5rFKKHfCk2sE0xpujTiElQ+iX7jWAJslWG3Ax1bNNuk7wN+Yo0Ou2kllIJA2P76jtioST7E3RyAggEkbInJTHVNmlrFAoVwr7lV7DAlqkBFHoTU1fsipJjKFVo+7znDqmFIAucQMIqWboOOzZEBPO2uunZGbQglc0Ebdre7VE0KYMS4PhV9UUXKdI8M8zjC51wwSwOb1MKhknKnxbIDBxSkTEv223+OTxMFqioA3cHERlWgVoRlXtxhBZcld1gPy7GixC6vidZ8WgJmO/i3GD5M4AMBWr4V7REtegBbUrXj5zjmTJqnxgmeSSUkEVxaJBTZDsHxjZUhBkqUgXnSSGBDFnctTd8I586WUKBSC1SM86gEatRHiehIt6kF0nEMQcCHdiNVB2CKtJrchaRRXSTsOCknaMNoY5iM4pp5NLtBdis4nKQQQLzhiQkOxIL79e7MQNapakulSWIwyzq4yLwNJUo0A8IPVY5kxlKWXwrXd8YlpRfY8tdHPEw5tw7vO+LrRJISkuFXjRsMm3d0GpsDCoBORf8ACkVz5CbpSokEgsKF9WENSi3ge1pZAUBSlAUfOuIzrEpdn6bYUdzkzfhC+UdFmGT74jaCXDYEONj4jgXH"
          alt="Residencial Los Álamos"
          className="proyecto-banner-img"
        />

        <div className="proyecto-banner-texto">
          <h1>Residencial Los Álamos</h1>
          <p>Bonao</p>
        </div>
      </div>

      {/* Información general */}
      <div className="proyecto-info-container">
        <div className="proyecto-descripcion">
          <h2>Detalles del Proyecto</h2>
          <p>
            Residencial Los Álamos es un proyecto diseñado para brindar
            comodidad, seguridad y una vida moderna en una ubicación estratégica
            de Bonao. Con espacios bien distribuidos y un entorno agradable, es
            ideal para familias que buscan tranquilidad y estilo.
          </p>
        </div>

        <div className="proyecto-caracteristicas">
          <h2>Características</h2>
          <ul>
            <li>
              <Home className="icono" /> Viviendas modernas con excelentes acabados
            </li>
            <li>
              <Ruler className="icono" /> Distribuciones funcionales y espaciosas
            </li>
            <li>
              <Building2 className="icono" /> Parqueos y áreas comunes disponibles
            </li>
            <li>
              <MapPin className="icono" /> Ubicado estratégicamente en Bonao
            </li>
          </ul>
        </div>
      </div>

      {/* Compartir */}
      <div className="blog1-share">
        <h3>Compartir ahora</h3>

        <div className="blog1-social-icons">
          <a
            href="https://www.facebook.com/share/1AduQcnyL6/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/grupodimher?igsh=MXJrcmt5OXNwamc5Mg=="
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=18098327894&text&type=phone_number&app_absent=0&wame_ctl=1"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.youtube.com/results?search_query=grupo+dimher"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Copiar link */}
        <div className="blog1-copy-link-wrapper">
          <input type="text" value={currentUrl} readOnly className="blog1-copy-input" />
          <button className="blog1-copy-button" onClick={handleCopy}>
            {copied ? "¡Copiado!" : "Copiar"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Proyecto7;
