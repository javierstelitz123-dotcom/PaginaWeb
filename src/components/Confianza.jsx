import React, { useState, useEffect } from "react";
import "./Confianza.css";

const testimonios = [
  {
    mensaje: "Resultados exepcionales y comunicación transparente.",
    nombre: "Rafael Salazar",
    lugar: "Santo Domingo",
  },
  {
    mensaje: "Cinco estrellas Confiable y con exelentes resultados.",
    nombre: "Emily Huhges",
    lugar: "New York",
  },
  {
    mensaje: "Plataforma profesional y comprometida. Altamente recomendado.",
    nombre: "Raquel Gonzales",
    lugar: "Bonao",
  },
  {
    mensaje: "Servicio exepcional Gran apoyo en cada paso..",
    nombre: "Sarah Abreu",
    lugar: "Bonao",
  },
];

const logos = [
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    nombre: "Villas el Americano",
  },
  {
    img: "https://grupodimher.com/assets/images/property/thumb/682ebf83c161b1747894147.jpg",
    nombre: "Residencial Doña Amalia 2",
  },
  {
    img: "https://grupodimher.com/assets/images/property/thumb/682eba0839c291747892744.jpg",
    nombre: "Residencial Don Soto",
  },
   {
    img: "https://novaris.grupodimher.com/documentos/empresas/877/pr8/FEP76RK2EQ6X2A8AQ4YRFW8F87537XQDY6P3T0P6NS121EVP8R6TLJZQML6T.jpg",
    nombre: "Residencial Doña Amalia",
  },
     {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP4fPotyHtJFVHh20SUub_rIghwmwwL5q7yzgBxQ-IkGnddC9B",
    nombre: "Residencial Dimher",
  },
     {
    img: "https://grupodimher.com/assets/images/property/thumb/682eb642f0e451747891778.jpeg",
    nombre: "Residencial Don Bumba",
  },
      {
    img: "https://grupodimher.com/assets/images/property/thumb/682ead767787a1747889526.jpg",
    nombre: "Residencial Los Álamos ",
  },
       {
    img: "https://grupodimher.com/assets/images/property/thumb/67f8e5d824aca1744365016.jpg",
    nombre: "Vista Sol",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNweLskNllJhyjPmOiVkQq4Dzb9Eu04F6iig&s",
    nombre: "Residencial Jade",
  },
];

const Confianza = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonios.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="confianza-section">
      <div className="confianza-fila-principal">

        {/* Lado izquierdo */}
        <div className="confianza-textos">
          <p className="confianza-etiqueta">Inversores confían en nosotros</p>
          <h2 className="confianza-titulo">
            Más de 1000 clientes <br />
            <span className="confianza-subtitulo">confían</span>
          </h2>

          <div className="confianza-puntos">
            {testimonios.map((_, i) => (
              <span
                key={i}
                className={i === index ? "punto activo" : "punto"}
                onClick={() => setIndex(i)}
              ></span>
            ))}
          </div>
        </div>

        {/* Lado derecho */}
        <div className="confianza-testimonio">
          <p className="confianza-mensaje">“{testimonios[index].mensaje}”</p>
          <p className="confianza-info">
            {testimonios[index].nombre} — {testimonios[index].lugar}
          </p>
        </div>
      </div>

      {/* Logos */}
      <div className="confianza-logos">
        <div className="logos-track">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo.img} alt={logo.nombre} className="logo-imagen" />
              <p className="logo-nombre">{logo.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Confianza;
