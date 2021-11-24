import React from 'react'

export default function Register() {
  return (
    <div>
      <div className="container">
        <div className="row" style={{ paddingTop: 90 }}>
          <div className="col-xl-4 m-auto">
            <div className="card shadow border-0 bg-blue p-5">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label text-pink">Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label text-pink">Nama</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="NameHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label text-pink">No HP</label>
                  <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label text-pink">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
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
