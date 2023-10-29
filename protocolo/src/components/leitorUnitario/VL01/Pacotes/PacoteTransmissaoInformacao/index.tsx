import React, { useEffect, useState } from 'react';
import './index.css';

interface Props {
  tipoInformacao: string,
  conteudoDados: string,
  setTipoInformacao: Function
  numeroProtocolo: string,
  setConteudoDados: Function
  informacaoContida: string,
}

export default function PacoteTransmissaoInformacao(props: Props) {

  const handleTransmissaoInformacao = () => {
    if (props.numeroProtocolo == "94") {
      props.setTipoInformacao(props.informacaoContida.substring(0, 2));
      props.setConteudoDados(props.informacaoContida.substring(2));
    } else {
      console.log("Numero de Protocolo incorreto");
      props.setTipoInformacao("");
      props.setConteudoDados("");
    }
  }

  useEffect(() => {
    handleTransmissaoInformacao()
  },[])

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