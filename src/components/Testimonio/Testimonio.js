import React from "react";
import "./Testimonio.css";

function Testimonio( props ) {
  return (
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio" 
        src={ require(`../../image/img${ props.imagen }.png`) } 
        alt={ props.alt } 
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{ props.nombre }</strong> en { props.pais }
        </p>
        <p className="cargo-testimonio">
          { props.cargo } en <strong>{ props.empresa }</strong>
          </p>
        <p className="texto-testimonio">"{ props.testimonio }"</p>
      </div>
    </div>
  );
}

// Se debe exportar el componente si se quiere usar en otra parte
export default Testimonio;