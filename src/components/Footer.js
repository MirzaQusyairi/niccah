import React from 'react'
import Logo from '../assets/img/Logo.png'
import { FaHeart, FaInstagram, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className="bg-blue">
      <div className="container">
        <div className="row py-5">
          <a className="navbar-brand" href="/"><img src={Logo} alt="logo" width={120} /></a>
          <p className="w-25">
            niccah.com adalah layanan untuk membuat undangan pernikahan secara online gratis dengan mudah. Undangan yang dibuat akan berbentuk sebuah website yang dapat di akses dan dibagikan kapanpun.
          </p>
          <div style={{ fontSize: 28 }}>
            <FaInstagram style={{ marginRight: 10 }} />
            <FaFacebook />
          </div>
          <div className="text-center">
            <hr />
          </div>
          <p className="mb-0">© 2021 niccah.com. All rights reserved</p>
          <p className="mb-0">Developed with <span style={{ color: '#ff3a75' }}><FaHeart /></span> by Mirza Qusyairi</p>
        </div>

      </div>

    </div>
  )
}
