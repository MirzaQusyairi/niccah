import { forwardRef, useState } from 'react'
import styles from './CreateOrder.module.css'

const UpdateOrder = forwardRef((props, ref) => {
  const { onClick, onSubmit, dataUpdate } = props

  const [input, setInput] = useState({
    id: dataUpdate.id,
    link: dataUpdate.link,
    status: dataUpdate.status,
  })

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...input
    })
    onClickClose()
  }

  const onClickClose = () => {
    onClick(false)
  }

  return (
    <div className={`${styles.background} modal d-flex justify-content-center`}>
      <div className={`${styles.container} bg-white my-auto pb-5 rounded`} ref={ref}>
        <svg
          aria-hidden="true"
          role="img"
          className="d-block ms-auto m-2"
          style={{ cursor: "pointer", verticalAlign: "-0.125em" }}
          width="24"
          height="24"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 1024 1024"
          onClick={onClickClose}
        >
          <path
            d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4l-66.1-.3c-4.4 0-8 3.5-8 8c0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4l66 .3c4.4 0 8-3.5 8-8c0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
            fill="#00adda"
          />
          <path
            d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448s448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
            fill="#00adda"
          />
        </svg>
        <h2 className="fw-bold text-center p-3 pb-4">Perbarui Undangan</h2>
        <form className="px-4 px-md-5">
          <label>Pilih Status</label>
          <select name="status" value={input.status} onChange={onChange} className="form-select px-3 py-2 mb-4">
            <option selected disabled>Pilih Status</option>
            <option value="menunggu">Menunggu</option>
            <option value="diproses">Diproses</option>
            <option value="selesai">Selesai</option>
          </select>

          <label>Link Undangan</label>
          <input
            className={`${styles.input} form-control px-3 py-2 mb-4`}
            value={input.link}
            name="link"
            placeholder="Link Undangan"
            onChange={onChange}
            type="text"
          />

          <button type="submit" className={`btn btn-primary btn-register border-0 fw-bolder text-white rounded p-2 w-100`} onClick={handleSubmit}>
            Perbarui
          </button>
        </form>
      </div>
    </div>
  )
})

export default UpdateOrder
