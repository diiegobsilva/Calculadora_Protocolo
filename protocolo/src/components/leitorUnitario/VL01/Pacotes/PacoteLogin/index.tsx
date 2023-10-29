import React, { useEffect, useState } from 'react';
import './index.css';

interface Props {
  imei: string,
  modelo: string,
  fuso: string,
  setImei: Function
  setModelo: Function
  setFuso: Function
  numeroProtocolo: string,
  informacaoContida: string,
}
export default function PacoteLogin(props: Props) {

  const handlePacoteLogin = () => {
    if (props.numeroProtocolo == "01") {
      props.setImei(props.informacaoContida.substring(0, 16));
      props.setModelo(props.informacaoContida.substring(16, 20));
      props.setFuso(props.informacaoContida.substring(20, 24));
    } else {
      console.log("Numer de Protocolo incorreto");
      props.setImei("");
      props.setModelo("");
      props.setFuso("");
    }
  }
  
  useEffect(() => {
    handlePacoteLogin()
  },[])

  return (

    <div className="tableContainer">
      <div className="labelContainer">

      </div>
      <div className="containerLabel">
        <label className="labelTitulo">Pacote de Login</label>
      </div>
      <table className="customTable">
        <tbody>
          <tr>
            <th scope="row">IMEI:</th>
            <td>{props.imei}</td>
          </tr>
          <tr>
            <th scope="row">Modelo:</th>
            <td>{props.modelo}</td>
          </tr>
          <tr>
            <th scope="row">Fuso Horário:</th>
            <td>{props.fuso}</td>
          </tr>
        </tbody>
      </table>
    </div>

  );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               