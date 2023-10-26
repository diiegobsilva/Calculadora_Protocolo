import React, { useState } from 'react';
import './index.css';

interface Props {
  informacaoTerminal: string,
  tensaoBateriaInterna: string,
  qualidadeGSM: string,
  idiomaStatus: string
  }

export default function PacoteHeartbeat(props:Props) {

  return (

    <div className="tableContainer">
      <div className="labelContainer">

      </div>
      <div className="containerLabel">
        <label className="labelTitulo">Pacote de HeatBeat</label>
      </div>
      <table className="customTable">
        <tbody>
          <tr>
            <th scope="row">Informação Terminal:</th>
            <td>{props.informacaoTerminal}</td>
          </tr>
          <tr>
            <th scope="row">Tensão da Bateria Interna:</th>
            <td>{props.tensaoBateriaInterna}</td>
          </tr>
          <tr>
            <th scope="row">Qualidade do GSM:</th>
            <td>{props.qualidadeGSM}</td>
          </tr>
          <tr>
            <th scope="row">Idioma / Status:</th>
            <td>{props.idiomaStatus}</td>
          </tr>
        </tbody>
      </table>
    </div>

  );
}