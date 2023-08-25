import React, { useState, createContext } from "react";

export interface UserType {
  firstName: string;
  lastName: string;
  identityNumber: string;
  bornDate: string;
  email: string;
  password: string;
  passwordConfirm: string;
  gender: string;
}

interface UserContextType {
  user: UserType;
  setUser: (user: UserType) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType>();
  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
