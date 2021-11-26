import React from 'react'
import '../assets/css/style.css'
import Navbar from '../components/Navbar'
import FormLogin from '../components/Login'

export default function Login() {
  return (
    <div >
      <Navbar />
      <div className="bg-gradient-pinkblue">
        <div style={{ height: 705 }}>
          <FormLogin />
        </div>
      </div>
    </div>

  )
}
