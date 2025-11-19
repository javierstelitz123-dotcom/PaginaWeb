import React, { useState } from "react";
import "./Nagua.css";
import { FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";

const Nagua = () => {
  const navigate = useNavigate();
  const [filtro, setFiltro] = useState(""); // input del usuario
  const [proyectosFiltrados, setProyectosFiltrados] = useState([]);
const [ubicacionFiltro, setUbicacionFiltro] = useState("todas");

  // Datos de proyectos disponibles
  const proyectos = [
    {
      nombre: "Vista Sol",
      ubicacion: "Nagua",
      imagen: "https://grupodimher.com/assets/images/property/thumb/67f8e5d824aca1744365016.jpg",
      rutaDetalle: "/proyecto8",
    },
    {
      nombre: "Residencial Dimher",
      ubicacion: "Bonao",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP4fPotyHtJFVHh20SUub_rIghwmwwL5q7yzgBxQ-IkGnddC9B",
      rutaDetalle: "/residencial-dimher",
        
    },
    
    {
      nombre: "Villas el Americano",
      ubicacion: "Bonao",
      imagen: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSEKQ3f6_P0lwvHskCszJCTijeyFRcFgp82KZb-HMvMLwVnimkD",
      rutaDetalle: "/villas-americano",
    },
    {
      nombre: "Residencial Doña Amalia 2",
      ubicacion: "Bonao",
      imagen: "https://grupodimher.com/assets/images/property/thumb/682ebf83c161b1747894147.jpg",
      rutaDetalle: "/residencial-dona-amalia-2",
    },
    {
      nombre: "Residencial Don Soto",
      ubicacion: "Bonao",
      imagen: "https://grupodimher.com/assets/images/property/thumb/682eba0839c291747892744.jpg",
      rutaDetalle: "/residencial-don-soto",
    },
    {
      nombre: "Residencial Don Bumba",
      ubicacion: "Bonao",
      imagen: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSEKQ3f6_P0lwvHskCszJCTijeyFRcFgp82KZb-HMvMLwVnimkD",
      rutaDetalle: "/residencial-don-bumba",
    },
    {
      nombre: "Residencial Doña Amalia",
      ubicacion: "Bonao",
      imagen: "https://novaris.grupodimher.com/documentos/empresas/877/pr8/FEP76RK2EQ6X2A8AQ4YRFW8F87537XQDY6P3T0P6NS121EVP8R6TLJZQML6T.jpg",
      rutaDetalle: "/residencial-dona-amalia",
    },
      {
      nombre: "Residencial los Alamos",
      ubicacion: "Bonao",
      imagen: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSEKQ3f6_P0lwvHskCszJCTijeyFRcFgp82KZb-HMvMLwVnimkD",
      rutaDetalle: "/residencial-los-alamos",
    },
  ];

  // Función de filtrado mejorada
  const filtrarProyectos = () => {
    const filtrados = proyectos.filter((proyecto) => {
      const coincideNombre = proyecto.nombre
        .toLowerCase()
        .includes(filtro.toLowerCase());

      const coincideUbicacion =
        ubicacionFiltro === "todas" ||
        proyecto.ubicacion.toLowerCase() === ubicacionFiltro.toLowerCase();

      return coincideNombre && coincideUbicacion;
    });
    setProyectosFiltrados(filtrados);
  };

  // Volver a inicio
  const volverInicio = () => {
    navigate("/");
  };

  // Ir a detalle de proyecto
  const irADetalle = (ruta) => {
    navigate(ruta);
  };

  // Decide qué mostrar: filtrados o por defecto Vista Sol
  const mostrarProyectos =
    proyectosFiltrados.length > 0 ? proyectosFiltrados : [proyectos[0]];

  return (
    <>
      <section className="nagua-section">
        <div className="nagua-overlay">
          <h1 className="nagua-titulo">Nagua</h1>
        </div>
      </section>

      <div className="nagua-contenido">

        <div className="nagua-busqueda-card">
          <h3 className="nagua-busqueda-title">Buscar propiedad</h3>

          <input
            type="text"
            className="nagua-input"
            placeholder="¿Qué estás buscando?"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />

        <select
  className="nagua-select"
  value={ubicacionFiltro}
  onChange={(e) => setUbicacionFiltro(e.target.value)}
>
  <option value="todas">Todas las ubicaciones</option>
  <option value="bonao">Bonao</option>
  <option value="nagua">Nagua</option>
</select>

          <button className="nagua-filtrar-btn" onClick={filtrarProyectos}>
            <FaMapMarkerAlt className="nagua-filtrar-icon" />
            Filtrar Ahora
          </button>
        </div>

        {/* Mostrar tarjetas */}
        <div className="nagua-tarjetas-wrapper">
          {mostrarProyectos.map((proyecto, index) => (
            <div className="nagua-card" key={index}>
              <img
                className="nagua-card-img"
                src={proyecto.imagen}
                alt={proyecto.nombre}
              />

              <div className="nagua-card-body">
                <h3 className="nagua-card-title">{proyecto.nombre}</h3>

                <div className="nagua-card-location">
                  <FaMapMarkerAlt className="location-icon" />
                  <span>{proyecto.ubicacion}</span>
                </div>

                <div className="nagua-card-footer">
                  
                  <button
                    className="nagua-detalles-btn"
                    onClick={() => irADetalle(proyecto.rutaDetalle)}
                  >
                    Detalles
                  </button>
                </div>
              </div>
     
            </div>
          ))}
        </div>

      </div>

      <button className="boton-volver" onClick={volverInicio}>
        <FaArrowLeft />
        Volver
      </button>
    </>
  );
};

export default Nagua;
