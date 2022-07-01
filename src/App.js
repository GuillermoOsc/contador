import "./App.css";
import Boton from "./componentes/boton";
import Contador from "./componentes/contador";
//import imagenLogo from "./imagenes/logo.png";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  const eventoClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      {
        <div className="logo-contenedor">
          <p> Contador de Clics </p>
        </div>
      }

      <div className="contenedor-contador">
        <Contador numClics={numClics} />

        <Boton texto="Clic" botonDeClic={true} eventoClic={eventoClic} />

        <Boton
          texto="Reiniciar"
          botonDeClic={false}
          eventoClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
