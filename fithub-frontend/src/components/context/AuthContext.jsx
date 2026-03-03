import { createContext, useContext, useState } from "react";

// Holds authentication state and functions
const AuthContext = createContext();

// AuthProvider wraps the entire app and provides auth state to all components
export function AuthProvider({ children }) {
    // uses local storage to keep user logged in across page refreshes
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("fithub_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Fake auth, stores the user data in state
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("fithub_user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("fithub_user");
  };

  return (
    // Makes auth data and functions available to the entire app
    <AuthContext.Provider
      value={{
        user, // The current user object
        isAuthenticated: !!user, // Converts user to true/false based on whether it exists
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Call useAuth() instead of writing useContext(AuthContext) everywhere

export function useAuth() {
  return useContext(AuthContext);
}
