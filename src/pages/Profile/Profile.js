import React from 'react'
import { storage } from '../../Firebase/Firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export default function Profile() {
  const userID = localStorage.getItem("user_id")

  return (
    <div className="container">
      <div className="row justify-content-center" style={{ paddingTop: 162 }}>
        <div className="col-xl-4">
          <div className="card p-4 shadow border-0">
            <form >
              <div class="text-center">
                <img src="..." class="rounded" alt="..." />
              </div>
              <div class="mb-3">
                <label for="formFile" class="form-label">Default file input example</label>
                <input class="form-control" name="photo" type="file" id="photo" />
              </div>
              <div className="mb-3">
                <input type="text" name="name" className="form-control" />
              </div>
              <div className="mb-3">
                <input type="password" name="password" className="form-control" />
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
