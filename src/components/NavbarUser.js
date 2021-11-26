import React from 'react'
import Logo from '../assets/img/Logo.png'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

export default function NavbarUser() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-blue">
      <div className="container">
        <Link className="navbar-brand" to="/"><img src={Logo} alt="logo" width={120} /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="ms-auto d-flex align-items-center">
            <p className="fw-bold m-0 pe-2">Hi, Mirza</p>
            <div className="d-flex bg-light justify-content-center align-items-center rounded-circle" style={{ width: 50, height: 50 }}>
              <FaUser style={{ fontSize: 22 }} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

