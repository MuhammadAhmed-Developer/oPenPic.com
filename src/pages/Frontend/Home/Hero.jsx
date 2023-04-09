import React from 'react'

export default function Hero() {
  return (
    <>
      <section>
        <div className="container-fluid bg-dark py-5 hero-section">
          <div className="container d-flex justify-content-center align-item-center">
            <div className="row mt-5">
              <div className="col text-center text-white mt-5">
                <h1 className='fw-bolder mt-5'>Stunning royalty-free images & royalty-free stock</h1>
                <br />
                <p className='text-lg-start text-md-center'>Over 2.8 million+ high quality stock images, videos and music shared by our talented community.</p>
                <br />
                <div className="input-group mb-3">
                  <span className="input-group-text search"><i className='bi bi-search'></i></span>
                  <input type="search" className="form-control border-0 search-bar fs-5" placeholder='Search for All Images on oPenPic'/>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
