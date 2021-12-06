import { useState, useEffect } from "react";
import { FormattedDate, FormattedMessage, FormattedNumber } from "react-intl";
import Espacio from "./Espacio";


function EspaciosList(props) {

    const [espaciosFinal, setEspaciosFinal] = useState([]);

    useEffect(() => {
        async function fetchInfoEspacios() {
            return await (
              await fetch("https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json")
            ).json();
          }
        
          async function fetchGuardarInfo() {
            let tempo= await fetchInfoEspacios();
            localStorage.setItem("espacios", tempo);
            console.log("local storage",tempo);
            setEspaciosFinal(tempo);
          }

          
          if (!navigator.onLine) {
            if (localStorage.getItem("espacios") === null) setEspaciosFinal([]);
            else setEspaciosFinal(localStorage.getItem("espacios"));
          }
          else
          {
            fetchGuardarInfo();
          }
    }, []);

  
  return (
    <div>
      <h1>
      <FormattedMessage
          id="tituloEspacios"
          defaultMessage="asdas"
          /></h1>
      {/* <h1> My Spaces </h1> */}
      <div className="row">
        {espaciosFinal?.map((l) => (
        <Espacio espacio={l} click={props.click} />
      ))}
      <br></br>
      </div>
      
    </div>
  );
}

export default EspaciosList;
