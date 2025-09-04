import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";

const UserAuthContext = createContext({});
export const useAuthContext = () => useContext(UserAuthContext);

export default function UserAuthContextProvider({ children }) {
  const [registerUser, setRegisterUser] = useState({
    registerEmail: "",
    registerPassword: "",
  });
  const [loginUser, setLoginUser] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState("");
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);


  const register = async (e) => {
    e.preventDefault();
    setLoading(true)

    const { registerEmail, registerPassword } = registerUser;
    try {
      const checkUser = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setLoading(false)
      setErrors("")
    } catch (error) {
      setLoading(false)
      setErrors(error.message)
      console.log(error);
    }
  };

  const login = async (e) => {
    setLoading(true)
    e.preventDefault();

    const { loginEmail, loginPassword } = loginUser;
   return signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then(() =>{
      setLoading(false)
      setErrors("")
    })
    .catch((err) => {
        setLoading(false)
        setErrors(err.message)
        console.log(err)  
      });
  };
  const logout = async (e) => {
    e.preventDefault();
    setLoginUser({loginEmail:"",loginPassword:""})
    await signOut(auth);
  };

  return (
    <UserAuthContext.Provider
      value={{
        register,
        login,
        logout,
        loginUser,
        setLoginUser,
        registerUser,
        setRegisterUser,
        user,
        setUser,
        loading,
        setLoading,
        errors
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}
