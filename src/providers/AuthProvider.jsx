import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  const login = async ({ email, password }) => {
    try {
      const response = await api.post("/auth/login", { email, password });

      setAuth({
        user: response.data.user,
        tokens: {
          accessToken: response.data.token.token,
          refreshToken: response.data.token.refreshToken,
        },
      });

      navigate("/");
    } catch (error) {
      if (error.status === 500) {
        setAuth({
          error: error?.response?.data?.error || "Server error",
        });
      }
    }
  };

  return <AuthContext value={{ auth, login, setAuth }}>{children}</AuthContext>;
};
export default AuthProvider;
