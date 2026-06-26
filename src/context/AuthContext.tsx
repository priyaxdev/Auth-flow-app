import { createContext, useState } from "react";
interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(false);
  const [user, setuser] = useState<User | null>(null);
  const login = (email: string, password: string) =>{
    setuser({ name: "Priya", email: email });
    setisLoggedIn(true);
  }
  const logout=()=>{
    setuser(null);
    setisLoggedIn(false);
  }
  return (
    <AuthContext.Provider value={{isLoggedIn,user,login,logout}}>
        {children}
    </AuthContext.Provider>
);
};

export { AuthProvider };
export default AuthContext;
