import React from 'react'
import Navbar from '../../components/Navbar'
import ImgWedding from '../../assets/img/wedding.svg'
import CardPacket from './CardPacket'
import Footer from '../../components/Footer'

const Packet = {
  "packet": [
    {
      "name": "Bronze",
      "price": "GRATIS",
      "promo": "",
      "info": "",
      "features": [
        "Custom Sub-Domain",
        "Hitung Mundur Acara",
        "Quotes",
        "Background Music",
        "Masa Aktif Undangan 2 Hari",
      ]
    },
    {
      "name": "Silver",
      "price": "Rp. 79.000",
      "promo": "",
      "info": "",
      "features": [
        "Custom Sub-Domain",
        "Hitung Mundur Acara",
        "Quotes",
        "Background Music",
        "Masa Aktif Undangan Selamanya",
      ]
    },
    {
      "name": "Platinum",
      "price": "Rp. 125.000",
      "promo": "Rp. 250.000",
      "info": "Paling diminati",
      "features": [
        "Custom Sub-Domain",
        "Hitung Mundur Acara",
        "Quotes",
        "Background Music",
        "Google Maps",
        "Masa Aktif Undangan Selamanya",
      ]
    },
  ]
}

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row banner" >
          <div className="col-xl-6">
            <h1 className="fs-52 fw-700 text-blue">Undangan Pernikahan Online</h1>
            <p className="text-muted mt-4 width-70">Undangan pernikahan online dikemas dalam bentuk website yang menarik dapat dibagikan kapanpun dan dimanapun.</p>
            <button className="btn btn-lg btn-primary btn-register px-6 mt-5" type="submit">Buat Undangan</button>
          </div>
          <div className="col-xl-6">
            <img src={ImgWedding} width="600" alt="" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center text-center mt-5 pricing" >
          <div className="col-lg-7">
            <h1 className="fw-600">Paket Undangan Nikah Online</h1>
            <p className="text-muted">Niccah.com dibuat berdasarkan pengalaman, sehingga harga untuk fitur penuh tidak akan membuat budget pernikahan kamu membengkak. </p>
          </div>
        </div>

        <div className="row justify-content-center py-5">
          {Packet.packet.map((item, i) => {
            return <CardPacket
              key={i}
              name={item.name}
              price={item.price}
              promo={item.promo}
              info={item.info}
              features={item.features}
            />
          })}
        </div>
      </div>
      <Footer />

    </>
  )
}
