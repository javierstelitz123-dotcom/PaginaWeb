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
  { title: "Airlinesco", tagline: "tagline here" },
  { title: "GOURMET", tagline: "SLOGAN HERE" },
  { title: "DIGITAL", tagline: "your tagline" },
  { title: "BrainCell", tagline: "tagline here" },
  { title: "Abstract", tagline: "a tagline goes here" },
  { title: "Unisaico", tagline: "your Business tagline goes here" },
  { title: "Welling", tagline: "get your shape" },
  { title: "Desing Element", tagline: "standard dummy text" }
];

const fontStyles = [
  { title: "font-serif", tagline: "font-sans" },
  { title: "font-bold tracking-wider", tagline: "font-light italic" },
  { title: "font-mono font-bold", tagline: "font-sans tracking-wide" },
  { title: "font-sans font-semibold", tagline: "font-serif italic" },
  { title: "font-serif italic", tagline: "font-sans font-light" },
  { title: "font-sans font-extrabold", tagline: "font-mono text-sm" },
  { title: "font-serif font-medium tracking-tight", tagline: "font-sans font-extralight" },
  { title: "font-mono", tagline: "font-serif font-light tracking-wide" }
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

{/* Logos de texto animados estilo Wordmarks */}
<div className="confianza-logos">
  <div className="logos-track">
    {logos.map((logo, index) => (
      <div key={index} className="logo-item">
        <div className="logo-title-wrapper">
          {(() => {
            // renderTitle inline
            if (logo.titleCustom === true && logo.title === "BrainCell") {
              return (
                <h2 className={`text-gray-600 ${logo.titleStyle}`}>
                  <span className="font-bold">Brain</span>
                  <span className="font-extralight italic">Cell</span>
                </h2>
              );
            }

            if (logo.titleCustom === "geometric" && logo.title === "Unisaico") {
              return (
                <h2 className={`text-gray-600 ${logo.titleStyle}`}>
                  <span className="inline-block transform -skew-x-6">Uni</span>
                  <span className="inline-block">saico</span>
                </h2>
              );
            }

            if (logo.titleCustom === "wave" && logo.title === "Welling") {
              return (
                <h2 className={`text-gray-600 ${logo.titleStyle}`}>
                  {logo.title.split("").map((char, i) => (
                    <span
                      key={i}
                      className="inline-block"
                      style={{
                        transform: `translateY(${Math.sin(i * 0.8) * 8}px)`,
                        transition: "transform 0.3s ease",
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </h2>
              );
            }

            return <h2 className={`text-gray-600 ${logo.titleStyle}`}>{logo.title}</h2>;
          })()}
        </div>
        <p className={`logo-tagline ${logo.taglineStyle}`}>{logo.tagline}</p>
      </div>
    ))}

    {/* Duplicar para scroll infinito */}
    {logos.map((logo, index) => (
      <div key={`dup-${index}`} className="logo-item">
        <div className="logo-title-wrapper">
          {(() => {
            // renderTitle inline
            if (logo.titleCustom === true && logo.title === "BrainCell") {
              return (
                <h2 className={`text-gray-600 ${logo.titleStyle}`}>
                  <span className="font-bold">Brain</span>
                  <span className="font-extralight italic">Cell</span>
                </h2>
              );
            }

            if (logo.titleCustom === "geometric" && logo.title === "Unisaico") {
              return (
                <h2 className={`text-gray-600 ${logo.titleStyle}`}>
                  <span className="inline-block transform -skew-x-6">Uni</span>
                  <span className="inline-block">saico</span>
                </h2>
              );
            }

            if (logo.titleCustom === "wave" && logo.title === "Welling") {
              return (
                <h2 className={`text-gray-600 ${logo.titleStyle}`}>
                  {logo.title.split("").map((char, i) => (
                    <span
                      key={i}
                      className="inline-block"
                      style={{
                        transform: `translateY(${Math.sin(i * 0.8) * 8}px)`,
                        transition: "transform 0.3s ease",
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </h2>
              );
            }

            return <h2 className={`text-gray-600 ${logo.titleStyle}`}>{logo.title}</h2>;
          })()}
        </div>
        <p className={`logo-tagline ${logo.taglineStyle}`}>{logo.tagline}</p>
      </div>
    ))}
  </div>
</div>




    </section>
  );
};

export default Confianza;
