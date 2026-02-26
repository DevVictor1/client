import { createContext, useEffect, useMemo, useState } from "react";
import { decodeToken } from "../utils/auth";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken) {
      setToken(storedToken);

      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          setUser(null);
        }
      } else {
        const decoded = decodeToken(storedToken);
        if (decoded?.id) {
          setUser({ id: decoded.id });
        }
      }
    }

    setInitializing(false);
  }, []);

  const login = (tokenValue, userValue) => {
    localStorage.setItem("token", tokenValue);
    setToken(tokenValue);

    if (userValue) {
      localStorage.setItem("user", JSON.stringify(userValue));
      setUser(userValue);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated: Boolean(token),
      initializing,
      login,
      logout,
    }),
    [user, token, initializing]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
