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
    setErrors("");

    const { registerEmail, registerPassword } = registerUser;
    
    // Basic validation
    if (!registerEmail || !registerPassword) {
      setErrors("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (registerPassword.length < 6) {
      setErrors("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      const checkUser = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setLoading(false)
      setErrors("")
      console.log("Registration successful:", checkUser.user.email);
    } catch (error) {
      setLoading(false)
      setErrors(error.message)
      console.error("Registration error:", error);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    setLoading(true)
    setErrors("");

    const { loginEmail, loginPassword } = loginUser;
    
    // Basic validation
    if (!loginEmail || !loginPassword) {
      setErrors("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setLoading(false)
      setErrors("")
      console.log("Login successful:", userCredential.user.email);
    } catch (err) {
      setLoading(false)
      setErrors(err.message)
      console.error("Login error:", err);
    }
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
