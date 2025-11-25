import { useParams } from "react-router-dom";
import Proyecto1 from "./Proyecto1";
import Proyecto2 from "./Proyecto2";
import Proyecto3 from "./Proyecto3";

const ProyectoRouter = () => {
  const { id } = useParams();

  switch (id) {
    case "0":
      return <Proyecto1 />;
    case "1":
      return <Proyecto2 />;
    case "2":
      return <Proyecto3 />;
    default:
      return <h2>Proyecto no encontrado</h2>;
  }
};

export default ProyectoRouter;
