import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const INITIAL_STATE = localStorage.getItem("refreshToken") ? true : false;
const INITIAL_NAME = localStorage.getItem("userName") || "";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(INITIAL_STATE);
  const [name, setName] = useState(INITIAL_NAME);

  // Fungsi untuk mengatur nama dengan menyimpan ke localStorage
  const setUserName = (newName) => {
    setName(newName);
    localStorage.setItem("userName", newName);
  };

  // Effect untuk mengambil nama dari token saat mount
  useEffect(() => {
    const token = localStorage.getItem("refreshToken");
    if (token && !name) {
      try {
        const decoded = jwtDecode(token);
        setUserName(decoded.name);
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userName");
        setIsLoggedIn(false);
        setName("");
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, 
      setIsLoggedIn, 
      name, 
      setName: setUserName // Gunakan fungsi wrapper
    }}>
      {children}
    </AuthContext.Provider>
  );
};