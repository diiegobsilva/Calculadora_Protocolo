import { useState } from 'react';
import './index.css';
import TabelaSeparacao from '../../../TabelaSeparacao';
import PacoteLogin from '../Pacotes/PacoteLogin';
import PacoteHeartbeat from '../Pacotes/PacoteHeartbeat';
import PacoteDadosGps from '../Pacotes/PacoteDadosGps';
import PacoteAlarme from '../Pacotes/PacoteAlarme';
import PacoteAlarmeCerca from '../Pacotes/PacoteAlarmeCerca';
import PacoteTransmissaoInformacao from '../Pacotes/PacoteTransmissaoInformacao';
import ComandoOnline from '../Pacotes/ComandoOnline';
import PacoteInformacaoWifi from '../Pacotes/PacoteInformacaoWifi';

export default function Vl01() {

  const [componentAtual, setComponentAtual] =  useState<React.ReactNode | null>(null);

  //Inicio Variaveis Separação
  const [valorProtocolo, setValorProtocolo] = useState("");
  const [startBit, setStartBit] = useState("");
  const [tamanhoProtocolo, setTamanhoProtocolo] = useState("");
  const [numeroProtocolo, setNumeroProtocolo] = useState("");
  const [informacaoContida, setInformacaoContida] = useState("");
  const [informacaoSequencia, setInformacaoSequencia] = useState("");
  const [errorCheck, setErrorCheck] = useState("");
  const [stopBit, setStopBit] = useState("");
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
  const [latitude, setLatitude] = useState("")
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

  //Inicio Pacote de Alarme 
  const [alarmeLinguagem, setAlarmeLinguagem] = useState("")
  const [alarme, setAlarme] = useState("")
  //Fim Pacote de Alarme 

  //Inicio Pacote de Alarme (Cerca)
  const [tamanhoLbs, setTamanhoLbs] = useState("")
  const [informacaoDoTerminal, setInformacaoDoTerminal] = useState("")
  const [tensaoDeBateriaInterna, setTensaoDeBateriaInterna] = useState("")
  const [qualidadeDoSinalGsm, setQualidadeDoSinalGsm] = useState("")
  const [cerca, setCerca] = useState("")
  //Fim Pacote de Alarme (Cerca)

  //Inicio Comando Online
  const [tamanhoComando, setTamanhoComando] = useState("")
  const [bitBandeiraServidor, setBitBandeiraServidor] = useState("")
  const [conteudoComando, setConteudoComando] = useState("")
  const [linguagem, setLinguagem] = useState("")
  //Fim Comando Online

  //Inicio Pacote Transmissão de Informação
  const [tipoInformacao, setTipoInformacao] = useState("")
  const [conteudoDados, setConteudoDados] = useState("")
  //Fim Pacote Transmissão de Informação

  //Inicio Pacote de informação WIFI
  const [identificacaoEstado, setIdentificacaoEstado] = useState("")
  const [quantidadeWifi, setQuatidadeWifi] = useState("")
  const [wifiMac1, setWifiMac1] = useState("")
  const [forcaWifi, setForcaWifi] = useState("")
  const [wifiMac2, setWifiMac2] = useState("")
  const [forcaWifi2, setForcaWifi2] = useState("")
  const [identificaoSatelite, setIdentificaoSatelite] = useState("")
  //Fim Pacote de informação WIFI

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
        setComponentAtual(<PacoteLogin imei={imei} modelo={modelo} fuso={fuso} />);
        break;
      case "13":
        setComponentAtual(<PacoteHeartbeat informacaoTerminal={informacaoTerminal} tensaoBateriaInterna={tensaoBateriaInterna} qualidadeGSM={qualidadeGSM} idiomaStatus={idiomaStatus} />);
        break;
      case "A0":
        setComponentAtual(<PacoteDadosGps dataHora={dataHora} quantidadeSatelite={quantidadeSatelite} latitude={latitude} longitude={longitude} lac={lac} velocidade={velocidade} curso={curso} mcc={mcc} mnc={mnc} celularId={celularId} acc={acc} modoUploadDados={modoUploadDados} tempoRealGps={tempoRealGps} />);
        break;      
      case "A4":
        setComponentAtual(<PacoteAlarmeCerca dataHora={dataHora} quantidadeSatelite={quantidadeSatelite} latitude={latitude} longitude={longitude} velocidade={velocidade} tamanhoLbs={tamanhoLbs} curso={curso} mcc={curso} mnc={mnc} lac={lac} celularId={celularId} informacaoDoTerminal={informacaoDoTerminal} tensaoDeBateriaInterna={tensaoDeBateriaInterna} qualidadeDoSinalGsm={qualidadeDoSinalGsm} alarmeLinguagem={alarmeLinguagem} cerca={cerca} />);
        break;
      case "94":
        setComponentAtual(<PacoteTransmissaoInformacao tipoInformacao={tipoInformacao} conteudoDados={conteudoDados} />);
        break;
      case "95":
        setComponentAtual(<PacoteAlarme dataHora={dataHora} latitude={latitude} longitude={longitude} curso={curso} alarmeLinguagem={alarmeLinguagem} alarme={alarme} />);
        break;
      case "80":
        setComponentAtual(<ComandoOnline tamanhoComando={tamanhoComando} bitBandeiraServidor={bitBandeiraServidor} conteudoComando={conteudoComando} linguagem={linguagem} />);
        break;     
      case "C3":
        setComponentAtual(<PacoteInformacaoWifi dataHora={dataHora} quantidadeSatelite={quantidadeSatelite} latitude={latitude} longitude={longitude} identificaoSatelite={identificaoSatelite} quantidadeWifi={quantidadeWifi} wifiMac1={wifiMac1} forcaWifi={forcaWifi} wifiMac2={wifiMac2} forcaWifi2={forcaWifi2}/>);
        break;
        default:
          console.log("Protocolo não identificado");
          setComponentAtual(null); 
      }
  };

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

  const handlePacoteAlarme = () => {
    if (numeroProtocolo == "95") {
      setDataHora(informacaoContida.substring(0, 12)); //12
      setLatitude(informacaoContida.substring(12, 20)); //8
      setLongitude(informacaoContida.substring(20, 28)); //8
      setCurso(informacaoContida.substring(28, 32)); //4
      setAlarmeLinguagem(informacaoContida.substring(32, 34)); //2
      setAlarme(informacaoContida.substring(34)); //N
    } else {
      console.log("Numero de Protocolo incorreto");
      setDataHora("");
      setLatitude("");
      setLongitude("");
      setCurso("");
      setAlarmeLinguagem("");
      setAlarme("");
    }
  }

  const handlePacoteAlarmesCerca = () => {
    if (numeroProtocolo == "A4") {
      setDataHora(informacaoContida.substring(0, 12));
      setQuantidadeSatelite(informacaoContida.substring(12, 14));
      setLatitude(informacaoContida.substring(14, 22));
      setLongitude(informacaoContida.substring(22, 30));
      setVelocidade(informacaoContida.substring(30, 32));
      setCurso(informacaoContida.substring(32, 36));
      setTamanhoLbs(informacaoContida.substring(36, 38));
      setMcc(informacaoContida.substring(38, 42));
      setMnc(informacaoContida.substring(42, 44));
      setLac(informacaoContida.substring(44, 48));
      setCelularId(informacaoContida.substring(48, 54));
      setInformacaoDoTerminal(informacaoContida.substring(54, 56));
      setTensaoDeBateriaInterna(informacaoContida.substring(56, 58));
      setQualidadeDoSinalGsm(informacaoContida.substring(58, 60));
      setAlarmeLinguagem(informacaoContida.substring(60, 64));
      setCerca(informacaoContida.substring(64, 66));

    } else {
      console.log("Numero de Protocolo incorreto");
      setDataHora("");
      setQuantidadeSatelite("");
      setLatitude("");
      setVelocidade("");
      setCurso("");
      setTamanhoLbs("");
      setMcc("");
      setMnc("");
      setLac("");
      setCelularId("");
      setInformacaoDoTerminal("");
      setTensaoDeBateriaInterna("");
      setQualidadeDoSinalGsm("");
      setAlarmeLinguagem("");
      setCerca("");
    }
  }

  const handleTransmissaoInformacao = () => {
    if (numeroProtocolo == "94") {
      setTipoInformacao(informacaoContida.substring(0, 2));
      setConteudoDados(informacaoContida.substring(2));
    } else {
      console.log("Numero de Protocolo incorreto");
      setTipoInformacao("");
      setConteudoDados("");
    }
  }

  const handleComandoOnline = () => {
    if (numeroProtocolo == "80") {
      setTamanhoComando(informacaoContida.substring(0, 2));
      setBitBandeiraServidor(informacaoContida.substring(2, 10));
      setConteudoComando(informacaoContida.substring(10, informacaoContida.length - 4));
      setLinguagem(informacaoContida.substring(informacaoContida.length - 4));
    } else {
      console.log("Numero de Protocolo incorreto");
      setTamanhoComando("");
      setBitBandeiraServidor("");
      setConteudoComando("");
      setLinguagem("");
    }
  }

  const handleInformacaoWifi = () => {
    if (numeroProtocolo == "C3") {
      setDataHora(informacaoContida.substring(0, 12)); // 12
      setQuantidadeSatelite(informacaoContida.substring(12, 14)); // 2
      setLatitude(informacaoContida.substring(14, 22)); // 8
      setLongitude(informacaoContida.substring(22, 30)); // 8
      setIdentificacaoEstado(informacaoContida.substring(30, 34)); // 4
      setQuatidadeWifi(informacaoContida.substring(34, 36)); // 2
      setWifiMac1(informacaoContida.substring(36, 48)); // 12
      setForcaWifi(informacaoContida.substring(48, 50)); // 2
      setWifiMac2(informacaoContida.substring(50, 62)); // 12
      setForcaWifi2(informacaoContida.substring(62, 64)); // 2  
    } else {
      console.log("Numero de Protocolo incorreto");
      setDataHora("");
      setQuantidadeSatelite("");
      setLatitude("");
      setLongitude("");
      setIdentificacaoEstado("");
      setQuatidadeWifi("");
      setWifiMac1("")
      setForcaWifi("")
      setWifiMac2("")
      setForcaWifi2("")
      setIdentificaoSatelite("")
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
        <div className="button-container">
          <button className="buttonInformacaoContida btn-limpeza " onClick={() => handleInformacaoContida(numeroProtocolo)}>Teste</button>
        </div>

        {componentAtual && (
        <div>
          {componentAtual}
        </div>
      )}
      </div>
    </div>
  );
}