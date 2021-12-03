import React from "react";
import { useState, useEffect } from "react";

function Partido(props) {

    return (
        <div className="row" id="fondo-equipos" style={{ height: "auto" }}>
            <div class="card" style="width: 18rem;">
        <img src={props.espacio.img} class="card-img-top" alt="..."></img>
<div class="card-body">
    <h5 class="card-title">{props.espacio.name}</h5>
    <p class="card-text">{props.espacio.address}.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
      );
    }