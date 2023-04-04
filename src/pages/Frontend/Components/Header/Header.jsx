import React from 'react'

export default function Header() {

  return (
    <>
    <div className="container-fluid ">
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
                  <li className="nav-item">
                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                    <li className="nav-item dropdown">
                      <div className="dropdown">
                          
                        <button className="btn btn-light" type="button">
                         <span className='text'>Dropdown</span> 
                          <i className="bi bi-caret-up-fill"></i>
                          <i className="bi bi-caret-down-fill ms-1"></i>
                          </button>
                         
                        <div className="dropdown-menu">
                          <a href="#">Link 1</a>
                          <a href="#">Link 2</a>
                          <a href="#">Link 3</a>
                        </div>
                      </div>
                    </li>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-1">
          <div className='text-end'>

            <button className="btn btn-transperent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="text-danger fw-bold fs-1 bi bi-three-dots-vertical"></i></button>

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <div>
                  Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </div>
                <div className="dropdown mt-3">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    Dropdown button
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
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
