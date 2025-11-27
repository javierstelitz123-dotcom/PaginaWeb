import React, { useState, useEffect } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./Contacto.css";
import emailjs from "emailjs-com";
import { useLocation } from "react-router-dom";

const Contacto = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        "service_sd1n69h",        // ⚠️ Reemplaza con tu Service ID de EmailJS
        "template_rxpva3n",       // ⚠️ Reemplaza con tu Template ID de EmailJS
        {
          name: formData.nombre,     // Cambiado de from_name a name
          email: formData.correo,    // Cambiado de from_email a email
          subject: formData.asunto,
          message: formData.mensaje,
        },
        "VsCYH7sqq0ZCeJhK-"         // ⚠️ Reemplaza con tu Public Key de EmailJS
      );

      setSubmitStatus('success');
      setFormData({ nombre: "", correo: "", asunto: "", mensaje: "" });
      
      // Ocultar mensaje después de 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Error al enviar:", error);
      setSubmitStatus('error');
      
      // Ocultar mensaje después de 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (location.hash === "#mapa") {
      setTimeout(() => {
        const mapa = document.getElementById("mapa");
        if (mapa) mapa.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return;
    }

    const section = document.getElementById("contacto");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <section className="contacto-section" id="contacto">
        <div className="contacto-overlay">
          <h1 className="titulo-contacto">Contáctanos</h1>

          <div className="info-form-container">
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

            <form className="form-contacto" onSubmit={handleSubmit}>
              <h2 className="subtitulo-form">¿Tienes alguna pregunta?</h2>

              {/* Mensajes de estado */}
              {submitStatus === 'success' && (
                <div style={{
                  padding: "12px",
                  marginBottom: "15px",
                  backgroundColor: "#d4edda",
                  color: "#155724",
                  border: "1px solid #c3e6cb",
                  borderRadius: "5px",
                  textAlign: "center"
                }}>
                  ✅ Mensaje enviado correctamente
                </div>
              )}

              {submitStatus === 'error' && (
                <div style={{
                  padding: "12px",
                  marginBottom: "15px",
                  backgroundColor: "#f8d7da",
                  color: "#721c24",
                  border: "1px solid #f5c6cb",
                  borderRadius: "5px",
                  textAlign: "center"
                }}>
                  ❌ Error al enviar el mensaje, inténtalo nuevamente
                </div>
              )}

              <div className="campo">
                <label>Nombre Completo</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Escribe tu nombre completo"
                  required
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn-enviar"
                disabled={isSubmitting}
                style={{
                  opacity: isSubmitting ? 0.6 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </section>

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