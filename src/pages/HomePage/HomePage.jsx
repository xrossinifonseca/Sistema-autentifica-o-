import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth";

function HomePage() {
  const { logout, authenticated } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <h1>Home page</h1>
      <p>{String(authenticated)}</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
export default HomePage;
