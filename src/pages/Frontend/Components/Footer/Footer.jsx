import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {

 const currentYear = new Date().getFullYear()

  return (
    <footer>
    <div className="container-fluid bg-tertiary">
        <div className="row">
            <div className="col-lg-5 col-md-4 col-sm-12 text-start mx-4">
                <h1>o<span className='p'>P</span>en<span className='p'>P</span>ic</h1>
                <br />
                <p>Over 3.1 million+ high quality stock images, videos and music shared by our talented community.</p>
                <br/>
                <a href="https://www.instagram.com/muhammad_ahmed0011/" target='_blank'><i className='bi bi-instagram fs-6'></i></a>
                <a href="https://github.com/MuhammadAhmed-Developer" target='_blank' ><i className='bi bi-github fs-6 mx-5'></i></a>
                <a href="https://www.facebook.com/MuhammadAhmedjee" target='_blank'><i className='bi bi-facebook fs-6 me-5'></i></a>
                <a href="https://twitter.com/Muhammad__1122" target='_blank'><i className='bi bi-twitter fs-6'></i></a>
                <a href="mailto:muhammadahmedite@gmail.com" target='_blank'><i className='mx-5 bi bi-envelope-at fs-6'></i></a>
                <a href="https://www.linkedin.com/in/muhammad-ahmed-731234266/" target='_blank'><i className='bi bi-linkedin fs-6'></i></a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6  mt-3">
               <ul>
                <li className='mb-3'><strong>Discover</strong></li>
                <li><a href="">Editors's Choice</a></li>
                <li><a href="">Popular Images</a></li>
               </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mt-3">
               <ul>
                <li className='mb-3'><strong>Community</strong></li>
                <li><Link to='/blogs'>Blogs</Link></li>
                <li><a href="">Creator</a></li>
                <li><a href="">Cameras</a></li>
               </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mt-3">
               <ul>
                <li className='mb-3'><strong>About</strong></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">License Summary</a></li>
                <li><a href="">Terms of Services</a></li>
                <li><a href="">Privacy Policy</a></li>
               </ul>
            </div>
        </div>
    </div>
    <hr />
    <div className="container-fluid">
        <div className="row text-center">
            <p>&copy; {currentYear} All Right Reserved By <a className='my-link' href="https://m--ahmed.web.app/" target='_blank'> Muhammad Ahmed</a></p>
        </div>
    </div>
    </footer>
  )
}
