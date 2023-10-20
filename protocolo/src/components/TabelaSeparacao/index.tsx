import React, { useState } from 'react';
import { Table } from "react-bootstrap";
import './index.css';

export default function TabelaSeparacao() {
  const [valorProtocolo, setValorProtocolo] = useState("");
  const [startBit, setStartBit] = useState("");
  const [tamanhoProtocolo, setTamanhoProtocolo] = useState("");
  const [numeroProtocolo, setNumeroProtocolo] = useState("");
  const [informacaoContida, setInformacaoContida] = useState("");
  const [informacaoSequencia, setInformacaoSequencia] = useState("");
  const [errorCheck, setErrorCheck] = useState("");
  const [stopBit, setStopBit] = useState("");

  const handleSeparacaoClick = () => {
    if (valorProtocolo) {
      const prefixo = valorProtocolo.substring(0, 4);

      if (prefixo === "7878") {
        setStartBit(valorProtocolo.substring(0, 4));
        setTamanhoProtocolo(valorProtocolo.substring(4, 6));
        setNumeroProtocolo(valorProtocolo.substring(6, 8));
        setInformacaoContida(valorProtocolo.substring(8, valorProtocolo.length - 12));
        setInformacaoSequencia(valorProtocolo.substring(valorProtocolo.length - 12, valorProtocolo.length - 8));
        setErrorCheck(valorProtocolo.substring(valorProtocolo.length - 8, valorProtocolo.length - 4));
        setStopBit(valorProtocolo.substring(valorProtocolo.length - 4, valorProtocolo.length - 0));
      } else if (prefixo === "7979") {
        setStartBit(valorProtocolo.substring(0, 4));
        setTamanhoProtocolo(valorProtocolo.substring(4, 8));
        setNumeroProtocolo(valorProtocolo.substring(8, 10));
        setInformacaoContida(valorProtocolo.substring(10, valorProtocolo.length - 12));
        setInformacaoSequencia(valorProtocolo.substring(valorProtocolo.length - 12, valorProtocolo.length - 8));
        setErrorCheck(valorProtocolo.substring(valorProtocolo.length - 8, valorProtocolo.length - 4));
        setStopBit(valorProtocolo.substring(valorProtocolo.length - 4,  valorProtocolo.length - 0));
      } else {
        console.log("Prefixo incorreto");
        setStartBit("");
        setTamanhoProtocolo("");
        setNumeroProtocolo("");
        setInformacaoContida("");
        setInformacaoSequencia("");
        setErrorCheck("");
        setStopBit("");
        return;
      }
    }
  };

  const handleLimpezaClick = () => {
    setValorProtocolo("");
    setStartBit("");
    setTamanhoProtocolo("");
    setNumeroProtocolo("");
    setInformacaoContida("");
    setInformacaoSequencia("");
    setErrorCheck("");
    setStopBit("");
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
              <td>{startBit}</td>
              <td>{tamanhoProtocolo}</td>
              <td>{numeroProtocolo}</td>
              <td>{informacaoContida}</td>
              <td>{informacaoSequencia}</td>
              <td>{errorCheck}</td>
              <td>{stopBit}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}