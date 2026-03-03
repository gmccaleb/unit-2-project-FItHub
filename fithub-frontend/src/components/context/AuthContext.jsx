import { createContext, useContext, useState } from "react";

// Holds authentication state and functions
const AuthContext = createContext();

// AuthProvider wraps the entire app and provides auth state to all components
export function AuthProvider({ children }) {
  
  const [user, setUser] = useState(null);

 
  // Fake auth, stores the user data in state
  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    // Makes auth data and functions available to the entire app
    <AuthContext.Provider
      value={{
        user,                    // The current user object
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