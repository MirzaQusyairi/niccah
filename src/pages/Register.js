import React from 'react'
import '../assets/css/style.css'
import Navbar from '../components/Navbar'
import FormRegister from '../components/Register'

export default function Register() {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-pinkblue">
        <div style={{ height: 705 }}>
          <FormRegister />
        </div>
      </div>
    </div>
  )
}
