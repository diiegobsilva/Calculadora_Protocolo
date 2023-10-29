import React, { useEffect, useState } from 'react';
import './index.css';

interface Props {
  dataHora: string,
  quantidadeSatelite: string,
  latitude: string,
  longitude: string,
  velocidade: string,
  tamanhoLbs: string,
  curso: string,
  mcc: string,
  mnc: string,
  lac: string,
  celularId: string,
  informacaoDoTerminal: string,
  tensaoDeBateriaInterna: string,
  qualidadeDoSinalGsm: string,
  alarmeLinguagem: string,
  cerca: string,
  setDataHora: Function
  setQuantidadeSatelite: Function
  setLatitude: Function
  setLongitude: Function
  setVelocidade: Function
  setCurso: Function
  setTamanhoLbs: Function
  setMcc: Function
  setMnc: Function
  setLac: Function
  setCelularId: Function
  setInformacaoDoTerminal: Function
  setTensaoDeBateriaInterna: Function
  setQualidadeDoSinalGsm: Function
  setAlarmeLinguagem: Function
  setCerca: Function
  numeroProtocolo: string,
  informacaoContida: string,
}


export default function PacoteAlarmeCerca(props: Props) {
  const handlePacoteAlarmesCerca = () => {
    if (props.numeroProtocolo == "A4") {
      props.setDataHora(props.informacaoContida.substring(0, 12));
      props.setQuantidadeSatelite(props.informacaoContida.substring(12, 14));
      props.setLatitude(props.informacaoContida.substring(14, 22));
      props.setLongitude(props.informacaoContida.substring(22, 30));
      props.setVelocidade(props.informacaoContida.substring(30, 32));
      props.setCurso(props.informacaoContida.substring(32, 36));
      props.setTamanhoLbs(props.informacaoContida.substring(36, 38));
      props.setMcc(props.informacaoContida.substring(38, 42));
      props.setMnc(props.informacaoContida.substring(42, 44));
      props.setLac(props.informacaoContida.substring(44, 48));
      props.setCelularId(props.informacaoContida.substring(48, 54));
      props.setInformacaoDoTerminal(props.informacaoContida.substring(54, 56));
      props.setTensaoDeBateriaInterna(props.informacaoContida.substring(56, 58));
      props.setQualidadeDoSinalGsm(props.informacaoContida.substring(58, 60));
      props.setAlarmeLinguagem(props.informacaoContida.substring(60, 64));
      props.setCerca(props.informacaoContida.substring(64, 66));

    } else {
      console.log("Numero de Protocolo incorreto");
      props.setDataHora("");
      props.setQuantidadeSatelite("");
      props.setLatitude("");
      props.setVelocidade("");
      props.setCurso("");
      props.setTamanhoLbs("");
      props.setMcc("");
      props. setMnc("");
      props.setLac("");
      props.setCelularId("");
      props.setInformacaoDoTerminal("");
      props.setTensaoDeBateriaInterna("");
      props.setQualidadeDoSinalGsm("");
      props.setAlarmeLinguagem("");
      props.setCerca("");
    }
  }

  useEffect(() => {
    handlePacoteAlarmesCerca()
  },[])

  return (
    <div className="tableContainer">
      <div className="labelContainer">

      </div>
      <div className="containerLabel">
        <label className="labelTitulo">Pacote de alarmes (cerca)</label>
      </div>
      <table className="customTable">
        <tbody>
          <tr>
            <th scope="row">Data e Horário:</th>
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
            <th scope="row">Curso, status:</th>
            <td>{props.curso}</td>
          </tr>
          <tr>
            <th scope="row">Tamanho LBS:</th>
            <td>{props.tamanhoLbs}</td>
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
            <th scope="row">Informação do terminal :</th>
            <td>{props.informacaoDoTerminal}</td>
          </tr>
          <tr>
            <th scope="row">Tensão de bateria interna:</th>
            <td>{props.tensaoDeBateriaInterna}</td>
          </tr>
          <tr>
            <th scope="row">Qualidade do sinal GSM:</th>
            <td>{props.qualidadeDoSinalGsm}</td>
          </tr>
          <tr>
            <th scope="row">Alarme/linguagem:</th>
            <td>{props.alarmeLinguagem}</td>
          </tr>
          <tr>
            <th scope="row">Cerca:</th>
            <td>{props.cerca}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}