import React from 'react';
import { useUserData } from '../hooks/useUserData';

export interface IUserContextData {
  name?: string;
  iconImg?: string;
}

interface IUserContextProps {
  children: React.ReactNode;
}

export const userContext = React.createContext<IUserContextData>({});

export function UserContextProvider({ children }: IUserContextProps) {
  const [data] = useUserData();
  return (
    <userContext.Provider value={data}>
      {children}
    </userContext.Provider>
  );
}
