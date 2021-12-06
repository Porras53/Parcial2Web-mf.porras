import { useState, useEffect } from "react";
import { FormattedDate, FormattedMessage, FormattedNumber } from "react-intl";
import Room from "./Room";


function RoomList(props) {

    const [espaciosFinal, setEspaciosFinal] = useState([]);

    const [todoRooms, setTodoRooms] = useState([]);

    useEffect(() => {
        async function fetchInfoEspacios() {
            return await (
              await fetch("https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json")
            ).json();
          }
        
          async function fetchGuardarInfo() {

            const roomAct= await fetchInfoEspacios();
            setTodoRooms(roomAct);
            localStorage.setItem("Todorooms", roomAct);
            let roomFinales=[];
              for(let i=0;i<roomAct.length;i++)
              {
                  if(roomAct[i].homeId === props.espacioid)
                  {
                    roomFinales[i] = roomAct[i];
                  }
                
              }
              setEspaciosFinal(roomFinales);
              localStorage.setItem("rooms", roomFinales);
          }

          if (!navigator.onLine) {
            if (localStorage.getItem("rooms") === null) 
            {
              setEspaciosFinal([])
            }
            else 
            {
              const roomAct= todoRooms;
              let roomFinales=[];
                for(let i=0;i<roomAct.length;i++)
                {
                    if(roomAct[i].homeId === props.espacioid)
                    {
                      roomFinales[i] = roomAct[i];
                    }
                  
                }
                setEspaciosFinal(roomFinales);
                localStorage.setItem("rooms", roomFinales);
            }
            ;
          }
          else
          {
            fetchGuardarInfo();
          }
    }, [props.espacioid]);

  
  return (
    <div>
       <h1>
      <FormattedMessage
          id="tituloSalas"
          defaultMessage="asdas"
          /></h1>
      <div className="row">
        {espaciosFinal?.map((l) => (
        <Room espacio={l} click={props.click}  />
      ))}
      <br></br>
      </div>
      
    </div>
  );
}

export default RoomList;