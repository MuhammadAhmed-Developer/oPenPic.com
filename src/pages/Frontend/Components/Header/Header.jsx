import React from 'react'

export default function Header() {

  return (
    <>
      <div className="container-fluid fixed-to bg-light">
        <div className="row">
          <div className="col-11">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">openpic</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                    <li className="nav-item dropdown me-4">

                      <div class="dropdown">
                      <button class="dropbtn btn btn-light rounded-2"><i className='bi bi-caret-left me-1 '></i>
                      <i className='bi bi-caret-right text-success '></i><span className='text'>Explore</span>
                        </button>
                        <div class="dropdown-content">
                          <a href="#">Link 1</a>
                          <a href="#">Link 2</a>
                          <a href="#">Link 3</a>
                        </div>
                      </div>


                    </li>

                    <li className="nav-item me-3">
                      <a className="nav-link active" href="#"> Log in</a>
                    </li>
                    <li className="nav-item me-4">
                      <a className="nav-link ">join</a>
                    </li>
                    <li className="">
                      <a className="nav-link btn btn-warning text-white fw-bold">Upload</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-1">
            <div className='text-end'>

              <button className="btn btn-transperent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="text-danger fw-bold fs-1 bi bi-three-dots-vertical"></i></button>

              <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasLeftLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasLeftLabel">Offcanvas right</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body text-start">
                  <div>
                    
                 <ul className='' style={{listStyle: 'none'}}>
                 <li className="nav-item">
                      <a className="nav-link active" href="#"> Log in</a>
                    </li>
                    <li className="nav-item my-3">
                      <a className="nav-link ">join</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link btn btn-warning text-white fw-bold w-25 p-2">Upload</a>
                    </li>
                 </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>





  )
}
