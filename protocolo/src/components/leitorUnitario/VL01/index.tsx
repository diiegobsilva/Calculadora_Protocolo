import React, { useState } from 'react';
import './index.css';
import TabelaSeparacao from '../../TabelaSeparacao';
import { Table } from 'react-bootstrap';

export default function Vl01() {

  //Inicio Variaveis Separação
  const [valorProtocolo, setValorProtocolo] = useState("");
  const [startBit, setStartBit] = useState("");
  const [tamanhoProtocolo, setTamanhoProtocolo] = useState("");
  const [numeroProtocolo, setNumeroProtocolo] = useState("");
  const [informacaoContida, setInformacaoContida] = useState("");
  const [informacaoSequencia, setInformacaoSequencia] = useState("");
  const [errorCheck, setErrorCheck] = useState("");
  const [stopBit, setStopBit] = useState("");

  const [resultado, setResultado] = useState("");
  //Fim Variaveis Separação

  //Inicio Pacote de Login
  const [imei, setImei] = useState("");
  const [modelo, setModelo] = useState("");
  const [fuso, setFuso] = useState("");
  //Fim Pacote de Login

  //Inicio Pacote de HeartBeat
  const [informacaoTerminal, setInformacaoTerminal] = useState("")
  const [tensaoBateriaInterna, setTensaoBateriaInterna] = useState("")
  const [qualidadeGSM, setQualidadeGSM] = useState("")
  const [idiomaStatus, setIdiomaStatus] = useState("")
  //Fim Pacote de HeartBeat

  //Inicio Pacote Dados posição
  const [dataHora, setDataHora] = useState("")
  const [quantidadeSatelite, setQuantidadeSatelite] = useState("")
  const [latiude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [velocidade, setVelocidade] = useState("")
  const [curso, setCurso] = useState("")
  const [mcc, setMcc] = useState("")
  const [mnc, setMnc] = useState("")
  const [lac, setLac] = useState("")
  const [celularId, setCelularId] = useState("")
  const [acc, setAcc] = useState("")
  const [modoUploadDados, setModoUploadDados] = useState("")
  const [tempoRealGps, setTempoRealGps] = useState("")
  //Fim Pacote Dados posição

  const handleSeparacaoClick = () => {
    if (valorProtocolo) {
      const prefixo = valorProtocolo.substring(0, 4);

      if (prefixo === "7878") {
        setStartBit(valorProtocolo.substring(0, 4));
        setTamanhoProtocolo(valorProtocolo.substring(4, 6));
        setNumeroProtocolo(valorProtocolo.substring(6, 8));
        setInformacaoContida(valorProtocolo.substring(8, valorProtocolo.length - 12));
        setInformacaoSequencia(valorProtocolo.substring(valorProtocolo.length - 12, valorProtocolo.length - 8));
        setErrorCheck(valorProtocolo.substring(valorProtocolo.length - 8, valorProtocolo.length - 4));
        setStopBit(valorProtocolo.substring(valorProtocolo.length - 4, valorProtocolo.length - 0));
      } else if (prefixo === "7979") {
        setStartBit(valorProtocolo.substring(0, 4));
        setTamanhoProtocolo(valorProtocolo.substring(4, 8));
        setNumeroProtocolo(valorProtocolo.substring(8, 10));
        setInformacaoContida(valorProtocolo.substring(10, valorProtocolo.length - 12));
        setInformacaoSequencia(valorProtocolo.substring(valorProtocolo.length - 12, valorProtocolo.length - 8));
        setErrorCheck(valorProtocolo.substring(valorProtocolo.length - 8, valorProtocolo.length - 4));
        setStopBit(valorProtocolo.substring(valorProtocolo.length - 4, valorProtocolo.length - 0));
      } else {
        console.log("Prefixo incorreto");
        setStartBit("");
        setTamanhoProtocolo("");
        setNumeroProtocolo("");
        setInformacaoContida("");
        setInformacaoSequencia("");
        setErrorCheck("");
        setStopBit("");
        return;
      }
    }
  };

  const handleLimpezaClick = () => {
    setValorProtocolo("");
    setStartBit("");
    setTamanhoProtocolo("");
    setNumeroProtocolo("");
    setInformacaoContida("");
    setInformacaoSequencia("");
    setErrorCheck("");
    setStopBit("");
  };


  const handleInformacaoContida = (numeroProtocolo: string) => {
    switch (numeroProtocolo) {
      case "01":
        setResultado("Informação de Login");
        break;
      case "13":
        setResultado("Pacote de Heartbeat");
        break;
      case "A0":
        setResultado("Dados de posição (UTC)");
        break;
      case "A4":
        setResultado("Pacote de alarmes (cerca)");
        break;
      case "94":
        setResultado("Pacote de transmissão de informação");
        break;
      case "95":
        setResultado("Pacote de alarmes");
        break;
      case "80":
        setResultado("Comando online");
        break;
      case "C3":
        setResultado("Pacote de informação WIFI");
        break;
      default:
        setResultado("Protocolo não identificado");
    }
  };

  console.log(resultado);


  const handlePacoteLogin = () => {
    if (numeroProtocolo == "01") {
      setImei(informacaoContida.substring(0, 16));
      setModelo(informacaoContida.substring(16, 20));
      setFuso(informacaoContida.substring(20, 24));
    } else {
      console.log("Numer de Protocolo incorreto");
      setImei("");
      setModelo("");
      setFuso("");
    }
  }

  const handlePacoteHeartbeat = () => {
    if (numeroProtocolo == "13") {
      setInformacaoTerminal(informacaoContida.substring(0, 2));
      setTensaoBateriaInterna(informacaoContida.substring(2, 4));
      setQualidadeGSM(informacaoContida.substring(4, 6));
      setIdiomaStatus(informacaoContida.substring(6, 10))
    } else {
      console.log("Numero de Protocolo incorreto");
      setInformacaoTerminal("");
      setTensaoBateriaInterna("");
      setQualidadeGSM("");
      setIdiomaStatus("");
    }
  }

  const handleDadosPosicao = () => {

    if (numeroProtocolo == "A0") {
      setDataHora(informacaoContida.substring(0, 12));
      setQuantidadeSatelite(informacaoContida.substring(12, 14));
      setLatitude(informacaoContida.substring(14, 22));
      setLongitude(informacaoContida.substring(22, 30));
      setVelocidade(informacaoContida.substring(30, 32));
      setCurso(informacaoContida.substring(32, 36));
      setMcc(informacaoContida.substring(36, 40));
      setMnc(informacaoContida.substring(40, 44));
      setLac(informacaoContida.substring(44, 52));
      setCelularId(informacaoContida.substring(52, 68));
      setAcc(informacaoContida.substring(68, 70));
      setModoUploadDados(informacaoContida.substring(70, 72));
      setTempoRealGps(informacaoContida.substring(72, 74));

    } else {
      console.log("Numero de Protocolo incorreto");
      setDataHora("");
      setQuantidadeSatelite("");
      setLatitude("");
      setVelocidade("");
      setCurso("");
      setMcc("");
      setMnc("");
      setLac("");
      setCelularId("");
      setAcc("");
      setModoUploadDados("");
      setTempoRealGps("");
    }
  }


  return (

    <div>
      <TabelaSeparacao
        startBit={startBit}
        tamanhoProtocolo={tamanhoProtocolo}
        numeroProtocolo={numeroProtocolo}
        informacaoContida={informacaoContida}
        informacaoSequencia={informacaoSequencia}
        errorCheck={errorCheck}
        stopBit={stopBit}
        handleSeparacaoClick={handleSeparacaoClick}
        handleLimpezaClick={handleLimpezaClick}
        setValorProtocolo={setValorProtocolo}
        valorProtocolo={valorProtocolo} />
      <div>

        {/* Pacote Login 
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
                <td>{imei}</td>
              </tr>
              <tr>
                <th scope="row">Modelo:</th>
                <td>{modelo}</td>
              </tr>
              <tr>
                <th scope="row">Fuso Horário:</th>
                <td>{fuso}</td>
              </tr>
            </tbody>
          </table>
        </div>*/}

        {/* Pacote de HeatBeat 
        <div className="tableContainer">
          <div className="labelContainer">

          </div>
          <div className="containerLabel">
            <label className="labelTitulo">Pacote de HeatBeat</label>
          </div>
          <table className="customTable">
            <tbody>
              <tr>
                <th scope="row">Informação Terminal:</th>
                <td>{informacaoTerminal}</td>
              </tr>
              <tr>
                <th scope="row">Tensão da Bateria Interna:</th>
                <td>{tensaoBateriaInterna}</td>
              </tr>
              <tr>
                <th scope="row">Qualidade do GSM:</th>
                <td>{qualidadeGSM}</td>
              </tr>
              <tr>
                <th scope="row">Idioma / Status:</th>
                <td>{idiomaStatus}</td>
              </tr>
            </tbody>
          </table>
        </div>*/}


        {/* Pacote de Posição(UTC) */}
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
                <td>{dataHora}</td>
              </tr>
              <tr>
                <th scope="row">Quantidade de satélites GPS:</th>
                <td>{quantidadeSatelite}</td>
              </tr>
              <tr>
                <th scope="row">Latitude:</th>
                <td>{latiude}</td>
              </tr>
              <tr>
                <th scope="row">Longitude:</th>
                <td>{longitude}</td>
              </tr>
              <tr>
                <th scope="row">Velocidade:</th>
                <td>{velocidade}</td>
              </tr>
              <tr>
                <th scope="row">Curso:</th>
                <td>{curso}</td>
              </tr>
              <tr>
                <th scope="row">MCC:</th>
                <td>{mcc}</td>
              </tr>
              <tr>
                <th scope="row">MNC:</th>
                <td>{mnc}</td>
              </tr>
              <tr>
                <th scope="row">LAC:</th>
                <td>{lac}</td>
              </tr>
              <tr>
                <th scope="row">Celular ID:</th>
                <td>{celularId}</td>
              </tr>
              <tr>
                <th scope="row">ACC:</th>
                <td>{acc}</td>
              </tr>
              <tr>
                <th scope="row">Modo de upload de dados:</th>
                <td>{modoUploadDados}</td>
              </tr>
              <tr>
                <th scope="row">Tempo real de GPS:</th>
                <td>{tempoRealGps}</td>
              </tr>

            </tbody>
          </table>
        </div>

        <div className="button-container">
          <button className="buttonInformacaoContida btn-limpeza " onClick={() => handleDadosPosicao()}>Teste</button>
        </div>
      </div>
    </div>
  );
}