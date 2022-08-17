import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import HomePage from "./pages/HomePage/HomePage";
import LoginPages from "./pages/LoginPage/LoginPages";

import { AuthProvider, AuthContext } from "./context/Auth";

const AppRouter = () => {
  // rota conviencia
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">LOADING...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPages />}></Route>
          <Route
            path="/"
            element={
              <Private>
                <HomePage />
              </Private>
            }
          ></Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};
export default AppRouter;
