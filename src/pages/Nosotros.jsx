import React from "react";
import "./Nosotros.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faEye, faHandshake, faBuilding, faUsers, faHome } from "@fortawesome/free-solid-svg-icons";

function Nosotros() {
  return (
    <div className="nosotros-page">
      {/* Banner */}
      <section className="banner-nosotros">
  <div className="overlay"></div>
  <h2 className="empresa-nombre"></h2> {/* Nombre de la empresa agregado */}
  <h1>
    Conoce a <span className="grupo-azul">Grupo</span> <span>Dimher</span>
  </h1>
  <p>Tu aliado confiable en el mundo inmobiliario.</p>
</section>


      {/* Descripción */}
      <section className="descripcion">
        <div className="descripcion-bg-animation">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="container">
          <h2>¿Quiénes Somos?</h2>
          <p>
            En <strong>Grupo Dimher</strong>, somos una empresa inmobiliaria líder en el mercado,
            dedicada a ofrecer soluciones integrales en la compra, venta, alquiler y desarrollo de proyectos.
            Nos caracteriza la transparencia, el compromiso y la excelencia en cada uno de nuestros servicios.
          </p>
          <p>
            Nuestro objetivo es convertir los sueños de nuestros clientes en realidades, creando espacios
            que inspiren confianza y bienestar. Contamos con un equipo profesional que trabaja con pasión
            para superar las expectativas en cada proyecto.
          </p>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="mvv-section">
        <div className="mvv-container">
          <div className="mvv-card">
            <FontAwesomeIcon icon={faBullseye} className="mvv-icon" />
            <h3>Misión</h3>
            <p>
              Proporcionar servicios inmobiliarios de alta calidad, garantizando confianza,
              innovación y resultados que mejoren la vida de nuestros clientes.
            </p>
          </div>
          <div className="mvv-card">
            <FontAwesomeIcon icon={faEye} className="mvv-icon" />
            <h3>Visión</h3>
            <p>
              Ser la empresa inmobiliaria de referencia a nivel nacional, reconocida por su
              innovación, profesionalismo y compromiso social.
            </p>
          </div>
          <div className="mvv-card">
            <FontAwesomeIcon icon={faHandshake} className="mvv-icon" />
            <h3>Valores</h3>
            <p>
              Integridad, honestidad, excelencia, responsabilidad y pasión por servir.
            </p>
          </div>
        </div>
      </section>

      {/* Logros / Estadísticas */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <FontAwesomeIcon icon={faBuilding} className="stat-icon" />
            <h3>+15</h3>
            <p>Proyectos Completados</p>
          </div>
          <div className="stat-card">
            <FontAwesomeIcon icon={faUsers} className="stat-icon" />
            <h3>+3K</h3>
            <p>Clientes Satisfechos</p>
          </div>
          <div className="stat-card">
            <FontAwesomeIcon icon={faHome} className="stat-icon" />
            <h3>+5</h3>
            <p>Años de Experiencia</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nosotros;
