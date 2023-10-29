import React, { useState } from 'react';
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
}

export default function PacoteDadosGps(props: Props) {

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