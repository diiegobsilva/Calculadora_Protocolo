import { Table } from "react-bootstrap";
import './index.css';
import { useState } from "react";

interface SeparationResult {
  startBit: string;
  tamanhoProtocolo: string;
  numeroProtocolo: string;
  informacaoContida: string;
  informacaoSequencia: string;
  errorCheck: string;
  stopBit: string;
}

export default function TabelaSeparacao() {
  const [valorProtocolo, setValorProtocolo] = useState("");
  const [tableData, setTableData] = useState<SeparationResult | null>(null);

  const handleSeparacaoClick = () => {
    if (valorProtocolo) {
      const prefixo = valorProtocolo.substring(0, 4);

      console.log(prefixo);
      
      let  startBit, tamanhoProtocolo, numeroProtocolo, informacaoContida, informacaoSequencia, errorCheck, stopBit;

      if (prefixo === "7878") {
        startBit = valorProtocolo.substring(0, 4);
        tamanhoProtocolo = valorProtocolo.substring(4, 6);
        numeroProtocolo = valorProtocolo.substring(6, 8);
        informacaoContida = valorProtocolo.substring(8, valorProtocolo.length - 12);
        informacaoSequencia = valorProtocolo.substring(valorProtocolo.length - 12, valorProtocolo.length - 8);
        errorCheck = valorProtocolo.substring(valorProtocolo.length - 8, valorProtocolo.length - 4);
        stopBit = valorProtocolo.substring(valorProtocolo.length - 4, valorProtocolo.length - 0);

      } else if (prefixo === "7979") {
        startBit = valorProtocolo.substring(4, 8);
        tamanhoProtocolo = valorProtocolo.substring(8, 10);
        numeroProtocolo = valorProtocolo.substring(10, valorProtocolo.length - 16);
        informacaoContida = valorProtocolo.substring(valorProtocolo.length - 16, valorProtocolo.length - 12);
        informacaoSequencia = valorProtocolo.substring(valorProtocolo.length - 12, valorProtocolo.length - 8);
        errorCheck = valorProtocolo.substring(valorProtocolo.length - 8, valorProtocolo.length - 4);
        stopBit = valorProtocolo.substring(valorProtocolo.length - 4,  valorProtocolo.length - 0) ;
        
      } else {
        console.log("Prefixo incorreto");
        setTableData({
          startBit: "",
          tamanhoProtocolo: "",
          numeroProtocolo: "",
          informacaoContida: "",
          informacaoSequencia: "",
          errorCheck: "",
          stopBit: "",
        });
        return;
      }

      setTableData({  startBit, tamanhoProtocolo, numeroProtocolo, informacaoContida, informacaoSequencia, errorCheck, stopBit });
    }
  };

  const handleLimpezaClick = () => {
    setValorProtocolo("");
    setTableData(null);
  };

  return (
    <div className="app-container">
      <div className="input-container">
        <div className="labelProtocolo">
          <label className="label">Protocolo</label>
          <input type="text" className="input" onChange={(e) => setValorProtocolo(e.target.value)} value={valorProtocolo} />
        </div>

        <div className="containerBotao">
          <button className="btn btn-separacao" onClick={handleSeparacaoClick}>
            SEPARAÇÃO
          </button>
          <button className="btn btn-limpeza" onClick={handleLimpezaClick}>
            LIMPEZA
          </button>
        </div>
      </div>

      <div className="table-container">
        <Table className="custom-table">
          <thead>
            <tr>
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
              <td>{tableData?.startBit}</td>
              <td>{tableData?.tamanhoProtocolo}</td>
              <td>{tableData?.numeroProtocolo}</td>
              <td>{tableData?.informacaoContida}</td>
              <td>{tableData?.informacaoSequencia}</td>
              <td>{tableData?.errorCheck}</td>
              <td>{tableData?.stopBit}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
