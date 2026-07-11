import React from 'react'

const SearchStudent = () => {
  return (
    <div>
          <div className="container">
              <div className="row">
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                      <div className="row g-3">

                          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <label className="form-label">Registration Number</label>
                              <input type="text" className="form-control" />
                          </div>

                          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex align-items-end">
                              <button className="btn btn-primary w-100">
                                  Search
                              </button>
                          </div>

                      </div>

                  </div>
              </div>
          </div>
    </div>
  )
}

export default SearchStudent