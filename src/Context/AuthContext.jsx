import React from 'react'
import { createContext } from 'react'

export const AuthContext = createContext(AuthContext)

export default function AuthContextProvider(props) {
  return (
    <>
      <AuthContext>
        {props.Childern}
      </AuthContext>
    </>
  )
}
