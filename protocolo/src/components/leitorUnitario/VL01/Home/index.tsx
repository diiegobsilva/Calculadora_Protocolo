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
        {(() => {
        switch (numeroProtocolo) {
          case "01":
            return <PacoteLogin imei={imei} modelo={modelo} fuso={fuso} setImei={setImei} setModelo={setModelo} setFuso={setFuso} numeroProtocolo={numeroProtocolo} informacaoContida={informacaoContida} />;
          case "13":
            return <PacoteHeartbeat informacaoTerminal={informacaoTerminal} tensaoBateriaInterna={tensaoBateriaInterna} qualidadeGSM={qualidadeGSM} idiomaStatus={idiomaStatus} setInformacaoTerminal={setInformacaoTerminal} setTensaoBateriaInterna={setTensaoBateriaInterna} setQualidadeGSM={setQualidadeGSM} setIdiomaStatus={setIdiomaStatus} informacaoContida={informacaoContida} numeroProtocolo={numeroProtocolo} />;
          case "A0":
            return <PacoteDadosGps dataHora={dataHora} quantidadeSatelite={quantidadeSatelite} latitude={latitude} longitude={longitude} lac={lac} velocidade={velocidade} curso={curso} mcc={mcc} mnc={mnc} celularId={celularId} acc={acc} modoUploadDados={modoUploadDados} tempoRealGps={tempoRealGps} setDataHora={setDataHora} setQuantidadeSatelite={setQuantidadeSatelite} setLatitude={setLatitude} setLongitude={setLongitude} setVelocidade={setVelocidade} setCurso={setCurso} setMcc={setMcc} setMnc={setMnc} setLac={setLac} setCelularId={setCelularId} setAcc={setAcc} setModoUploadDados={setModoUploadDados} setTempoRealGps={setTempoRealGps} numeroProtocolo={numeroProtocolo} informacaoContida={informacaoContida} />;
          case "A4":
            return <PacoteAlarmeCerca dataHora={dataHora} quantidadeSatelite={quantidadeSatelite} latitude={latitude} longitude={longitude} velocidade={velocidade} tamanhoLbs={tamanhoLbs} curso={curso} mcc={curso} mnc={mnc} lac={lac} celularId={celularId} informacaoDoTerminal={informacaoDoTerminal} tensaoDeBateriaInterna={tensaoDeBateriaInterna} qualidadeDoSinalGsm={qualidadeDoSinalGsm} alarmeLinguagem={alarmeLinguagem} cerca={cerca} setDataHora={setDataHora} setQuantidadeSatelite={setQuantidadeSatelite} setLatitude={setLatitude} setLongitude={setLongitude} setVelocidade={setVelocidade} setCurso={setCurso} setTamanhoLbs={setTamanhoLbs} setMcc={setMcc} setMnc={setMnc} setLac={setLac} setCelularId={setCelularId} setInformacaoDoTerminal={setInformacaoDoTerminal} setTensaoDeBateriaInterna={setTensaoDeBateriaInterna} setQualidadeDoSinalGsm={setQualidadeDoSinalGsm} setAlarmeLinguagem={setAlarmeLinguagem} setCerca={setCerca} numeroProtocolo={numeroProtocolo} informacaoContida={informacaoContida} />;
          case "94":
            return <PacoteTransmissaoInformacao tipoInformacao={tipoInformacao} conteudoDados={conteudoDados} setTipoInformacao={setTipoInformacao} numeroProtocolo={numeroProtocolo} setConteudoDados={setConteudoDados} informacaoContida={informacaoContida} />;
          case "95":
            return <PacoteAlarme dataHora={dataHora} latitude={latitude} longitude={longitude} curso={curso} alarmeLinguagem={alarmeLinguagem} alarme={alarme} setDataHora={setDataHora} setLatitude={setLatitude} setLongitude={setLongitude} setCurso={setCurso} setAlarmeLinguagem={setAlarmeLinguagem} setAlarme={setAlarme} numeroProtocolo={numeroProtocolo} informacaoContida={informacaoContida} />;
          case "80":
            return <ComandoOnline tamanhoComando={tamanhoComando} bitBandeiraServidor={bitBandeiraServidor} conteudoComando={conteudoComando} linguagem={linguagem} setTamanhoComando={setTamanhoComando} setBitBandeiraServidor={setBitBandeiraServidor} setConteudoComando={setConteudoComando} setLinguagem={setLinguagem} numeroProtocolo={numeroProtocolo} informacaoContida={informacaoContida} />;
          case "C3":
            return <PacoteInformacaoWifi dataHora={dataHora} quantidadeSatelite={quantidadeSatelite} latitude={latitude} longitude={longitude} identificaoSatelite={identificaoSatelite} quantidadeWifi={quantidadeWifi} wifiMac1={wifiMac1} forcaWifi={forcaWifi} wifiMac2={wifiMac2} forcaWifi2={forcaWifi2} setDataHora={setDataHora} setQuantidadeSatelite={setQuantidadeSatelite} setLatitude={setLatitude} setLongitude={setLongitude} setIdentificacaoEstado={setIdentificacaoEstado} setQuatidadeWifi={setQuatidadeWifi} setWifiMac1={setWifiMac1} setForcaWifi={setForcaWifi} setWifiMac2={setWifiMac2} setForcaWifi2={setForcaWifi2} numeroProtocolo={numeroProtocolo} informacaoContida={informacaoContida}/>;
          default:
            console.log("Protocolo não identificado");
            return null;
        }
        })()}
      </div>
    </div>
  );
}