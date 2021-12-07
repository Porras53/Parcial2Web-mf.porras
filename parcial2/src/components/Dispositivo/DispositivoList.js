import Dispositivo from "./Dispositivo";
import { FormattedDate, FormattedMessage, FormattedNumber } from "react-intl";


function DispositivoList(props) {
  
  return (
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col"><FormattedMessage
          id="device"
          defaultMessage="asdas"
          /></th>
      <th scope="col"><FormattedMessage
          id="valor"
          defaultMessage="asdas"
          /></th>
    </tr>
  </thead>
  <tbody>
    {props.dispositivos.map((d,i) => (
        <Dispositivo key={i} dispositivo={d} conta={i}/>
      ))}
  </tbody>
</table>

        

 
  );
}

export default DispositivoList;