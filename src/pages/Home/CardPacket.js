import React from 'react'
import ListPacket from './ListPacket'

export default function CardPacket(props) {
  return (
    <div className="col-lg-4 col-md">
      <div className={`${props.name === "Silver" ? 'bg-gradient-light' : ''} card card-pricing px-3`}>
        <div className="card-header py-5 border-0">
          <div className="h3 mb-0" style={{ textDecoration: 'line-through' }}><span
            className="price fw-600">{props.promo}</span>
          </div>
          <div className="h1 mb-0"><span className="price fw-bolder">{props.price}</span></div>
          <span className="h6 text-muted fw-600">Paket {props.name}
            <br />
            <span className="badge bg-success">{props.info}</span>
          </span>
        </div>
        <div className="card-body">
          <ul className="list-unstyled list-bullet">
            {props.features.map((item, i) => {
              return <ListPacket key={i} data={item} />
            })}

          </ul>
          <a href="/#" className="btn btn-primary btn-register mb-3">Pilih Paket</a>
        </div>
      </div>
    </div>
  )
}
