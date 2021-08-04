import React, { useState, useEffect, useCallback, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [alunes, setAlunes] = useState([
    "Adriano Nascimento",
    "Bruno",
    "Carlos Eduardo",
    "Elias Santana"

  ]);


  const [title, setTitle] = useState("Lista de chamada da turma 2A")

  const [registro, setRegistro] = useState("");

  useEffect(()=>{
    localStorage.setItem("alunes", JSON.stringify(alunes))
  },[alunes]);


  useEffect(()=>{
    const alunesReg = localStorage.getItem("alunes");

    if (alunesReg){

      setAlunes(JSON.parse(alunesReg));
    }
  }, []);

  const adicionando = useCallback(() => {
      
    setAlunes([...alunes,registro]);
    setRegistro("");
  },[registro,alunes]);


  const totalAlunes = useMemo(() => alunes.length,[alunes]);



  const checking = 
  useState(
  <div className="presente"><p>Presente?</p><input type="checkbox" ></input><hr></hr></div>);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
                <a
          className="App-link"
          href="https://blueedtech.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acesse a Blue
        </a>
      </header>
      
      <>
    <div className="table">
    <ul>
      <h2>{title}</h2><hr></hr>
    {alunes.map((alune)=>(<li key = {alune}>{alune}{checking}</li>))}
    </ul>
    </div>
    <br/>
    <p>Estamos com {totalAlunes} pessoas na turma!</p>
    <input className="entrada" type="text" value= {registro} onChange={(e)=> setRegistro(e.target.value)}
    />
    <button type="button" onClick={adicionando}>Add</button>
    </>
    </div>
  );
}

export default App;
