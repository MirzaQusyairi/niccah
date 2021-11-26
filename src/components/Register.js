import React from 'react'

export default function Register() {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center" style={{ paddingTop: 90 }}>
          <div className="col-xl-4">

            <div className="card shadow border-0 p-4">
              <h4 className="fw-bolder mb-4">Daftar</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label text-pink mb-0 fw-600">Email</label>
                  <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputText1" className="form-label text-pink mb-0 fw-600">Nama</label>
                  <input type="text" name="name" className="form-control" id="exampleInputText1" aria-describedby="NameHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputNumber1" className="form-label text-pink mb-0 fw-600">No HP</label>
                  <input type="number" name="phone" className="form-control" id="exampleInputNumber1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label text-pink mb-0 fw-600">Password</label>
                  <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div class="d-grid gap-2 mt-5">
                  <button type="submit" className="btn btn-primary btn-blue">Daftar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
