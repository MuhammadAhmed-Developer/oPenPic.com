import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  const isAuthentication = true

  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark">
          <div class="container-fluid">
            <Link to='/' class="navbar-brand ms-3"><h2> o<span className='p'>P</span>en<span className='p'>P</span>ic </h2></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown dropstart me-5">
                  <button class="btn nav-link dropdown-toggle active" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Explore
                  </button>
                  <ul class="dropdown-menu drop bg-dark ">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-4">
                          <ul>
                            <li className='mb-3'><strong className='text-white'>Discover</strong></li>
                            <li><a href="">Editors's</a></li>
                            <li><a href="">Images</a></li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li className='mb-3'><strong className='text-white'>Community</strong></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Creator</a></li>
                            <li><a href="">Cameras</a></li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li className='mb-3'><strong className='text-white'>About</strong></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">License</a></li>
                            <li><a href=""> Services</a></li>
                            <li><a href="">Privacy Policy</a></li>
                          </ul>
                        </div>

                      </div>
                    </div>
                  </ul>
                </li>
                <li class="nav-item">
                  <Link to='/' class="nav-link active btn me-4" aria-current="page" href="#">
                    {!isAuthentication ? 'LogIn' : <><i class="bi bi-bell"></i></>}
                  </Link>
                </li>
                {!isAuthentication ? <></>:<>
                <li class="nav-item dropdown dropbottom bg-dark">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className='border p-3 rounded-5'></button>
          </a>
          <ul class="dropdown-menu bg-dark ">
            <li><a class="dropdown-item text-white" href="#">Action</a></li>
            <li><a class="dropdown-item text-white" href="#">Another action</a></li>
            <li><hr class="dropdown-divider text-white"/></li>
            <li><a class="dropdown-item text-white" href="#">Something else here</a></li>
          </ul>
        </li></> }
                <li class="nav-item ">
                  <Link to='/' class="nav-link active btn me-5" >

                    {!isAuthentication ? 'join' : 'Logout'}
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to='/' class="btn btn-light upload-btn nav-link active me-3"><i class="bi bi-cloud-arrow-up-fill me-1 mt-1"></i>Upload</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>









    </>

  )
}
