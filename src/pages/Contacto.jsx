import React, { useState, useEffect } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./Contacto.css";
import emailjs from "emailjs-com";
import { useLocation } from "react-router-dom";  // ✅ IMPORTANTE

const Contacto = () => {
  const location = useLocation(); // ✅ Detecta si viene con #mapa

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ID",
        "template_ID",
        {
          nombre: formData.nombre,
          correo: formData.correo,
          asunto: formData.asunto,
          mensaje: formData.mensaje,
          to_email: "soporte@grupodimher.com",
        },
        "public_key"
      )
      .then(
        () => {
          alert("✅ Mensaje enviado correctamente");
          setFormData({ nombre: "", correo: "", asunto: "", mensaje: "" });
        },
        () => {
          alert("❌ Error al enviar el mensaje, inténtalo nuevamente");
        }
      );
  };

  // ✅ Scroll inteligente: si viene con #mapa → baja al mapa
  useEffect(() => {
    if (location.hash === "#mapa") {
      setTimeout(() => {
        const mapa = document.getElementById("mapa");
        if (mapa) mapa.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return;
    }

    // Scroll normal cuando NO viene del footer
    const section = document.getElementById("contacto");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      {/* ===== SECCIÓN DE CONTACTO PRINCIPAL ===== */}
      <section className="contacto-section" id="contacto">

        <div className="contacto-overlay">
          <h1 className="titulo-contacto">Contáctanos</h1>

          <div className="info-form-container">
            {/* ===== INFORMACIÓN DE CONTACTO ===== */}
            <div className="info-contacto">
              <div className="info-item">
                <FontAwesomeIcon 
                  icon={faPhoneAlt} 
                  className="icono" 
                  style={{ fontSize: "60px" }} 
                />
                <h3>Teléfono</h3>
                <p>+1 829-345-6741</p>
              </div>

              <div className="info-item">
                <FontAwesomeIcon 
                  icon={faEnvelope} 
                  className="icono" 
                  style={{ fontSize: "60px" }} 
                />
                <h3>Correo Electrónico</h3>
                <p>Contacto@grupodimher.com</p>
              </div>

              <div className="info-item">
                <FontAwesomeIcon 
                  icon={faMapMarkerAlt} 
                  className="icono" 
                  style={{ fontSize: "60px" }} 
                />
                <h3>Ubicación</h3>
                <p>16 De Agosto, Bonao 42000</p>
              </div>
            </div>

            {/* ===== FORMULARIO ===== */}
            <form className="form-contacto" onSubmit={handleSubmit}>
              <h2 className="subtitulo-form">¿Tienes alguna pregunta?</h2>

              <div className="campo">
                <label>Nombre Completo</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Escribe tu nombre completo"
                  required
                />
              </div>

              <div className="campo">
                <label>Correo Electrónico</label>
                <input
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="ejemplo@correo.com"
                  required
                />
              </div>

              <div className="campo">
                <label>Asunto</label>
                <input
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  placeholder="Motivo del mensaje"
                  required
                />
              </div>

              <div className="campo">
                <label>Mensaje</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-enviar">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== SECCIÓN DEL MAPA ===== */}
      <section className="mapa-fondo" id="mapa">
        <h2 className="titulo-mapa">Nuestra Ubicación</h2>

        <div className="mapa-wrapper">
          <iframe
            title="Ubicación de Grupo Dimher"
            src="https://www.google.com/maps?q=18.944135665893555,-70.4107894897461&z=17&hl=es&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contacto;
