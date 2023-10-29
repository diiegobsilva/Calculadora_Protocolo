import React, { useState } from 'react';
import './index.css';

interface Props {
  dataHora: string,
  latitude: string,
  longitude: string,
  curso: string,
  alarmeLinguagem: string,
  alarme: string,
}


export default function PacoteAlarme(props: Props) {

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