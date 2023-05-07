import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Home';
import About from './About/About';
import Blogs from './Blogs/Blogs';
import Upload from './Upload/Upload';
import MyUploads from './MyUploads/MyUploads';
import ImageView from './ImageView/ImageView';
export default function index() {
  return (
    <>
    <Header/>
    <main>
     <Routes>
        <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='blogs' element={<Blogs/>}/>
            <Route path='upload' element={<Upload/>}/>
            <Route path='myuploads' element={<MyUploads/>}/>
            {/* <Route path='imageview' element={<ImageView/>}/> */}
        </Route>
     </Routes>
     </main>
     <Footer/>
    </>
  )
}
