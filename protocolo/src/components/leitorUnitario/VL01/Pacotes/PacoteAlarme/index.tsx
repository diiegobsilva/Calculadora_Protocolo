import React, { useEffect, useState } from 'react';
import './index.css';

interface Props {
  dataHora: string,
  latitude: string,
  longitude: string,
  curso: string,
  alarmeLinguagem: string,
  alarme: string,
  setDataHora: Function
  setLatitude: Function
  setLongitude: Function
  setCurso: Function
  setAlarmeLinguagem: Function
  setAlarme: Function
  numeroProtocolo: string,
  informacaoContida: string,
}


export default function PacoteAlarme(props: Props) {

  const handlePacoteAlarme = () => {
    if (props.numeroProtocolo == "95") {
      props.setDataHora(props.informacaoContida.substring(0, 12));
      props.setLatitude(props.informacaoContida.substring(12, 20)); 
      props.setLongitude(props.informacaoContida.substring(20, 28)); 
      props.setCurso(props.informacaoContida.substring(28, 32)); 
      props.setAlarmeLinguagem(props.informacaoContida.substring(32, 34)); 
      props.setAlarme(props.informacaoContida.substring(34)); 
    } else {
      console.log("Numero de Protocolo incorreto");
      props.setDataHora("");
      props.setLatitude("");
      props.setLongitude("");
      props.setCurso("");
      props.setAlarmeLinguagem("");
      props.setAlarme("");
    }
  }

  useEffect(() => {
    handlePacoteAlarme()
  },[])

  return (
    <div className="tableContainer">
      <div className="containerLabel">
        <label className="labelTitulo">Pacote de Alarme</label>
      </div>
      <table className="customTable">
        <tbody>
          <tr>
            <th scope="row">Data e Horário:</th>
            <td>{props.dataHora}</td>
          </tr>
          <tr>
            <th scope="row">Latitude:</th>
            <td>{props.latitude}</td>
          </tr>
          <tr>
            <th scope="row">Logitude:</th>
            <td>{props.longitude}</td>
          </tr>
          <tr>
            <th scope="row">Curso, Status:</th>
            <td>{props.curso}</td>
          </tr>
          <tr>
            <th scope="row">Alarme / Linguagem:</th>
            <td>{props.alarmeLinguagem}</td>
          </tr>
          <tr>
            <th scope="row">Alarme:</th>
            <td>{props.alarme}</td>
          </tr>
        </tbody>
      </table>
    </div>

  );
}