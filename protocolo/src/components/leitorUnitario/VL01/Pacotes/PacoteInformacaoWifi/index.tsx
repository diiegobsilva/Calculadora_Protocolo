import React, { useState } from 'react';
import './index.css';

interface Props {
  dataHora: string,
  quantidadeSatelite: string,
  latitude: string,
  longitude: string,
  identificaoSatelite: string,
  quantidadeWifi: string,
  wifiMac1: string,
  forcaWifi: string,
  wifiMac2: string,
  forcaWifi2: string,
}

export default function PacoteInformacaoWifi(props: Props) {

  return (
    <div className="tableContainer">
    <div className="containerLabel">
      <label className="labelTitulo">Pacote de informação WIFI</label>
    </div>
    <table className="customTable">
      <tbody>
        <tr>
          <th scope="row">Data e Hora:</th>
          <td>{props.dataHora}</td>
        </tr>
        <tr>
          <th scope="row">Quantidade de Satélite:</th>
          <td>{props.quantidadeSatelite}</td>
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
          <th scope="row">Identificação de estado:</th>
          <td>{props.identificaoSatelite}</td>
        </tr>
        <tr>
          <th scope="row">Quantidade WIFI:</th>
          <td>{props.quantidadeWifi}</td>
        </tr>
        <tr>
          <th scope="row">WIFIMAC1:</th>
          <td>{props.wifiMac1}</td>
        </tr>
        <tr>
          <th scope="row">Força do WIFI1:</th>
          <td>{props.forcaWifi}</td>
        </tr>
        <tr>
          <th scope="row">WIFIMAC2:</th>
          <td>{props.wifiMac2}</td>
        </tr>
        <tr>
          <th scope="row">Força do WIFI 2:</th>
          <td>{props.forcaWifi2}</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}