import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useGetUserData } from '../Hooks'
import LoadingV2 from './LoadingV2'
import swal from 'sweetalert'

export default function Login() {
  const navigate = useNavigate()

  const { getUserData, data, loading, error } = useGetUserData()

  const [input, setInput] = useState({
    email: "",
    password: ""
  })

  const onChange = (e) => {
    if (e.target) {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      })
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getUserData({ variables: { ...input } })
    if (error) {
      console.log(error);
    }
    console.log(data)
  }

  useEffect(() => {
    if (!loading && data) {
      if (data.user.length === 0) {
        swal("Error", "Email atau password salah!", "error");
      } else {
        localStorage.setItem("isLogin", true)
        localStorage.setItem("role", data?.user[0].role)
        localStorage.setItem("user_id", data?.user[0].id)
        localStorage.setItem("email", data?.user[0].email)
        localStorage.setItem("name", data?.user[0].name)
        localStorage.setItem("phone", data?.user[0].phone)
        navigate("/");
      }
    }
  }, [data, loading, navigate]);

  return (
    <div className="container">
      <div className="row justify-content-center" style={{ paddingTop: 162 }}>
        <div className="col-xl-4">
          <div className="card p-4 shadow border-0">
            <h4 className="fw-bolder mb-4">Masuk</h4>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="InputEmail1" className="form-label text-pink mb-0 fw-600">Email</label>
                <input type="email" name="email" onChange={onChange} className="form-control" id="InputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label text-pink mb-0 fw-600">Password</label>
                <input type="password" name="password" onChange={onChange} className="form-control" id="InputPassword1" />
              </div>
              <div class="d-grid gap-2 mt-5">
                <button type="submit" onClick={onSubmit} className="btn btn-primary btn-blue">
                  {loading ? <LoadingV2 /> : "Masuk"}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
