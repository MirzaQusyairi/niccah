import React from 'react'

export default function CardFeature(props) {
  const { icon, name, detail } = props

  return (
    <div className="col-md-6 col-lg-4 py-3">
      <div className="card hover-shadow-lg border-0 shadow hover-translate-y-n3" style={{ borderRadius: 15 }}>
        <div className="card-body pb-5 h-150">
          <div className="pt-4 pb-5">
            <img src={`assets/img/${icon}.svg`} className="img-fluid mx-auto d-block" style={{ height: '150px' }} alt={icon} />
          </div>
          <h5 className="lh-130 mb-3">{name}</h5>
          <p className="text-muted mb-0">{detail}</p>
        </div>
      </div>
    </div>
  )
}
