import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import google from '../../../../accests/images/googlr.png'

export default function Header() {

  const [bgColor, setBgColor] = useState('transparent')
  const [transition, setTransition] = useState('')


  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 100) {
      setBgColor('black')
      setTransition('1s')
    } else {
      setBgColor('transparent')

    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { position: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  const isAuthentication = false

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark text-center  mb-0 fixed-top" style={{ backgroundColor: bgColor, transition: transition }}>
          <div className="container-fluid">
            <Link to='/' className="navbar-brand ms-3"><h2> o<span className='p'>P</span>en<span className='p'>P</span>ic </h2></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown dropstart me-5 text-center">
                  <button className="btn nav-link dropdown-toggle active" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Explore
                  </button>
                  <ul className="dropdown-menu drop bg-dark text-center ">
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
                            <li><Link to='/blogs'>Blogs</Link></li>
                            <li><a href="">Creator</a></li>
                            <li><a href="">Cameras</a></li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li className='mb-3'><strong className='text-white'>About</strong></li>
                            <li><Link to='/about'>About Us</Link></li>
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
                <li className="nav-item">
                  <Link to='/' className="nav-link active btn me-4" aria-current="page" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
                    {!isAuthentication ? 'LogIn' : <><i className="bi bi-bell"></i></>}
                  </Link>
                </li>
                {!isAuthentication ? <></> : <>
                  <li className="nav-item dropdown dropdown-center ">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <button className='border p-3 btn-drop rounded-5 my-lg-0 my-md-3 '></button>
                    </a>
                    <ul className="dropdown-menu drop2 bg-dark ">
                     
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <div className="col-12 text-start">
                              <ul>
                                <li><a href="">My Profile</a></li>
                                <li><a href="">My Media</a></li>
                                <li><a href="">Upload</a></li>
                                <li><a href="">settings</a></li>
                                <li><button className='btn-transparent btn text-white mx-0'>Logout</button></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </li></>}
                <li className="nav-item my-sm-3">
                  <Link to='/' className="nav-link active btn me-5" data-bs-toggle="modal" data-bs-target="#exampleModal" >

                    {!isAuthentication ? 'join' : ''}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/' className="btn btn-light upload-btn nav-link active me-lg-4 my-lg-0 my-md-3 my-sm-3"><i className="bi bi-cloud-arrow-up-fill me-1 mt-1"></i>Upload</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>


      {/* Login model */}



      {/* <!-- Button trigger modal --> */}
      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button> */}

      {/* <!-- Modal Login --> */}
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header text-center ">
              <h1 class="modal-title fs-4 fw-bold text-center" id="exampleModalLabel">Login to download unlimited full resolution media</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div className="container">
                <form action="">
                  <div class="row">
                    <div class="col my-3">
                      <label htmlFor="" className='fw-bold mb-1'>Email</label>
                      <input type="email" class="form-control " placeholder="abc@gmail.com" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col my-3">
                      <label htmlFor="" className='fw-bold mb-1'>Password</label>
                      <input type="password" class="form-control " placeholder="Password" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                      <label class="form-check-label ms-2" for="invalidCheck">
                        Agree to terms and conditions
                      </label>
                    </div>
                    <div className="col-4 text-end">
                      <a href='#' className='text-success'>Forgot Password?</a>
                    </div>
                  </div>
                  <div class="py-2 mt-4 text-center">
                {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                <button type="button" class="btn btn-success rounded-5 text-white fw-bold w-50" data-bs-dismiss="modal">Login</button>
              </div>
                </form>
              </div>
             

            </div>

          </div>
        </div>
      </div>


      {/* Model signUp */}


       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header text-center ">
              <h1 class="modal-title fs-5 fw-bold text-center" id="exampleModalLabel">Sign Up to download unlimited full resolution media</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ">
              <div className="container">
                <form action="">
                  <div className="row">
                    <div className="col">
                    <div class="col my-5">
                      <button className='btn btn-transparent google-btn border w-100 rounded-5'><img src={google} alt="" className='img-fluid mx-3' width={15} /> Continue with Google</button>
                    </div>
                    </div>
                  </div>
                  <div class="row">
                    
                    <div class="col my-3">
                      <label htmlFor="" className='fw-bold mb-1'>Full Name</label>
                      <input type="text" class="form-control " placeholder="Full name" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col my-3">
                      <label htmlFor="" className='fw-bold mb-1'>Email</label>
                      <input type="email" class="form-control " placeholder="abc@gmail.com" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col my-3">
                      <label htmlFor="" className='fw-bold mb-1'>Password</label>
                      <input type="password" class="form-control " placeholder="Password" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                      <label class="form-check-label ms-2" for="invalidCheck">
                        Agree to terms and conditions
                      </label>
                    </div>
                    <div className="col-4 text-end">
                      <a href='#' className='text-primary'>Forgot Password?</a>
                    </div>
                  </div>
                  <div class="py-2 mt-4 text-center">
                 <button type="button" class="btn btn-primary rounded-5 text-white fw-bold w-75" data-bs-dismiss="modal">Sign Up</button>
              </div>
                </form>
              </div>
             

            </div>

          </div>
        </div>
      </div>



    </>

  )
}
