import React from 'react'
import { Link } from 'react-router-dom'
import Picture from '../../assets/img/404.png'
import styles from './NotFound.module.css'

export default function NotFound() {

  return (
    <div className={styles.NotFoundBody}>
      <div className={styles.NotFoundContainer}>
        <img src={Picture} alt="" />
        <h1 style={{ color: '#00adda', fontWeight: 700 }}>Waduh, tujuanmu nggak ada!</h1>
        <p style={{ marginBottom: 50 }}>Mungkin kamu salah jalan atau alamat. Ayo balik sebelum gelap!</p>
        <Link className={styles.button} to="/">Kembali</Link>
      </div>
    </div >
  )
}
