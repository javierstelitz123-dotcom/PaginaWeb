import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

// 🔹 Componentes globales
import Header from "./components/Header";
import FooterProfesional from "./components/FooterProfesional";

// 🔹 Páginas
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import Nosotros from "./pages/Nosotros";
import Proyectos from "./pages/Proyectos";
import FAQ from "./pages/FAQ";
import Proyecto1 from "./pages/Proyecto1";
import Proyecto2 from "./pages/Proyecto2";
import Proyecto3 from "./pages/Proyecto3";
import Proyecto4 from './pages/Proyecto4';
import Proyecto5 from "./pages/Proyecto5"; // Residencial Dimher
import Proyecto6 from "./pages/Proyecto6";
import Proyecto7 from "./pages/Proyecto7";
import Proyecto8 from "./pages/Proyecto8";
import Blog1 from "./pages/Blog1";

import Nagua from "./pages/Nagua";
import Bonao from "./pages/Bonao";
import Ciudades from "./pages/Ciudades";

import ScrollToTopButton from "./components/ScrollToTopButton";

function AppContent() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <>
      {/* Encabezado visible en todas las páginas */}
      <Header />

      {/* Rutas principales */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/proyecto1" element={<Proyecto1 />} />
        <Route path="/proyecto2" element={<Proyecto2 />} />
        <Route path="/proyecto3" element={<Proyecto3 />} />
        <Route path="/proyecto4" element={<Proyecto4 />} />
        <Route path="/proyecto5" element={<Proyecto5 />} />
        <Route path="/proyecto6" element={<Proyecto6 />} />
        <Route path="/proyecto7" element={<Proyecto7 />} />
           <Route path="/proyecto8" element={<Proyecto8 />} />
        <Route path="/blog1" element={<Blog1 />} />

        {/* Rutas para Ciudades */}
        <Route path="/ciudades" element={<Ciudades />} />
        <Route path="/nagua" element={<Nagua />} />
        <Route path="/bonao" element={<Bonao />} />
        
      </Routes>
      <ScrollToTopButton /> {/* este botón siempre estará visible cuando hagas scroll */}

      {/* 🔹 Footer visible en TODAS las páginas */}
      <FooterProfesional />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
