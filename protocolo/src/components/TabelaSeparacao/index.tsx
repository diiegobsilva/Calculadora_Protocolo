import React, { useState } from 'react';
import { Table } from "react-bootstrap";
import './index.css';

interface Props {
  startBit: string,
  tamanhoProtocolo: string,
  numeroProtocolo: string,
  informacaoContida: string,
  informacaoSequencia: string,
  errorCheck: string,
  stopBit: string,
  handleSeparacaoClick: React.MouseEventHandler<HTMLButtonElement> | undefined
  handleLimpezaClick: React.MouseEventHandler<HTMLButtonElement> | undefined
  setValorProtocolo:Function
  valorProtocolo: string

  }
export default function TabelaSeparacao(props:Props ){

  return (
    <div className="app-container">
      <div className="input-container">
        <div className="labelProtocolo">
          <label className="label">Protocolo</label>
          <input type="text" className="input" onChange={(e) => props.setValorProtocolo(e.target.value)} value={props.valorProtocolo} />
        </div>

        <div className="containerBotao">
          <button className="btn btn-separacao" onClick={props.handleSeparacaoClick}>
            SEPARAÇÃO
          </button>
          <button className="btn btn-limpeza" onClick={props.handleLimpezaClick}>
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
              <td>{props.startBit}</td>
              <td>{props.tamanhoProtocolo}</td>
              <td>{props.numeroProtocolo}</td>
              <td>{props.informacaoContida}</td>
              <td>{props.informacaoSequencia}</td>
              <td>{props.errorCheck}</td>
              <td>{props.stopBit}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}