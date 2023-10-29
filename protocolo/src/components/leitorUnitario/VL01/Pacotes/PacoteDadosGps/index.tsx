import React, { useEffect, useState } from 'react';
import './index.css';

interface Props {
  dataHora: string,
  quantidadeSatelite: string,
  latitude: string,
  longitude: string,
  lac: string,
  velocidade: string,
  curso: string,
  mcc: string,
  mnc: string,
  celularId: string,
  acc: string,
  modoUploadDados: string,
  tempoRealGps: string
  setDataHora: Function
  setQuantidadeSatelite: Function
  setLatitude: Function
  setLongitude: Function
  setVelocidade: Function
  setCurso: Function
  setMcc: Function
  setMnc: Function
  setLac: Function
  setCelularId: Function
  setAcc: Function
  setModoUploadDados: Function
  setTempoRealGps: Function
  numeroProtocolo: string
  informacaoContida: string
}

export default function PacoteDadosGps(props: Props) {
  const handleDadosPosicao = () => {
    if (props.numeroProtocolo == "A0") {
      props.setDataHora(props.informacaoContida.substring(0, 12));
      props.setQuantidadeSatelite(props.informacaoContida.substring(12, 14));
      props.setLatitude(props.informacaoContida.substring(14, 22));
      props.setLongitude(props.informacaoContida.substring(22, 30));
      props.setVelocidade(props.informacaoContida.substring(30, 32));
      props.setCurso(props.informacaoContida.substring(32, 36));
      props.setMcc(props.informacaoContida.substring(36, 40));
      props.setMnc(props.informacaoContida.substring(40, 44));
      props.setLac(props.informacaoContida.substring(44, 52));
      props.setCelularId(props.informacaoContida.substring(52, 68));
      props.setAcc(props.informacaoContida.substring(68, 70));
      props.setModoUploadDados(props.informacaoContida.substring(70, 72));
      props.setTempoRealGps(props.informacaoContida.substring(72, 74));

    } else {
      console.log("Numero de Protocolo incorreto");
      props.setDataHora("");
      props.setQuantidadeSatelite("");
      props.setLatitude("");
      props.setVelocidade("");
      props.setCurso("");
      props.setMcc("");
      props.setMnc("");
      props.setLac("");
      props.setCelularId("");
      props.setAcc("");
      props.setModoUploadDados("");
      props.setTempoRealGps("");
    }
  }

  useEffect(() => {
    handleDadosPosicao()
  },[])

  
  return (
    <div className="tableContainer">
    <div className="labelContainer">

    </div>
    <div className="containerLabel">
      <label className="labelTitulo">Pacote de Posição(UTC)</label>
    </div>
    <table className="customTable">
      <tbody>
        <tr>
          <th scope="row">Data e horário:</th>
          <td>{props.dataHora}</td>
        </tr>
        <tr>
          <th scope="row">Quantidade de satélites GPS:</th>
          <td>{props.quantidadeSatelite}</td>
        </tr>
        <tr>
          <th scope="row">Latitude:</th>
          <td>{props.latitude}</td>
        </tr>
        <tr>
          <th scope="row">Longitude:</th>
          <td>{props.longitude}</td>
        </tr>
        <tr>
          <th scope="row">Velocidade:</th>
          <td>{props.velocidade}</td>
        </tr>
        <tr>
          <th scope="row">Curso:</th>
          <td>{props.curso}</td>
        </tr>
        <tr>
          <th scope="row">MCC:</th>
          <td>{props.mcc}</td>
        </tr>
        <tr>
          <th scope="row">MNC:</th>
          <td>{props.mnc}</td>
        </tr>
        <tr>
          <th scope="row">LAC:</th>
          <td>{props.lac}</td>
        </tr>
        <tr>
          <th scope="row">Celular ID:</th>
          <td>{props.celularId}</td>
        </tr>
        <tr>
          <th scope="row">ACC:</th>
          <td>{props.acc}</td>
        </tr>
        <tr>
          <th scope="row">Modo de upload de dados:</th>
          <td>{props.modoUploadDados}</td>
        </tr>
        <tr>
          <th scope="row">Tempo real de GPS:</th>
          <td>{props.tempoRealGps}</td>
        </tr>

      </tbody>
    </table>
  </div>
  );
}