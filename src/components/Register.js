import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateUser } from '../Hooks'
import LoadingV2 from './LoadingV2'
import swal from 'sweetalert'

export default function Register() {
  const { createUser, loadingCreateUser } = useCreateUser()
  const navigate = useNavigate()

  const [data, setData] = useState({
    email: "",
    name: "",
    phone: "",
    password: "",
  })

  const onCreateUser = (val) => {
    createUser({
      variables: {
        ...val,
      }
    })
  }

  const onChange = (e) => {
    if (e.target) {
      setData({
        ...data,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onCreateUser({
      ...data,
    })
    swal("Success", "Daftar berhasil!", "success");
    navigate("/login")
  }
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
                  <input type="email" name="email" onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputText1" className="form-label text-pink mb-0 fw-600">Nama</label>
                  <input type="text" name="name" onChange={onChange} className="form-control" id="exampleInputText1" aria-describedby="NameHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputNumber1" className="form-label text-pink mb-0 fw-600">No HP</label>
                  <input type="number" name="phone" onChange={onChange} className="form-control" id="exampleInputNumber1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label text-pink mb-0 fw-600">Password</label>
                  <input type="password" name="password" onChange={onChange} className="form-control" id="exampleInputPassword1" />
                </div>
                <div class="d-grid gap-2 mt-5">
                  <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-blue">
                    {loadingCreateUser ? <LoadingV2 /> : "Daftar"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
