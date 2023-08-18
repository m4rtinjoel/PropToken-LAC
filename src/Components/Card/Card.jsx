import React from "react";
import "./Card.css";
import Box from "./../../img/box.png";

function Card() {
  return (
    <>
      <div className="container">
        <p>Invierte como los grandes gracias a la tecnología</p>
        <div className="card">
          <div className="card-container">
            <img src={Box} alt="" />
            <h6>Búsqueda</h6>
            <p>Seleccionamos las mejores oportunidades para comprar.</p>
          </div>
          <div className="card-container">
            <img src={Box} alt="" />
            <h6>Tokenización</h6>
            <p>Seleccionamos las mejores oportunidades para comprar.</p>
          </div>
          <div className="card-container">
            <img src={Box} alt="" />
            <h6>Rendimientos</h6>
            <p>Seleccionamos las mejores oportunidades para comprar.</p>
          </div>
          <div className="card-container">
            <img src={Box} alt="" />
            <h6>Venta final</h6>
            <p>Seleccionamos las mejores oportunidades para comprar.</p>
          </div>
          <div className="card-container">
            <img src={Box} alt="" />
            <h6>Reinversión</h6>
            <p>Seleccionamos las mejores oportunidades para comprar.</p>
          </div>
        </div>
        <div className="info-info">
          <p>
            Despreocúpate de todo proceso; búsqueda de inmuebles, firmas,
            bancos, reformas, búsqueda de inquilino, gestione el día a día
            PropToken LAC, lo hace todo por ti y tu tranquilida
          </p>
        </div>
      </div>
    </>
  );
}
export default Card;
