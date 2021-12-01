import { React } from 'react'
import Logo from '../assets/img/Logo.png'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router'
import Loading from './Loading'


export default function Navbar() {
  const navigate = useNavigate()
  let islogin = localStorage.getItem("isLogin")
  let role = localStorage.getItem("role")
  let id_user = localStorage.getItem("user_id")
  let name_user = localStorage.getItem("name")

  const Logout = (e) => {
    e.preventDefault()
    localStorage.setItem("isLogin", false)
    localStorage.removeItem("role")
    localStorage.removeItem("user_id")
    localStorage.removeItem("email")
    localStorage.removeItem("name")
    localStorage.removeItem("phone")
    navigate("/")
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-blue">
        <div className="container">
          <Link className="navbar-brand" to="/"><img src={Logo} alt="logo" width={120} /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {role === 0 ? (
              <ul className="navbar-nav">
                <li className="nav-item mx-3">
                  <Link className="nav-link text-blue fw-bolder text-blue" to="/dashboard/admin">Dashboard</Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav">
                <li className="nav-item mx-3">
                  <Link className="nav-link text-blue fw-bolder text-blue" to={`/dashboard/user/${id_user}`}>Dashboard</Link>
                </li>
              </ul>
            )}

            {islogin !== 'true' ? (
              <div className="ms-auto">
                <Link to="/login">
                  <button className="btn btn-outline-primary btn-login px-5 mx-2" type="submit">Masuk</button>
                </Link>
                <Link to="/register">
                  <button className="btn btn-primary btn-register px-5" type="submit">Daftar</button>
                </Link>
              </div>
            ) : (
              <div className="ms-auto d-flex align-items-center">
                <p className="fw-bold m-0 pe-2 text-end">Hi, {name_user}<br /><Link style={{ color: '#00ADDA' }} onClick={Logout} to="">keluar</Link></p>

                <div className="d-flex bg-light justify-content-center align-items-center rounded-circle" style={{ width: 50, height: 50 }}>
                  <FaUser style={{ fontSize: 22 }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </nav >
    </div >
  )
}
