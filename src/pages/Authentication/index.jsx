import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login/Login'
import Register from './Register/Register'
import Header from '../Frontend/Components/Header/Header'

export default function index() {
  return (
    <>
      <Header/>

     <Routes>
        <Route path='/'>
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
        </Route>
     </Routes>
    </>
  )
}
