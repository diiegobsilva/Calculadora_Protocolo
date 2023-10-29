import React, { useState } from 'react';
import './index.css';

interface Props {
  tipoInformacao: string,
  conteudoDados: string,
}

export default function PacoteTransmissaoInformacao(props: Props) {

  return (
    <div className="tableContainer">
      <div className="labelContainer">

      </div>
      <div className="containerLabel">
        <label className="labelTitulo">Pacote de Transmissão de Informação</label>
      </div>
      <table className="customTable">
        <tbody>
          <tr>
            <th scope="row">Tipo de informação(Numero de sub-protocolo):</th>
            <td>{props.tipoInformacao}</td>
          </tr>
          <tr>
            <th scope="row">Conteúdo dos dados:</th>
            <td>{props.conteudoDados}</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}