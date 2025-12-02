import React, { useState } from "react";
import "./Proyecto1.css";
import { MapPin, Home, Ruler, Building2 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Proyecto1 = () => {
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

  const imagenes = [
    "https://grupodimher.com/assets/images/property/gallery/682ec1845a6c61747894660.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ec18497b531747894660.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ec184d1a981747894660.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ec1851a39c1747894661.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ec185518601747894661.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ec1858da4a1747894661.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ec185ca8021747894661.jpg",
    "https://grupodimher.com/assets/images/property/gallery/682ec18429d251747894660.jpg",
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

  return (
    <section className="proyecto-detalle">


      {/* NUEVO HEADER TIPO VICTORIANA I */}
<div className="nuevo-header-proyecto">
    <div className="overlay-header"></div>

    <h1 className="header-titulo">Villas el Americano</h1>
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
          <h2>Detalles del Proyecto</h2>
 <p>Nuevo proyecto ecoturístico ¡Villas el Americano! ✨</p>
    <p>Ideal tanto para vivir como a modo de inversión. ¡Tú eliges!</p>

    <p>
      <MapPin className="icono" /> 
      Ubicado en la calle Los Pedregones, por los Tanques, detrás del Samán.
    </p>

    <p>¡Fincas desde 1,527.49 metros en adelante! ⚡️</p>

    <p>• Inicial de RD$ 500,000.00</p>
    <p>• Pagando cuotas mínimas de RD$18,000.00</p>

    <p>🍃 Precio del metro RD$2,000.00 🍃</p>
        </div>

        <div className="proyecto-caracteristicas">
          <h2>Características</h2>
          <ul>
            <li>
              <Home className="icono" /> Apartamentos modernos con acabados de primera
            </li>
            <li>
              <Ruler className="icono" /> Distribuciones cómodas y funcionales
            </li>
            <li>
              <Building2 className="icono" /> Parqueo privado y áreas sociales
            </li>
            <li>
              <MapPin className="icono" /> Ubicado estratégicamente en Bonao
            </li>
          </ul>
        </div>
      </div>
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
        {/* IMÁGENES ESTÁTICAS TIPO MOSAICO */}
<div className="mosaico-galeria">
  {imagenes.map((img, index) => (
    <img key={index} src={img} alt={`foto-${index}`} />
  ))}
</div>


      {/* Compartir ahora */}
      <div className="blog1-share">
        <h3>Compartir ahora</h3>
        <div className="blog1-social-icons">
          <a href="#" className="facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="instagram">
            <FaInstagram />
          </a>
          <a href="#" className="whatsapp">
            <FaWhatsapp />
          </a>
          <a href="#" className="youtube">
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
        {/* Botón Volver */}
      <button className="proyecto-volver" onClick={handleVolver}>
        <FaArrowLeft />
        Volver
      </button>
      </div>
    </section>
    
  );
};

export default Proyecto1;
