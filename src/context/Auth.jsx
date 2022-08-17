import React, { useState, useEffect, createContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

// backend server
// import { api, createSession } from "../services/Api";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navagite = useNavigate();

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // const response = await createSession(email, password);

    console.log("login", { email, password });

    // api criar  um session
    const loggedUser = {
      id: "123",
      email,
    };
    // const loggedUser = response.data.sessions;

    localStorage.setItem("user", JSON.stringify(loggedUser));

    if (password === "123") {
      setUser(loggedUser);
      navagite("/");
    }
  };

  const logout = () => {
    console.log("logout");
    setUser(null);
    localStorage.removeItem("user");
    Navigate("/login");
  };
  //   user ==null
  //  authenticated = false

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
