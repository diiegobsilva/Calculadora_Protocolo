import React, { useEffect, useState } from 'react';
import './index.css';

interface Props {
  informacaoTerminal: string,
  tensaoBateriaInterna: string,
  qualidadeGSM: string,
  idiomaStatus: string,
  setInformacaoTerminal: Function
  setTensaoBateriaInterna: Function
  setQualidadeGSM: Function
  setIdiomaStatus: Function
  informacaoContida: string
  numeroProtocolo: string
  }

export default function PacoteHeartbeat(props:Props) {

  const handlePacoteHeartbeat = () => {
    if (props.numeroProtocolo == "13") {
      props.setInformacaoTerminal(props.informacaoContida.substring(0, 2));
      props.setTensaoBateriaInterna(props.informacaoContida.substring(2, 4));
      props.setQualidadeGSM(props.informacaoContida.substring(4, 6));
      props.setIdiomaStatus(props.informacaoContida.substring(6, 10))
    } else {
      console.log("Numero de Protocolo incorreto");
      props.setInformacaoTerminal("");
      props.setTensaoBateriaInterna("");
      props.setQualidadeGSM("");
      props.setIdiomaStatus("");
    }
  }
  useEffect(() => {
    handlePacoteHeartbeat()
  },[])


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