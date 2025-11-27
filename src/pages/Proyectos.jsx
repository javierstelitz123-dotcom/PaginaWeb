import React from "react";
import "./Proyectos.css";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";




const proyecto1 =
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSEKQ3f6_P0lwvHskCszJCTijeyFRcFgp82KZb-HMvMLwVnimkD";

const proyecto2 =
  "https://grupodimher.com/assets/images/property/thumb/682ebf83c161b1747894147.jpg";

const proyecto3 =
  "https://grupodimher.com/assets/images/property/thumb/682eba0839c291747892744.jpg";

const proyecto4 =
  "https://novaris.grupodimher.com/documentos/empresas/877/pr8/FEP76RK2EQ6X2A8AQ4YRFW8F87537XQDY6P3T0P6NS121EVP8R6TLJZQML6T.jpg";

const proyecto5 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP4fPotyHtJFVHh20SUub_rIghwmwwL5q7yzgBxQ-IkGnddC9B";

const proyecto6 =
  "data:image/jpeg;base64,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";

  const proyecto7 =
"data:image/jpeg;base64,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";

const proyecto8 =
  "https://grupodimher.com/assets/images/property/thumb/67f8e5d824aca1744365016.jpg";

const Proyectos = () => {
  const navigate = useNavigate();

  return (
    <section className="proyectos-section">
      <div className="background-shapes"></div>

      <div className="proyectos-content">
        <div className="imagen-container">
         
          <div className="overlay-text"><strong>Proyectos</strong></div>
        </div>

        <div className="proyectos-grid">
          {/* Proyecto 1 */}
          <div className="proyecto-card">
            <img src={proyecto1} alt="Villas el Americano" className="proyecto-img" />
            <div className="proyecto-info">
              <h3 className="proyecto-nombre">Villas el Americano</h3>
              <div className="proyecto-ubicacion">
                <MapPin className="icono-ubicacion" />
                <span>Bonao</span>
              </div>
              <button className="btn-detalles" onClick={() => navigate("/proyecto1")}>
                Detalles
              </button>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="proyecto-card">
            <img src={proyecto2} alt="Residencial Doña Amalia 2" className="proyecto-img" />
            <div className="proyecto-info">
              <h3 className="proyecto-nombre">Residencial Doña Amalia 2</h3>
              <div className="proyecto-ubicacion">
                <MapPin className="icono-ubicacion" />
                <span>Bonao</span>
              </div>
              <button className="btn-detalles" onClick={() => navigate("/proyecto2")}>
                Detalles
              </button>
            </div>
          </div>

          {/* Proyecto 3 */}
          <div className="proyecto-card">
            <img src={proyecto3} alt="Residencial Don Soto" className="proyecto-img" />
            <div className="proyecto-info">
              <h3 className="proyecto-nombre">Residencial Don Soto</h3>
              <div className="proyecto-ubicacion">
                <MapPin className="icono-ubicacion" />
                <span>Bonao</span>
              </div>
              <button className="btn-detalles" onClick={() => navigate("/proyecto3")}>
                Detalles
              </button>
            </div>
          </div>

          {/* Proyecto 4 */}
          <div className="proyecto-card">
            <img src={proyecto4} alt="Residencial Doña Amalia" className="proyecto-img" />
            <div className="proyecto-info">
              <h3 className="proyecto-nombre">Residencial Doña Amalia</h3>
              <div className="proyecto-ubicacion">
                <MapPin className="icono-ubicacion" />
                <span>Bonao</span>
              </div>
              <button className="btn-detalles" onClick={() => navigate("/proyecto4")}>
                Detalles
              </button>
            </div>
          </div>

          {/* ✅ Proyecto 5 */}
          <div className="proyecto-card">
            <img src={proyecto5} alt="Residencial Dimher" className="proyecto-img" />
            <div className="proyecto-info">
              <h3 className="proyecto-nombre">Residencial Dimher</h3>
              <div className="proyecto-ubicacion">
                <MapPin className="icono-ubicacion" />
                <span>Bonao</span>
              </div>
              <button className="btn-detalles" onClick={() => navigate("/proyecto5")}>
                Detalles
              </button>
            </div>
          </div>

          {/* ✅ Proyecto 6 */}
          <div className="proyecto-card">
            <img src={proyecto6} alt="Residencial Don Bumba" className="proyecto-img" />
            <div className="proyecto-info">
              <h3 className="proyecto-nombre">Residencial Don Bumba</h3>
              <div className="proyecto-ubicacion">
                <MapPin className="icono-ubicacion" />
                <span>Bonao</span>
              </div>
              <button className="btn-detalles" onClick={() => navigate("/proyecto6")}>
                Detalles
              </button>
            </div>
          </div>
{/* ✅ Proyecto 7 */}
          <div className="proyecto-card">
            <img src={proyecto7} alt="Residencial los Alamos" className="proyecto-img" />
            <div className="proyecto-info">
              <h3 className="proyecto-nombre">Residencial los Alamos</h3>
              <div className="proyecto-ubicacion">
                <MapPin className="icono-ubicacion" />
                <span>Bonao</span>
              </div>
              <button className="btn-detalles" onClick={() => navigate("/proyecto7")}>
                Detalles
              </button>
            </div>
          </div>
          {/* ✅ Proyecto 8 */}
          <div className="proyecto-card">
            <img src={proyecto8} alt="Residencial los Alamos" className="proyecto-img" />
            <div className="proyecto-info">
              <h3 className="proyecto-nombre">Vista Sol</h3>
              <div className="proyecto-ubicacion">
                <MapPin className="icono-ubicacion" />
                <span>Nagua</span>
              </div>
              <button className="btn-detalles" onClick={() => navigate("/proyecto8")}>
                Detalles
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
