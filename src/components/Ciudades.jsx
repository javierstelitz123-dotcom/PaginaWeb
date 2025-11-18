import React from "react";
import { Link } from "react-router-dom";
import "./Ciudades.css";

const Ciudades = () => {
  return (
    <section className="ciudades-section">
      <div className="ciudades-titulos">
  <div className="ciudades-subtitulo-contenedor">
    <p className="ciudades-subtitulo">Ciudades</p>
  </div>
  <h2 className="titulo-principal">Explora por ciudades</h2>
</div>


      <div className="contenedor-ciudades">
        <Link to="/proyectos" className="ciudad-card">
          <div
            className="ciudad-img"
            style={{
              backgroundImage: `url(https://elnacional.com.do/wp-content/uploads/2023/09/ayuntamiento-de-Nagua.jpeg)`,
            }}
          >
            <div className="ciudad-overlay">
            
              <p className="ciudad-propiedades">1 propiedad</p>
            </div>
          </div>
        </Link>

        <Link to="/proyectos" className="ciudad-card">
          <div
            className="ciudad-img"
            style={{
              backgroundImage: `url(https://hotelplatino.com/wp-content/uploads/2025/07/1.-Bonao-en-imagenes.webp)`,
            }}
          >
            <div className="ciudad-overlay">
       
              <p className="ciudad-propiedades">6 propiedades</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Ciudades;
