import React, { useState } from 'react';
import './index.css';

interface Props {
  tamanhoComando: string,
  bitBandeiraServidor: string,
  conteudoComando: string,
  linguagem: string,
}

export default function ComandoOnline(props: Props) {

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