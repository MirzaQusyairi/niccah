import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { useGetOrderByUserID } from '../../Hooks'
import Loading from '../../components/Loading'
import CardOrder from './CardOrder'

export default function User() {
  const userID = localStorage.getItem("user_id")

  const { dataByUserIDOrder, loadingByUserIDOrder, errorByUserIDOrder } = useGetOrderByUserID(userID)

  const [orderbyuserid, setOrderByUserID] = useState()

  console.log(dataByUserIDOrder)

  useEffect(() => {
    if (dataByUserIDOrder) {
      setOrderByUserID(dataByUserIDOrder.order)
    }
  }, [dataByUserIDOrder])

  if (errorByUserIDOrder) {
    return <h1>something went wrong</h1>
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center text-center mt-5" >
          <div className="col-lg-7">
            <h1 className="fw-600">Orderan</h1>
          </div >
        </div>
        <div className="row justify-content-center pt-3 pb-5 px-2">
          <a href="/#" className="btn btn-primary btn-register w-20 ms-auto">Buat Undangan</a>
          {loadingByUserIDOrder ? (<Loading />) : (
            [
              (orderbyuserid?.length > 0 ? (
                orderbyuserid?.map(item => (
                  <CardOrder key={item.id} data={item} />
                ))
              ) : (
                <h3 className="text-center text-pink">tidak ada orderan.</h3>
              ))
            ]

          )}
        </div>
      </div>
    </>
  )
}
