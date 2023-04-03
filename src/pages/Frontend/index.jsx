import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function index() {
  return (
    <>
     <Routes>
        <Route>
            <Route index element={<Home/>}/>
        </Route>
     </Routes>
    </>
  )
}
