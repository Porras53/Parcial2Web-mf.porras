import React from "react";
import { FormattedDate, FormattedMessage, FormattedNumber } from "react-intl";

function Dispositivo(props) {

    let idActualNombre= "";
    let idActualValor="";

    if(props.dispositivo.name==="temperature")
    {
      idActualNombre =
      <FormattedMessage
      id= "temperatura"
      defaultMessage="asdas"
      />;
    } else if(props.dispositivo.name.includes("light"))
    {
      idActualNombre =
      <FormattedMessage
      id= "luz"
      defaultMessage="asdas"
      />;
    }
    else if(props.dispositivo.name==="door")
    {
      idActualNombre =
      <FormattedMessage
      id= "door"
      defaultMessage="asdas"
      />;
    }
    else if(props.dispositivo.name==="humidity")
    {
      idActualNombre =
      <FormattedMessage
      id= "humedad"
      defaultMessage="asdas"
      />; 
    }
    else if(props.dispositivo.name==="Gas")
    { 
      idActualNombre =
      <FormattedMessage
      id= "gas"
      defaultMessage="asdas"
      />; 
      
    }
    else
    {
      idActualNombre= props.dispositivo.name
    }


    if(props.dispositivo.desired.value === "on")
    {
      idActualValor = <FormattedMessage
      id= "prendido"
      defaultMessage="asdas"
      />;
    } 
    else if (props.dispositivo.desired.value === "off")
    {
      idActualValor = <FormattedMessage
      id= "apagado"
      defaultMessage="asdas"
      />;
    }
    else if (props.dispositivo.desired.value === "open")
    {
      idActualValor = <FormattedMessage
      id= "open"
      defaultMessage="asdas"
      />;
    }
    else
    {
      idActualValor=props.dispositivo.desired.value
    }
    

    return (
     
    <tr>
      <th scope="row">{props.conta}</th>
      <td>{props.dispositivo.id}</td>
      <td>{idActualNombre}</td>
      <td>{idActualValor}</td>
    </tr>

      );
    }

    export default Dispositivo;