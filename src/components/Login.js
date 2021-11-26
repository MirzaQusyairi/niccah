import React from 'react'

export default function Login() {
  return (
    <div className="container">
      <div className="row justify-content-center" style={{ paddingTop: 162 }}>
        <div className="col-xl-4">
          <div className="card p-4 shadow border-0">
            <h4 className="fw-bolder mb-4">Masuk</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="InputEmail1" className="form-label text-pink mb-0 fw-600">Email</label>
                <input type="email" name="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label text-pink mb-0 fw-600">Password</label>
                <input type="password" name="password" className="form-control" id="InputPassword1" />
              </div>
              <div class="d-grid gap-2 mt-5">
                <button type="submit" className="btn btn-primary btn-blue">Masuk</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
