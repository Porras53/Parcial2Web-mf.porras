import React from "react";
import imgHouse from "../../assets/house.png";
import imgAparta from "../../assets/apartament.png";

import { FormattedDate, FormattedMessage, FormattedNumber } from "react-intl";


function Espacio(props) {

  let nombre="Casa";
  let img= "";
  if(props.espacio.name.split(" ")[0] ==="Casa")
  {
    nombre = <FormattedMessage
          id="casa"
          defaultMessage="asdas"
          />;
    img = imgHouse;
  } else if (props.espacio.name.split(" ")[0] ==="Apartamento")
  {
    nombre = <FormattedMessage
    id="apartamento"
    defaultMessage="asdas"
    />;
    img =  imgAparta;
  }

    
    return (
      <div className="col">
        <div className="row" id="fondo-equipos" style={{ height: "auto" }}>
            <div class="card" style={{width: "18rem"}}>
        <img src={img} class="card-img-top" alt="..."></img>
<div class="card-body">
    <h5 class="card-title">{nombre} {props.espacio.name.split(" ")[1]}</h5>
    <p class="card-text">{props.espacio.address}.</p>
    <p class="card-text">{props.espacio.id}.</p>
    <a href="#" className="btn btn-primary" onClick={props.click}>Go somewhere</a>
  </div>
</div>
        </div>


      </div>

      );
    }

    export default Espacio;