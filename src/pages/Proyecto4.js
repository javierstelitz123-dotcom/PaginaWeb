import React, { useState } from "react";
import "./Proyecto4.css";
import { MapPin, Home, Ruler, Building2 } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Proyecto4 = () => {
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.href;
  const navigate = useNavigate();

  // Imagen principal del Proyecto 4
  const imagenPrincipal =
    "https://novaris.grupodimher.com/documentos/empresas/877/pr8/FEP76RK2EQ6X2A8AQ4YRFW8F87537XQDY6P3T0P6NS121EVP8R6TLJZQML6T.jpg";

  // Carrusel de imágenes
  const imagenes = [
    imagenPrincipal,
    "https://tse2.mm.bing.net/th/id/OIP._DJzIcx2O5G7e9XqTiBkbwHaHa?pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3",
    "https://tse2.mm.bing.net/th/id/OIP.k7oYVgnpxVejGTRNrxAYFwHaEK?pid=ImgDet&w=474&h=266&rs=1&o=7&rm=3",
    "https://hnrealtygrouprd.com/wp-content/uploads/2022/03/A_1-Photo.jpg",
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

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVolver = () => navigate(-1);

  return (
    <section className="proyecto-detalle">
      {/* Botón Volver */}
      <button className="proyecto-volver" onClick={handleVolver}>
        <FaArrowLeft />
        Volver
      </button>

      {/* Banner + Slider */}
      <div className="proyecto-banner">
        <div className="proyecto-badge">Detalles de propiedad</div>

        <div className="galeria-container">
          {/* Flecha izquierda */}
          <button className="flecha izquierda" onClick={() => moverImagen(-1)}>
            <FaChevronLeft />
          </button>

          {/* Imagen principal */}
          <div className="imagen-principal">
            <img
              src={imagenes[imagenActual]}
              alt="Residencial Doña Amalia"
              className="proyecto-banner-img"
            />
          </div>

          {/* Flecha derecha */}
          <button className="flecha derecha" onClick={() => moverImagen(1)}>
            <FaChevronRight />
          </button>

          {/* Miniaturas eliminadas */}
        </div>

        {/* TÍTULO SOLO EN LA PRIMERA IMAGEN */}
        {imagenActual === 0 && (
          <div className="proyecto-banner-texto">
            <h1>Residencial Doña Amalia</h1>
            <p>Bonao</p>
          </div>
        )}
      </div>

      {/* Información */}
      <div className="proyecto-info-container">
        <div className="proyecto-descripcion">
          <h2>Detalles del Proyecto</h2>
          <p>
            El Residencial Doña Amalia ofrece una combinación de elegancia,
            confort y seguridad en una ubicación privilegiada en Bonao. Diseñado
            para brindar una vida moderna y práctica, este proyecto cuenta con
            amplios espacios, áreas verdes y un ambiente familiar ideal.
          </p>
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
            href="https://api.whatsapp.com/send/?phone=18098327894"
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

export default Proyecto4;
