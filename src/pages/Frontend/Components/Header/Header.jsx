import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

  return (


    <div className="container-fluid bg-dark py-2">
      <div className="row">
        <div className="col-lg-7 col-md-5 text-white">
          <h2>openpic</h2>
        </div>
        <div className="col-2 text-end">
        <div className="dropdown">
            <button className="dropbtn btn btn-light rounded-2 mt-1 me-5">
              <i className='bi bi-caret-left me-1 '></i>
              <i className='bi bi-caret-right text-success '></i>
                <span className='text'>Explore</span>
            </button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3">
         
          <Link to='/login' className='btn btn-light mt-1 me-4'>Login</Link>
          <Link to='/signup' className='btn btn-light mt-1 me-5'>join</Link>
          
        </div>
        <div className="col-1">
        <button className='btn btn-warning text-white fw-bold mt-1'>Upload</button>
        </div>
      </div>
    </div>











  )
}
