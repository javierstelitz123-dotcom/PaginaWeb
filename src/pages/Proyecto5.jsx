import React, { useState } from "react";
import "./Proyecto5.css";
import { MapPin, Home, Ruler, Building2 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

  // Importar imágenes locales
import imagen6 from "../assets/imagen6.jpg";
import imag7 from "../assets/imag7.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";


const Proyecto5 = () => {
  const [copied, setCopied] = useState(false);
  const [imagenActual, setImagenActual] = useState(0);
  const navigate = useNavigate();

  const currentUrl = window.location.href;

  // Lista de imágenes del proyecto
const imagenes = [
  imagen6,
  imag7,
  img1,
  img2,
  img3,
  img4,
  img5,
  img8,
  img9
];


  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVolver = () => {
    navigate(-1);
  };

  const siguienteImagen = () => {
    setImagenActual((prev) => (prev + 1) % imagenes.length);
  };

  const anteriorImagen = () => {
    setImagenActual((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <section className="proyecto-detalle">
      {/* Botón Volver */}
      <button className="proyecto-volver" onClick={handleVolver}>
        <FaArrowLeft /> Volver
      </button>

      {/* Banner / Slider */}
      <div className="proyecto-banner">
        <div className="proyecto-badge">Detalles de propiedad</div>

        <div className="galeria-container">
          <button className="flecha izquierda" onClick={anteriorImagen}>&lt;</button>
          <div className="imagen-principal">
            <img
              src={imagenes[imagenActual]}
              alt={`Vista ${imagenActual + 1}`}
              className="proyecto-banner-img"
            />
          </div>
          <button className="flecha derecha" onClick={siguienteImagen}>&gt;</button>
        </div>

        {/* Miniaturas eliminadas */}

        <div className="proyecto-banner-texto">
          <h1>Residencial Dimher</h1>
          <p>Bonao</p>
        </div>
      </div>

      {/* Información */}
      <div className="proyecto-info-container">
        <div className="proyecto-descripcion">
          <h2>Descripción del Proyecto</h2>
          <p>
            Residencial Dimher es un proyecto ubicado en Bonao, diseñado para
            brindar comodidad, elegancia y funcionalidad a sus residentes.
          </p>
        </div>

        <div className="proyecto-caracteristicas">
          <h2>Características</h2>
          <ul>
            <li><Home className="icono" /> Acabados modernos</li>
            <li><Ruler className="icono" /> Excelente distribución</li>
            <li><Building2 className="icono" /> Diseño funcional</li>
            <li><MapPin className="icono" /> Ubicado en Bonao</li>
          </ul>
        </div>
      </div>

      {/* Compartir */}
      <div className="blog1-share">
        <h3>Compartir ahora</h3>
        <div className="blog1-social-icons">
          <a href="https://www.facebook.com/share/1AduQcnyL6/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="facebook"><FaFacebookF /></a>
          <a href="https://www.instagram.com/grupodimher?igsh=MXJrcmt5OXNwamc5Mg==" target="_blank" rel="noopener noreferrer" className="instagram"><FaInstagram /></a>
          <a href="https://api.whatsapp.com/send/?phone=18098327894&text&type=phone_number&app_absent=0&wame_ctl=1" target="_blank" rel="noopener noreferrer" className="whatsapp"><FaWhatsapp /></a>
          <a href="https://www.youtube.com/results?search=query=grupo+dimher" target="_blank" rel="noopener noreferrer" className="youtube"><FaYoutube /></a>
        </div>

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

export default Proyecto5;
