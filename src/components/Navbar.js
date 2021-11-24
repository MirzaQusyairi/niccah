import React from 'react'
import Logo from '../assets/img/Logo.png'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-blue">
        <div className="container">
          <a className="navbar-brand" href="/"><img src={Logo} alt="logo" width={120} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="ms-auto">
              <Link to="/Register">
                <button className="btn btn-outline-primary btn-login px-5 mx-2" type="submit">Masuk</button>
              </Link>
              <Link to="/Login">
                <button className="btn btn-primary btn-register px-5" type="submit">Daftar</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
