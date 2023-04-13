import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Frontend from './Frontend';
import Authentication from './Authentication';
import Header from './Frontend/Components/Header';
export default function index() {
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path='/*' element={<Frontend/>} />
          <Route path='/autentication/*' element={<Authentication/>} />
          {/* <Route path='/Uploads/*' element={<Authentication/>} /> */}
      </Routes>
     </BrowserRouter>
    </>
  )
}
