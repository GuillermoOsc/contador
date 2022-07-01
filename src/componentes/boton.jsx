import React from 'react';
import '../stylecss/boton.css';

function Boton({texto, botonDeClic, eventoClic}) { // Parametros de función con sintaxis de desestructuración (props)
   return (
     <button
        className={ botonDeClic ? 'boton-clic' : 'boton-reiniciar' }
        onClick={eventoClic} >  
       {texto}
     </button> //operador ternario/condicional (linea 6)
   ); 
}

export default Boton;