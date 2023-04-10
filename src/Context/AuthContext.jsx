import React, { createContext, useEffect, useReducer, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth } from "../Config/Firebase";

export const AuthContext = createContext();
const initialState = { isAuthenticated: false, user: { uid: "" } }
const reducer = ((state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: payload.user,
      };
    case "LOGOUT":
      return {
        isAuthenticated: false,
      };
    default:
      return state;
  }
})
export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState({})
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        dispatch({ type: "LOGIN", payload: user })
      } else {
        setUser({})
      }
      console.log(user)
    })

  }, [])
  return (
    <AuthContext.Provider value={{ ...state, dispatch, user }}>
      {children}
    </AuthContext.Provider>
  );
}
