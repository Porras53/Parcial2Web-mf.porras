import React from "react";
import imgKitchen from "../../assets/kitchen.png";
import imgDinner from "../../assets/dinner.png";
import imgLiving from "../../assets/living.png";
import { FormattedDate, FormattedMessage, FormattedNumber } from "react-intl";


function Room(props) {


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
            <div className="card" style={{width: "18rem"}}>
        <img src={img} className="card-img-top" alt="..."></img>
<div className="card-body">
    <h5 className="card-title"> <FormattedMessage
    id={idActual}
    defaultMessage="asdas"
    /></h5>
    <button className="btn btn-primary" onClick={() =>  props.click(props.espacio.devices)}><FormattedMessage
          id="boton"
          defaultMessage="asdas"
          /></button>
  </div>
</div>
        </div>


      </div>

      );
    }

    export default Room;