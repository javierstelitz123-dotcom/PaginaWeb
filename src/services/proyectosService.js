const API_URL = "http://localhost:5000/api/proyectos";

export const obtenerProyectos = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Error al obtener los proyectos");
    return await res.json();
  } catch (error) {
    console.error("❌ Error:", error);
    return [];
  }
};
