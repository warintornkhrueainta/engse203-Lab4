// src/contexts/AuthContext.jsx
import { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null means logged out

  const login = (username) => setUser({ name: username });
  const logout = () => setUser(null);

  // แก้ไข value ให้มีทั้ง user, login, logout
  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
