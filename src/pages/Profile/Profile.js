import { React, useState } from 'react'
import { storage } from '../../Firebase/Firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useGetUserDataByID, useUpdateUser } from '../../Hooks'
import LoadingV2 from '../../components/LoadingV2'
import Navbar from '../../components/Navbar'
import swal from 'sweetalert'

export default function Profile() {
  const userID = localStorage.getItem("user_id")

  const { dataUser } = useGetUserDataByID(userID)
  const { updateUser, loadingUpdateUser } = useUpdateUser()

  const [disableInput, setDisableInput] = useState(true)
  const [input, setInput] = useState({
    id: userID,
    email: "",
    name: "",
    phone: "",
    avatar: "",
    password: ""
  })

  const onUpdateUser = (val) => {
    updateUser({
      variables: {
        ...val,
      }
    })
  }

  const onChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  }

  const isValid =
    input.email !== "" &&
    input.name !== "" &&
    input.phone !== "" &&
    input.password !== "" &&
    input.avatar !== ""

  const onEditProfile = (e) => {
    e.preventDefault()
    if (disableInput === false) {
      if (isValid) {
        onUpdateUser({
          ...input
        })
      } else {
        swal("Warning", "Data belum lengkap!", "warning");
      }
    }
    setDisableInput(!disableInput)
  }

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    const fileRef = ref(storage, `img_profile/${file.name}`);
    uploadBytes(fileRef, file).then(() => {
      getDownloadURL(fileRef).then((url) => {
        setInput({ ...input, avatar: url });
      });
    });
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-pinkblue">
        <div className="container pb-5">
          <div className="row justify-content-center" style={{ paddingTop: 20 }}>
            <div className="col-xl-4">
              <div className="card p-4 shadow border-0">
                <form >
                  <div className="text-center">
                    <img src={dataUser?.user[0].avatar} width="200" height="200" className="rounded-circle mb-5" alt="" />
                  </div>
                  <div className="mb-3">
                    <input class="form-control" onChange={onChangeImage} disabled={disableInput} name="photo" type="file" id="photo" accept="image/png, image/jpeg , image/jpg" />
                  </div>
                  <div className="mb-3">
                    <input type="text" name="email" onChange={onChangeInput} disabled={disableInput} className="form-control"
                      placeholder={dataUser?.user[0].email} />
                  </div>
                  <div className="mb-3">
                    <input type="text" name="name" onChange={onChangeInput} disabled={disableInput} className="form-control"
                      placeholder={dataUser?.user[0].name} />
                  </div>
                  <div className="mb-3">
                    <input type="text" name="phone" onChange={onChangeInput} disabled={disableInput} className="form-control"
                      placeholder={dataUser?.user[0].phone} />
                  </div>
                  <div className="mb-3">
                    <input type="password" name="password" onChange={onChangeInput} disabled={disableInput} className="form-control"
                      placeholder={dataUser?.user[0].password} />
                  </div>
                  <div class="d-grid gap-2 mt-5">
                    <button onClick={onEditProfile} className="btn btn-primary btn-blue">
                      {loadingUpdateUser ? <LoadingV2 /> :
                        [disableInput ? (
                          "Perbarui"
                        ) : (
                          "Simpan"
                        )]
                      }
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
