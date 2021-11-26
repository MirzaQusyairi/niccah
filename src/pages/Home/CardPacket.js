import React from 'react'
import ListPacket from './ListPacket'

export default function CardPacket(props) {
  return (
    <div className="col-lg-4 col-md">
      <div className=
        {`
          ${props.name === "Silver" ? 'bg-gradient-light' : ''} 
          ${props.name === "Platinum" ? 'bg-gradient-cyan' : ''} 
          card card-pricing px-3
        `}
      >
        <div className="card-header py-5 border-0">
          <div className={`${props.name === 'Platinum' ? 'text-white' : ''} h3 mb-0`} style={{ textDecoration: 'line-through' }}><span
            className="price fw-600">{props.promo}</span>
          </div>
          <div className={`${props.name === 'Platinum' ? 'text-white' : ''} h1 mb-0`}><span className="price fw-bolder">{props.price}</span></div>
          <span className={`${props.name === 'Platinum' ? 'text-white' : ''} h6 text-muted fw-600`}>Paket {props.name}
            <br />
            <span className="badge bg-success">{props.info}</span>
          </span>
        </div>
        <div className="card-body">
          <ul className={`${props.name === 'Platinum' ? 'text-white' : ''} list-unstyled list-bullet`}>
            {props.features.map((item, i) => {
              return <ListPacket key={i} index={i} length={props.features.length - 1} data={item} />
            })}

          </ul>
          <a href="/#" className={`${props.name === 'Platinum' ? 'btn-outline-primary btn-login' : 'btn-primary btn-register'} btn mb-3`} >Pilih Paket</a>
        </div>
      </div>
    </div >
  )
}
