import { createContext, useState } from "react";

export let Authcontext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [Auth, setisAuth] = useState({
    isAuth: false,
    loading: false,
    error: null,
    token: "",
  });

  const handleAuth = () => {
    Auth === false ? setisAuth(true) : setisAuth(false);
  };
  return (
    <Authcontext.Provider value={{ Auth, handleAuth }}>
      {children}
    </Authcontext.Provider>
  );
};
