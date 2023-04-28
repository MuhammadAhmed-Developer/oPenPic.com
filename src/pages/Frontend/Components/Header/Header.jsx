import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../../../Context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../../../Config/Firebase';

export default function Header() {
  
  const {isAuthentication, dispatch} = useContext(AuthContext)
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

 const handleLogout = ()=> {

signOut(auth)
.then(()=>{
dispatch({type:'LOGOUT'})
window.reload()
})
.catch((err)=>{
    console.log(err)
  
})

  console.log('LOGOUT')
 }



  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark   mb-0 fixed-top" style={{ backgroundColor: bgColor, transition: transition }}>
          <div className="container-fluid">
            <Link to='/' className="navbar-brand ms-3"><h2> o<span className='p'>P</span>en<span className='p'>P</span>ic </h2></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown dropstart me-5">
                  <button className="btn nav-link dropdown-toggle active" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Explore
                  </button>
                  <ul className="dropdown-menu drop bg-dark">
                    <div className="container">
                      <div className="row border-bottom ">
                        <div className="col-lg-4 col-md-6 col-sm-12 dropm-exp">
                          <ul>
                            <li className='mb-3'><strong className='text-white'>Discover</strong></li>
                            <li><a href="">Editors's</a></li>
                            <li><a href="">Images</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 dropm-exp">
                          <ul>
                            <li className='mb-3'><strong className='text-white'>Community</strong></li>
                            <li><Link to='/blogs'><i class="bi bi-blockquote-right me-3"></i> Blogs</Link></li>
                            <li><a href="">Creator</a></li>
                            <li><a href="">Cameras</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 dropm-exp">
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
                <li className="nav-item text-end">
                  {!isAuthentication ?  <Link to='/autentication/login' className="nav-link active btn me-4"  >
                    Login
                  </Link> : <><button className="nav-link active btn me-4"  >
                     <i className='bi bi-bell'></i>
                    </button></> }
                  {/* <Link to='/autentication/login' className="nav-link active btn me-4"  >
                    {!isAuthentication ? 'LogIn' : <></>}
                  </Link> */}
                </li>
                {!isAuthentication ? <></> : <>
                  <li className="nav-item dropdown dropdown-center">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {/* <button className='border p-1  btn-drop  my-lg-0  my-md-3 '> */}
                        <i class="bi bi-person-circle text-light fs-5"></i>
                        {/* </button> */}
                    </a>
                    <ul className="dropdown-menu drop-profile  bg-dark text-start">
                     
                      <div className="container">
                        <div className="row">
                            <div className="col-12">
                              <ul className=''>
                                <li><a href=""><i class="bi bi-person me-2"></i> My Profile</a></li>
                                <li><a href=""><i class="bi bi-aspect-ratio me-2"></i> My Media</a></li>
                                <li><Link to='/upload'><i class="bi bi-cloud-arrow-up-fill me-2"></i> Upload</Link></li>
                                <li><a href=""><i class="bi bi-gear-wide-connected me-2"></i> settings</a></li>
                                <li><button className='btn-transparent btn text-white' onClick={handleLogout}><i class="bi bi-person-dash fs-5 me-2"></i>Logout</button></li>
                              </ul>
                            </div>
                        </div>
                      </div>
                    </ul>
                  </li></>}
                <li className="nav-item my-lg-0 my-md-3 my-sm-3 me-5">
                  {!isAuthentication ? <Link to='/autentication/register' className="nav-link active btn me-5"  >join</Link> : <></>}
                </li>
                <li className="nav-item">
                  <Link to='/upload' className="btn btn-light upload-btn nav-link active me-lg-4 my-lg-0 my-md-3 my-sm-3"><i className="bi bi-cloud-arrow-up-fill me-1 mt-1"></i>Upload</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>




    </>

  )
}
