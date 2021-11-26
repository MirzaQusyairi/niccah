import React from 'react'
import Checklist from './ChecklistSvg'

export default function ListPacket(props) {
  return (
    <li className={`${props.index === props.length ? 'fw-bold' : ''} py-2`}>
      <span className="badge-2 badge-circle-2 badge-soft-success me-2"><Checklist /></span>
      {props.data}
    </li>
  )
}
