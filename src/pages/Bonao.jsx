import React, { useState } from "react";
import { FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Bonao.css";

const Bonao = () => {
  const navigate = useNavigate();
  const [filtro, setFiltro] = useState(""); 
  const [proyectosFiltrados, setProyectosFiltrados] = useState([]);
  const [ubicacionFiltro, setUbicacionFiltro] = useState("todas");

  // Datos de proyectos de Bonao + Nagua
  const proyectos = [
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
    // Proyecto de Nagua agregado
    {
      nombre: "Vista Sol",
      ubicacion: "Nagua",
      imagen: "https://grupodimher.com/assets/images/property/thumb/67f8e5d824aca1744365016.jpg",
      rutaDetalle: "/proyecto8",
    },
  ];

  // Filtrado
  const filtrarProyectos = () => {
    const filtrados = proyectos.filter((proyecto) => {
      const coincideNombre = proyecto.nombre.toLowerCase().includes(filtro.toLowerCase());
      const coincideUbicacion =
        ubicacionFiltro === "todas" ||
        proyecto.ubicacion.toLowerCase() === ubicacionFiltro.toLowerCase();
      return coincideNombre && coincideUbicacion;
    });
    setProyectosFiltrados(filtrados);
  };

  const volverInicio = () => {
    navigate("/");
  };

  const irADetalle = (ruta) => {
    navigate(ruta);
  };

  const mostrarProyectos = proyectosFiltrados.length > 0 ? proyectosFiltrados : proyectos;

  return (
    <>
      <section className="bonao-section">
        <div className="bonao-overlay">
          <h1 className="bonao-titulo">Bonao</h1>
        </div>
      </section>

      <div className="bonao-contenido">
        <div className="bonao-busqueda-card">
          <h3 className="bonao-busqueda-title">Buscar propiedad</h3>

          <input
            type="text"
            className="bonao-input"
            placeholder="¿Qué estás buscando?"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />

          <select
            className="bonao-select"
            value={ubicacionFiltro}
            onChange={(e) => setUbicacionFiltro(e.target.value)}
          >
            <option value="todas">Todas las ubicaciones</option>
            <option value="bonao">Bonao</option>
            <option value="nagua">Nagua</option> {/* Nueva opción */}
          </select>

          <button className="bonao-filtrar-btn" onClick={filtrarProyectos}>
            <FaMapMarkerAlt className="bonao-filtrar-icon" />
            Filtrar Ahora
          </button>
        </div>

        <div className="bonao-tarjetas-wrapper">
          {mostrarProyectos.map((proyecto, index) => (
            <div className="bonao-card" key={index}>
              <img
                className="bonao-card-img"
                src={proyecto.imagen}
                alt={proyecto.nombre}
              />
              <div className="bonao-card-body">
                <h3 className="bonao-card-title">{proyecto.nombre}</h3>
                <div className="bonao-card-location">
                  <FaMapMarkerAlt className="location-icon" />
                  <span>{proyecto.ubicacion}</span>
                </div>
                <div className="bonao-card-footer">
                  <button
                    className="bonao-detalles-btn"
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

export default Bonao;
