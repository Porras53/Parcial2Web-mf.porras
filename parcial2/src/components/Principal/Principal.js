import React from "react";
import { useState } from "react";

import EspaciosList from "../Espacio/EspaciosList";
import RoomList from "../Room/RoomList";
import DispositivoList from "../Dispositivo/DispositivoList";

export default function Principal() {
    const [idEspacio, setIdEspacioFinal] = useState("");
    const [dispositivosActuales, setDispositivosActuales] = useState([]);
    
        function cambiarId(element) {
        let infoFila = element.target.parentNode.children;

        setIdEspacioFinal(infoFila[2].innerHTML.replace(".",""));
      }
    //   async function traerRooms() {
    //     return await (
    //       await fetch("https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json")
    //     ).json();
    //   }
    //   async function setRooms()
    //   {
    //       setRoomsActuales(await traerRooms());
    //   }

    //   setRooms();
      
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