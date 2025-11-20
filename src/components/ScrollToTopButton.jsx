import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {visible && (
        <button onClick={scrollToTop} className="scroll-button">
          <span
            style={{
              fontSize: "32px", // tamaño de la flecha
            }}
          >
            🡅
          </span>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
