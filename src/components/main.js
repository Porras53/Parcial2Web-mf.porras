import { useState } from "reacts";

import Login from "./Espacio/EspaciosList";


function Main() {
  // eslint-disable-next-line no-unused-vars
  let [vistaState, setVistaState] = useState("");
  let vista = localStorage.getItem("vista");

  if (!vista || vista === "" || vista === "principal") {
    return <EspaciosList setVista={setVistaState} />;
  } 
}
export default Main;