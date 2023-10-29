import React, { useState } from 'react';
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
}


export default function PacoteAlarmeCerca(props: Props) {

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