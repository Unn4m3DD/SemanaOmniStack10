import React, { useState, useEffect } from 'react';
import './App.css';
import RegisterForm from './Components/RegisterForm';
import DevComponent from './Components/DevComponent';
import api from "./services/api"

function App() {
  const [devs, setDevs] = useState([]);
  useEffect(() => {
    const loadDevs = async () => {
      setDevs((await api.get("/devs")).data)
    }
    loadDevs()
  }, [])
  return (
    <div className="App">
      <aside>
        <RegisterForm />
      </aside>
      <main>
        <ul>
          {devs.map((dev) => <li key={dev._id}> <DevComponent dev={dev} /></li>)}
        </ul>
      </main>

    </div>
  );
}

export default App;
