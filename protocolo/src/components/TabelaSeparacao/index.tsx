import { Table } from "react-bootstrap";
import './index.css';

export default function TabelaSeparacao() {
  return (
    <div className="app-container">
      <div className="input-container">
        <div className="labelProtocolo">
           <label className="label">Protocolo</label>
           <input type="text"  className="input"/>
        </div>
  
        <div className="containerBotao">
          <button className="btn btn-separacao">SEPARAÇÃO</button>
          <button className="btn btn-limpeza">LIMPEZA</button>
        </div>
      </div>

      <div className="table-container">
        <Table className="custom-table">
          <thead>
            <tr>
              <th >Protocolo</th>
              <th>Start Bit</th>
              <th>Tamanho do Pacote</th>
              <th>Numero do Protocolo</th>
              <th>Informação Contida</th>
              <th>Informação do Numero Sequencia</th>
              <th>Error Check</th>
              <th>Stop Bit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
