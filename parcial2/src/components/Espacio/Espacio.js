import React from "react";
import imgHouse from "../../assets/house.png";
import imgAparta from "../../assets/apartament.png";

import { FormattedDate, FormattedMessage } from "react-intl";

function Espacio(props) {
  let nombre = "Casa";
  let img = "";
  if (props.espacio.name.split(" ")[0] === "Casa") {
    nombre = <FormattedMessage id="casa" defaultMessage="asdas" />;
    img = imgHouse;
  } else if (props.espacio.name.split(" ")[0] === "Apartamento") {
    nombre = <FormattedMessage id="apartamento" defaultMessage="asdas" />;
    img = imgAparta;
  }

  return (
    <div className="col">
      <div className="row" id="fondo-equipos" style={{ height: "auto" }}>
        <div className="card" style={{ width: "18rem" }}>
          <img src={img} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">
              {nombre} {props.espacio.name.split(" ")[1]}
            </h5>
            <p className="card-text">{props.espacio.address}.</p>
            <p className="card-text" style={{visibility: "hidden"}}>{props.espacio.id}.</p>
            <button className="btn btn-primary" onClick={props.click}>
            <FormattedMessage
          id="boton"
          defaultMessage="asdas"
          />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Espacio;
