import React, { useState } from 'react';
import './index.css';

interface Props {
  imei: string,
  modelo: string,
  fuso: string,
}
export default function PacoteLogin(props: Props) {

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