import React, { useState } from "react";
import "./Proyecto8.css";
import { MapPin, Home, Ruler, Building2 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Proyecto8 = () => {
  const [copied, setCopied] = useState(false);
  const [imagenActual, setImagenActual] = useState(0);
  const navigate = useNavigate();

  const currentUrl = window.location.href;

  const imagenes = [
    "https://grupodimher.com/assets/images/property/gallery/67f8e5d864aed1744365016.jpg",
    "https://grupodimher.com/assets/images/property/gallery/67f8e5d885c501744365016.jpg",
    "https://grupodimher.com/assets/images/property/gallery/67f8e5d8a57221744365016.jpg",
     "https://grupodimher.com/assets/images/property/gallery/67f8e5d8c943f1744365016.jpg",
      "https://grupodimher.com/assets/images/property/gallery/67f8e5d8e8bb81744365016.jpg",
       "https://grupodimher.com/assets/images/property/gallery/67f8e5d913bac1744365017.jpg",
        "https://grupodimher.com/assets/images/property/gallery/67f8e5d92c5d21744365017.jpg",
          "https://grupodimher.com/assets/images/property/gallery/67f8e5d9499731744365017.jpg",
            "https://grupodimher.com/assets/images/property/gallery/67f8e5d963efe1744365017.jpg",
             "https://grupodimher.com/assets/images/property/gallery/67f8e5d98361c1744365017.jpg", 
             "https://grupodimher.com/assets/images/property/gallery/67f8e5d9a730d1744365017.jpg",
               "https://grupodimher.com/assets/images/property/gallery/67f8e5d9cc1ec1744365017.jpg",
                 "https://grupodimher.com/assets/images/property/gallery/67f8e5d9f10011744365017.jpg",
                 "https://grupodimher.com/assets/images/property/gallery/67f8e5da21d8a1744365018.jpg",
                 "https://grupodimher.com/assets/images/property/gallery/67f8e5da436741744365018.jpg",
                 "https://grupodimher.com/assets/images/property/gallery/67f8e5da669a51744365018.jpg",
                  "https://grupodimher.com/assets/images/property/gallery/67f8e5da86b9c1744365018.jpg",
                   "https://grupodimher.com/assets/images/property/gallery/67f8e5daa9eef1744365018.jpg",
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

  const seleccionarImagen = (index) => {
    setImagenActual(index);
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
            <img src={imagenes[imagenActual]} alt={`Vista ${imagenActual + 1}`} className="proyecto-banner-img" />
          </div>
          <button className="flecha derecha" onClick={siguienteImagen}>&gt;</button>
        </div>
<div className="miniaturas">
  {imagenes.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`Miniatura ${index + 1}`}
      className={`miniatura ${imagenActual === index ? "activa" : ""}`}
      onClick={() => seleccionarImagen(index)}
      style={{ border: '2px solid red' }} // solo para destacar
    />
  ))}
</div>


        <div className="proyecto-banner-texto">
          <h1>Vista Sol</h1>
          <p>Nagua</p>
        </div>
      </div>

      {/* Información general */}
      <div className="proyecto-info-container">
        <div className="proyecto-descripcion">
          <h2>Detalles del Proyecto</h2>
          <p>
            Vista Sol ofrece una combinación de elegancia, confort y seguridad en una ubicación privilegiada en Nagua.
            Diseñado para brindar una vida moderna y práctica, este proyecto cuenta con amplios espacios, áreas verdes
            y un ambiente familiar ideal.
          </p>
        </div>

        <div className="proyecto-caracteristicas">
          <h2>Características</h2>
          <ul>
            <li><Home className="icono" /> Apartamentos modernos con acabados de primera</li>
            <li><Ruler className="icono" /> Distribuciones cómodas y funcionales</li>
            <li><Building2 className="icono" /> Parqueo privado y áreas sociales</li>
            <li><MapPin className="icono" /> Ubicado estratégicamente en Nagua</li>
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
          <a href="https://www.youtube.com/results?search_query=grupo+dimher" target="_blank" rel="noopener noreferrer" className="youtube"><FaYoutube /></a>
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

export default Proyecto8;
