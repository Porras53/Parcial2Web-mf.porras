import React from "react";
import imgHouse from "../../assets/house.png";

function Espacio(props) {

    return (
      <div className="col">
        <div className="row" id="fondo-equipos" style={{ height: "auto" }}>
            <div class="card" style={{width: "18rem"}}>
        <img src={imgHouse} class="card-img-top" alt="..."></img>
<div class="card-body">
    <h5 class="card-title">{props.espacio.name}</h5>
    <p class="card-text">{props.espacio.address}.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>


      </div>

      );
    }

    export default Espacio;