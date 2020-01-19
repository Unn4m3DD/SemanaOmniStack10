import React, { useState, useEffect } from 'react';
import './styles.css';
import api from "../../services/api"
function RegisterForm() {
  const [name, setName] = useState("")
  const [techs, setTechs] = useState("")
  const [gitUserName, setGitUserName] = useState("")
  const [location, setLocation] = useState("")
  useEffect(() => {
    (async () => {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation(pos.coords.longitude + "," + pos.coords.latitude)
      })

    })()

  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setTechs([]);
    setGitUserName("")
    api.post("devs", {
      name, techs, gitHubName: gitUserName, geo: location
    })
  }
  return (
    <>
      <form className="devForm" onSubmit={handleSubmit}>
        <strong>Register </strong>
        <div className="inputContainer">
          <label>Name:</label>
          <input value={name} onChange={e => setName(e.target.value)} />
        </div>

        <div className="inputContainer">
          <label>Technologies:</label>
          <input value={techs} onChange={e => setTechs(e.target.value)} />
        </div>

        <div className="inputContainer">
          <label>GitHub Username:</label>

          <input value={gitUserName} onChange={e => setGitUserName(e.target.value)} />
        </div>

        <div className="inputContainer">
          <label>Location:</label>

          <input value={location} onChange={e => setLocation(e.target.value)} />
        </div>
        <input type="submit" className="submitButton" />
      </form>
    </>
  );
}
// name, techs, gitHubName, geo
export default RegisterForm;
