import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  return (

    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark">
  <div class="container-fluid">
    <Link to='/' class="navbar-brand"><h2> o<span className='p'>P</span>en<span className='p'>P</span>ic </h2></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/' class="nav-link active btn" aria-current="page" href="#">LogIn</Link>
        </li>
        <li class="nav-item ">
          <Link to='/' class="nav-link active" >Link</Link>
        </li>
        <li class="nav-item dropdown ">
          <button class="nav-link dropdown-toggle active"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </button>
          <ul class="dropdown-menu ">
            <li><Link to='/' class="dropdown-item" >Action</Link></li>
            <li><Link to='/' class="dropdown-item" >Another action</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link to='/' class="dropdown-item">Something else here</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link to='/' class="btn btn-light upload-btn nav-link active">Upload</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>











  )
}
