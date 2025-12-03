import React, { useState } from "react";
import "./Proyecto2.css";
import { MapPin, Home, Ruler, Building2 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Proyecto2 = () => {
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.href;
  const navigate = useNavigate();

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const imagenes = [
    "https://grupodimher.com/assets/images/property/gallery/682ebf842a8b21747894148.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ebf84653881747894148.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ebf84a7eca1747894148.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ebf84e60091747894148.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ebf852b8771747894149.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ebf85610be1747894149.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ebf859d62c1747894149.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ebf85e1cd11747894149.jpg",
  ];

  const [imagenActual, setImagenActual] = useState(0);

  const moverImagen = (direccion) => {
    setImagenActual((prev) => {
      const nueva = prev + direccion;
      if (nueva < 0) return imagenes.length - 1;
      if (nueva >= imagenes.length) return 0;
      return nueva;
    });
  };

  const handleVolver = () => {
    navigate(-1);
  };

  return (
  <section className="proyecto-detalle">

    {/* HEADER tipo Proyecto 1 */}
    <div className="nuevo-header-proyecto">
      <div className="overlay-header"></div>

      <h1 className="header-titulo">Residencial Doña Amalia 2</h1>
      <p className="header-ubicacion">Bonao</p>

      <button 
        className="header-btn"
        onClick={() => navigate("/contacto")}
      >
        Estoy interesado
      </button>
    </div>

    {/* Información del proyecto */}
    <div className="proyecto-info-container">
      <div className="proyecto-descripcion">
        <h2>Descripción de Propiedad</h2>
        <p>
          Este hermoso residencial combina la elegancia moderna con la
          tranquilidad de la zona.
        </p>
        <p>
          Ubicado en <span className="ubicacion-inline">📍 Bonao</span>.
        </p>
      </div>

      <div className="proyecto-caracteristicas">
        <h2>Características</h2>
        <ul>
          <li><Home className="icono" /> Residencial moderno</li>
          <li><Ruler className="icono" /> Espacios amplios</li>
          <li><Building2 className="icono" /> Zona tranquila</li>
          <li><MapPin className="icono" /> Ubicado en Bonao</li>
        </ul>
      </div>
    </div>

    {/* Carrusel (misma posición que Proyecto 1) */}
    <div className="galeria-container">
      <button className="flecha izquierda" onClick={() => moverImagen(-1)}>‹</button>

      <div className="imagen-principal">
        <img
          src={imagenes[imagenActual]}
          alt="Imagen del proyecto"
          className="proyecto-banner-img"
        />
      </div>

      <button className="flecha derecha" onClick={() => moverImagen(1)}>›</button>
    </div>

    {/* Mosaico abajo (igual Proyecto 1) */}
    <div className="mosaico-galeria">
      {imagenes.map((img, index) => (
        <img key={index} src={img} alt={`foto-${index}`} />
      ))}
    </div>

    {/* Compartir */}
    <div className="blog1-share">
      <h3>Compartir ahora</h3>

      <div className="blog1-social-icons">
        <a href="#" className="facebook"><FaFacebookF /></a>
        <a href="#" className="instagram"><FaInstagram /></a>
        <a href="#" className="whatsapp"><FaWhatsapp /></a>
        <a href="#" className="youtube"><FaYoutube /></a>
      </div>

      <div className="blog1-copy-link-wrapper">
        <input type="text" value={currentUrl} readOnly className="blog1-copy-input" />
        <button className="blog1-copy-button" onClick={handleCopy}>
          {copied ? "¡Copiado!" : "Copiar"}
        </button>
      </div>

      <button className="proyecto-volver" onClick={handleVolver}>
        <FaArrowLeft /> Volver
      </button>
    </div>

  </section>

  );
};

export default Proyecto2;
