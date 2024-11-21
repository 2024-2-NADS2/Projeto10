import React, { createContext, useState } from 'react';

// Cria o contexto
export const UserContext = createContext();

// Cria um provedor de contexto para envolver a aplicação
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para armazenar o usuário

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};