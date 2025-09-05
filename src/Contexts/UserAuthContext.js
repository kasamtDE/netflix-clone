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

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });


  const register = async (e) => {
    e.preventDefault();
    setLoading(true)
    setErrors("") // Clear previous errors

    const { registerEmail, registerPassword } = registerUser;
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
      let errorMessage = error.message;
      
      // Provide user-friendly error messages
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = "This email is already registered. Please try logging in instead.";
      } else if (error.code === 'auth/weak-password') {
        errorMessage = "Password should be at least 6 characters long.";
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = "Please enter a valid email address.";
      }
      
      setErrors(errorMessage)
      console.log("Registration error:", error);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    setLoading(true)
    setErrors("") // Clear previous errors

    const { loginEmail, loginPassword } = loginUser;
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setLoading(false)
      setErrors("")
      console.log("Login successful:", userCredential.user.email);
    } catch (error) {
      setLoading(false)
      let errorMessage = error.message;
      
      // Provide user-friendly error messages
      if (error.code === 'auth/user-not-found') {
        errorMessage = "No account found with this email. Please sign up first.";
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = "Incorrect password. Please try again.";
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = "Please enter a valid email address.";
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = "Too many failed attempts. Please try again later.";
      }
      
      setErrors(errorMessage)
      console.log("Login error:", error);
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
