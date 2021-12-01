import React from 'react'
import moment from 'moment'
import { FaTrash, FaPen } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function CardOrder(props) {
  const { data, onDelete } = props

  const onClickDelete = () => {
    onDelete(data?.id)
  }

  return (
    <div className="col-lg-12 card border-0 shadow bg-pink p-4 mt-3 mb-1">
      <div className="row">
        <div className="col-lg-10">

          <h2 className="text-white fw-600 mb-4">{data.name}</h2>
          <h5 className="text-white mb-0">Paket              : {data.packet}</h5>
          <h5 className="text-white mb-0">Selesai Pengerjaan : {moment(data.date_finish).format('D MMMM YYYY')}</h5>
          <h5 className="text-white ">Link               : <a className="text-white" href="/#">{data.link}</a></h5>
        </div>
        <div className="col-lg-2 ms-auto">
          <div className="card border-0 bg-light text-center mb-2">
            <h4 className="text-blue fw-600 mb-0 p-1">{data.status}</h4>
          </div>
          <Link to="" onClick={onClickDelete} className="btn btn-primary btn-register mb-3 float-end"><FaTrash /></Link>
          <a href="/#" className="btn btn-primary btn-register mb-3 me-1 float-end"><FaPen /></a>
        </div>
      </div>
    </div>
  )
}