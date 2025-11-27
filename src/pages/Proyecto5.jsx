import React, { useState } from "react";
import "./Proyecto5.css";
import { MapPin, Home, Ruler, Building2 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Proyecto5 = () => {
  const [copied, setCopied] = useState(false);
  const [imagenActual, setImagenActual] = useState(0);
  const navigate = useNavigate();

  const currentUrl = window.location.href;

  // Lista de imágenes del proyecto
  const imagenes = [
    
    "https://www.bienesonline.com/republica-dominicana/photos/residencial-dimher-proyecto-de-solares-SOV213601658616160-924.jpg",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSc53NYupKj2sZuLxJ6hUUGwm65EeJsXqwkOneu0PwtewZghz7P",
     "https://d2kflbb1pmooh4.cloudfront.net/eyJidWNrZXQiOiAiYWx0ZXJlc3RhdGUiLCAia2V5IjogInN0YXRpYy9wcm9wZXJ0aWVzLzZPRzczRVhWMjgvQTRBNlRQRzUwRi9CRTJpaG03RGRGLzhkZWEwMTRlLTJmN2ItNDJmNS1iODAzLWUzMTA3OTdjZjc2OC5qZmlmIiwgImVkaXRzIjogeyJyZXNpemUiOiB7IndpZHRoIjogMTI4MCwgImhlaWdodCI6IDk2MCwgImZpdCI6ICJpbnNpZGUifSwgInRvRm9ybWF0IjogImpwZWciLCAianBlZyI6IHsicXVhbGl0eSI6IDcwfX19",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTFBtsmviGEiNkHEtaQ5cGlcVa1eRxVW7ahvSxgqHgAlWy30M_F",
       "https://www.bienesonline.com/republica-dominicana/photos/residencial-dimher-proyecto-de-solares-SOV213601658616192-490.jpg",
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR5frOjvKTNJliQVhR98LiWSCqkOzcinNXIa_jyUFPKdkJRCB9O",
         "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7zQZi3fQubyGmhecxLORYnZNnTDDFVgVqiHlLPM9GcyH8nCgq",
          "https://d2kflbb1pmooh4.cloudfront.net/eyJidWNrZXQiOiAiYWx0ZXJlc3RhdGUiLCAia2V5IjogInN0YXRpYy9wcm9wZXJ0aWVzLzZPRzczRVhWMjgvUkVQS1FXOUlaSS9qRUQ4TTg0VjRTL2EwNDI5M2NjLWUzZWItNGY1MC04MTI2LWNjZjQ3YjI4OTI5ZS5qZmlmIiwgImVkaXRzIjogeyJyZXNpemUiOiB7IndpZHRoIjogMTAyNCwgImhlaWdodCI6IDc2OCwgImZpdCI6ICJpbnNpZGUifSwgInRvRm9ybWF0IjogImpwZWciLCAianBlZyI6IHsicXVhbGl0eSI6IDcwfX19",
      
            "https://drive.usercontent.google.com/download?id=1_m6gOTOkR4ko-8nVYgGIom22Og4SbCmh&export=view&authuser=0",
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
