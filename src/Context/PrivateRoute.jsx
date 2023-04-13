import React from 'react'
import { useContext } from 'react';
import Register from '../pages/Authentication/Register'

export default function PrivateRoute(props) {
    const {isAuthentication} = AuthContext(useContext)

    const {Component} = props
    if(!isAuthentication){
      <Register/>
    }
  return (
    <Component/>
  )
}
