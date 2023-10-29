import React, { useEffect, useState } from 'react';
import './index.css';

interface Props {
  tamanhoComando: string,
  bitBandeiraServidor: string,
  conteudoComando: string,
  linguagem: string,
  setTamanhoComando: Function
  setBitBandeiraServidor: Function
  setConteudoComando: Function
  setLinguagem: Function
  numeroProtocolo: string,
  informacaoContida: string,
}

export default function ComandoOnline(props: Props) {

  const handleComandoOnline = () => {
    if (props.numeroProtocolo == "80") {
      props.setTamanhoComando(props.informacaoContida.substring(0, 2));
      props.setBitBandeiraServidor(props.informacaoContida.substring(2, 10));
      props.setConteudoComando(props.informacaoContida.substring(10, props.informacaoContida.length - 4));
      props.setLinguagem(props.informacaoContida.substring(props.informacaoContida.length - 4));
    } else {
      console.log("Numero de Protocolo incorreto");
      props.setTamanhoComando("");
      props.setBitBandeiraServidor("");
      props.setConteudoComando("");
      props.setLinguagem("");
    }
  }

  useEffect(() => {
    handleComandoOnline()
  },[])

  return (
    <div className="tableContainer">
    <div className="containerLabel">
      <label className="labelTitulo">Comando online </label>
    </div>
    <table className="customTable">
      <tbody>
        <tr>
          <th scope="row">Tamanho do comando:</th>
          <td>{props.tamanhoComando}</td>
        </tr>
        <tr>
          <th scope="row">Bit da bandeira do servidor:</th>
          <td>{props.bitBandeiraServidor}</td>
        </tr>
        <tr>
          <th scope="row">Conteúdo do comando:</th>
          <td>{props.conteudoComando}</td>
        </tr>
        <tr>
          <th scope="row">Linguagem:</th>
          <td>{props.linguagem}</td>
        </tr>

      </tbody>
    </table>
  </div>
  );
}