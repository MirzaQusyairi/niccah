import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import { FaTrash, FaPen } from 'react-icons/fa'

export default function Admin() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center text-center mt-5" >
          <div className="col-lg-7">
            <h1 className="fw-600">Orderan</h1>
          </div >
        </div>

        <div className="row justify-content-center pt-3 pb-5 px-2">
          <div className="col-lg-12 card border-0 shadow bg-pink p-4 mt-3 mb-1">
            <div className="row">
              <div className="col-lg-10">
                <h2 className="text-white fw-600 mb-4">Undangan Nikah Iwan & Fals</h2>
                <h5 className="text-white mb-0">Nama Pelanggan     : Iwan</h5>
                <h5 className="text-white mb-0">No HP              : 081373433434</h5>
                <h5 className="text-white mb-0">Selesai Pengerjaan : 10 Desember 2021</h5>
                <h5 className="text-white ">Link               : <Link className="text-white" to="">https://iwan-fals.niccah.com</Link></h5>
              </div>
              <div className="col-lg-2 ms-auto">
                <div className="card border-0 bg-light text-center mb-2">
                  <h4 className="text-blue fw-600 mb-0 p-1">Menunggu</h4>
                </div>
                <a href="/#" className="btn btn-primary btn-register mb-3 float-end"><FaTrash /></a>
                <a href="/#" className="btn btn-primary btn-register mb-3 me-1 float-end"><FaPen /></a>
              </div>
            </div>
          </div>

          <div className="col-lg-12 card border-0 shadow bg-pink p-4 mt-3 mb-1">
            <div className="row">
              <div className="col-lg-10">
                <h2 className="text-white fw-600 mb-4">Undangan Nikah Iwan & Fals</h2>
                <h5 className="text-white mb-0">Nama Pelanggan     : Iwan</h5>
                <h5 className="text-white mb-0">No HP              : 081373433434</h5>
                <h5 className="text-white mb-0">Selesai Pengerjaan : 10 Desember 2021</h5>
                <h5 className="text-white ">Link               : <Link className="text-white" to="">https://iwan-fals.niccah.com</Link></h5>
              </div>
              <div className="col-lg-2 ms-auto">
                <div className="card border-0 bg-light text-center mb-2">
                  <h4 className="text-blue fw-600 mb-0 p-1">Menunggu</h4>
                </div>
                <a href="/#" className="btn btn-primary btn-register mb-3 float-end"><FaTrash /></a>
                <a href="/#" className="btn btn-primary btn-register mb-3 me-1 float-end"><FaPen /></a>
              </div>
            </div>
          </div>

          <div className="col-lg-12 card border-0 shadow bg-pink p-4 mt-3 mb-1">
            <div className="row">
              <div className="col-lg-10">
                <h2 className="text-white fw-600 mb-4">Undangan Nikah Iwan & Fals</h2>
                <h5 className="text-white mb-0">Nama Pelanggan     : Iwan</h5>
                <h5 className="text-white mb-0">No HP              : 081373433434</h5>
                <h5 className="text-white mb-0">Selesai Pengerjaan : 10 Desember 2021</h5>
                <h5 className="text-white ">Link               : <Link className="text-white" to="">https://iwan-fals.niccah.com</Link></h5>
              </div>
              <div className="col-lg-2 ms-auto">
                <div className="card border-0 bg-light text-center mb-2">
                  <h4 className="text-blue fw-600 mb-0 p-1">Menunggu</h4>
                </div>
                <a href="/#" className="btn btn-primary btn-register mb-3 float-end"><FaTrash /></a>
                <a href="/#" className="btn btn-primary btn-register mb-3 me-1 float-end"><FaPen /></a>
              </div>
            </div>
          </div>



        </div>
      </div>
    </>
  )
}
