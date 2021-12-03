import React from 'react'
import Navbar from '../../components/Navbar'
import ImgWedding from '../../assets/img/wedding.svg'
import CardPacket from './CardPacket'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router'
import swal from 'sweetalert'
import CardFeature from './CardFeature'

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

const Feature = {
  "feature": [
    {
      "icon": "subdomain",
      "name": "Custom Subdomain",
      "detail": "Alamat web khusus untuk undangan pernikahan online Kamu",
    },
    {
      "icon": "music",
      "name": "Background Musik",
      "detail": "Undangan nikah dapat dilengkapi oleh musik kesukaan Kamu dan pasanganmu.",
    },
    {
      "icon": "galery",
      "name": "Galeri Foto",
      "detail": "Dapat menampilkan foto serta menampilkan video cinematic dari Youtube",
    },
    {
      "icon": "maps",
      "name": "Google Maps",
      "detail": "Memudahkan para tamu undangan untuk menuju lokasi acara, menghindari kemungkinan tersesat.",
    },
    {
      "icon": "money",
      "name": "GRATIS",
      "detail": "Kamu dapat mencoba secara gratis selama 2 hari. ",
    },
  ]
}

export default function Home() {
  const navigate = useNavigate()
  let islogin = localStorage.getItem("isLogin")

  const HandleClickCreate = () => {
    if (islogin !== 'true') {
      swal("Warning", "Masuk terlebih dahulu!", "warning");
      navigate("/login")
    } else {
      navigate("/dashboard/user/" + localStorage.getItem("user_id"))
    }
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row banner" >
          <div className="col-12 col-md-7 col-lg-6 order-md-2 header">
            <img src={ImgWedding} width="600" alt="" />
          </div>
          <div className="col-12 col-md-5 col-lg-6 order-md-1 header">
            <h1 className="fs-52 fw-700 text-blue">Undangan Pernikahan Online</h1>
            <p className="text-muted mt-4 width-70">Undangan pernikahan online dikemas dalam bentuk website yang menarik dapat dibagikan kapanpun dan dimanapun.</p>
            <button onClick={HandleClickCreate} className="btn btn-lg btn-primary btn-register px-6 mt-5" type="submit">Buat Undangan</button>
          </div>

        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center text-center mt-5 feature" >
          <div className="col-lg-7">
            <h1 className="fw-600">Fitur Undangan Nikah Online</h1>
            <p className="text-muted">Berbagai macam fitur utama untuk undangan pernikahan kamu</p>
          </div>
        </div>

        <div className="row justify-content-center py-5">
          {Feature.feature.map((item, i) => {
            return <CardFeature
              key={i}
              icon={item.icon}
              name={item.name}
              detail={item.detail}
            />
          })}
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
