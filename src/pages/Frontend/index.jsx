import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Home';
import About from './About/About';
export default function index() {
  return (
    <>
    <Header/>
    <main>
     <Routes>
        <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
        </Route>
     </Routes>
     </main>
     <Footer/>
    </>
  )
}
