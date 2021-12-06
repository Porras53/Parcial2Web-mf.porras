import React from "react";
import { useState } from "react";

import EspaciosList from "../Espacio/EspaciosList";
import RoomList from "../Room/RoomList";
import DispositivoList from "../Dispositivo/DispositivoList";

export default function Principal() {
    const [idEspacio, setIdEspacioFinal] = useState("");
    const [dispositivosActuales, setDispositivosActuales] = useState([]);
    
        function cambiarId(element) {
    
        let tagElement = element.target.tagName;
    
        let infoFila = element.target.parentNode.children;

        setIdEspacioFinal(infoFila[2].innerHTML.replace(".",""));
      }

    return (<div>
    <EspaciosList  click={cambiarId}/>
    <div className="row">
        <div className="col">
            <RoomList espacioid={idEspacio} click={setDispositivosActuales}/>
        </div>
        <div className="col">
            <DispositivoList dispositivos={dispositivosActuales}/>
        </div>
    
    </div>
    </div>);

}