import React from "react";
import imgKitchen from "../../assets/kitchen.png";
import imgDinner from "../../assets/dinner.png";
import imgLiving from "../../assets/living.png";
import { FormattedDate, FormattedMessage, FormattedNumber } from "react-intl";


function Room(props) {

  function cambiarDispositivos(element)
  {
    props.click(props.espacio.devices)
  }

  let img = "";
  let idActual = "";

  if(props.espacio.name==="Kitchen")
  {
    idActual="cocina";
    img = imgKitchen;

  }else if(props.espacio.name==="Dinner room")
  {
    idActual="comedor";
    img = imgDinner;
  }else if(props.espacio.name==="Living room")
  {
    idActual="sala";
    img = imgLiving;
  }
    return (
      <div className="col">
        <div className="row" id="fondo-equipos" style={{ height: "auto" }}>
            <div class="card" style={{width: "18rem"}}>
        <img src={img} class="card-img-top" alt="..."></img>
<div class="card-body">
    <h5 class="card-title"> <FormattedMessage
    id={idActual}
    defaultMessage="asdas"
    /></h5>
    <a href="#" className="btn btn-primary" onClick={cambiarDispositivos}>Go somewhere</a>
  </div>
</div>
        </div>


      </div>

      );
    }

    export default Room;