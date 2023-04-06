import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Header from './Components/Header/Header'

export default function index() {
  return (
    <>
    <Header/>
     <Routes>
        <Route path='/'>
            {/* <Route index element={<Home/>}/> */}
        </Route>
     </Routes>
    </>
  )
}
