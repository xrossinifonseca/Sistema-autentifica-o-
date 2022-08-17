import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/Auth";

import "./login.css";

function LoginPages() {
  // context
  const { authenticated, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    login(email, password); //integração com o contexto//api
  };

  return (
    <div className="login">
      <h1 className="tile">SIGN IN</h1>
      {/* <p>{String(authenticated)}</p> */}
      <p>Efetue login para se conectar</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="EMAIL"
          />
        </div>
        <div className="field">
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="PASSWORD"
          />
        </div>
        <div className="actions">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
}
export default LoginPages;
