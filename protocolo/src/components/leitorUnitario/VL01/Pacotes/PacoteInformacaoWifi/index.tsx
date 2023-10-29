import React, { useEffect, useState } from 'react';
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
  setDataHora: Function
  setQuantidadeSatelite: Function
  setLatitude: Function
  setLongitude: Function
  setIdentificacaoEstado: Function
  setQuatidadeWifi: Function
  setWifiMac1: Function
  setForcaWifi: Function
  setWifiMac2: Function
  setForcaWifi2: Function
  numeroProtocolo: string,
  informacaoContida: string,
}

export default function PacoteInformacaoWifi(props: Props) {

  const handleInformacaoWifi = () => {

    if (props.numeroProtocolo == "C3") {
      props.setDataHora(props.informacaoContida.substring(0, 12)); 
      props.setQuantidadeSatelite(props.informacaoContida.substring(12, 14)); 
      props.setLatitude(props.informacaoContida.substring(14, 22)); 
      props.setLongitude(props.informacaoContida.substring(22, 30)); 
      props.setIdentificacaoEstado(props.informacaoContida.substring(30, 34)); 
      props.setQuatidadeWifi(props.informacaoContida.substring(34, 36)); 
      props.setWifiMac1(props.informacaoContida.substring(36, 48)); 
      props.setForcaWifi(props.informacaoContida.substring(48, 50)); 
      props.setWifiMac2(props.informacaoContida.substring(50, 62)); 
      props.setForcaWifi2(props.informacaoContida.substring(62, 64)); 
    } else {
      console.log("Numero de Protocolo incorreto");
      props.setDataHora("");
      props.setQuantidadeSatelite("");
      props.setLatitude("");
      props.setLongitude("");
      props.setIdentificacaoEstado("");
      props.setQuatidadeWifi("");
      props.setWifiMac1("")
      props.setForcaWifi("")
      props.setWifiMac2("")
      props.setForcaWifi2("")
    }
  }

  useEffect(() => {
    handleInformacaoWifi()
  },[])

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