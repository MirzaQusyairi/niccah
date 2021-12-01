import { useEffect, useState } from 'react'
import Navbar from '../../components/NavbarUser'
import { useGetOrderAll } from '../../Hooks'
import Loading from '../../components/Loading'
import CardOrder from './CardOrder'

export default function Admin() {
  const { dataAllOrder, loadingAllOrder, errorAllOrder } = useGetOrderAll()

  const [order, setOrder] = useState()

  useEffect(() => {
    if (dataAllOrder) {
      setOrder(dataAllOrder.order);
    }
  }, [dataAllOrder]);

  if (errorAllOrder) {
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
        {console.log(order)}
        <div className="row justify-content-center pt-3 pb-5 px-2">
          {loadingAllOrder ? (<Loading />) : (
            order?.map(item => (
              <CardOrder key={item.id} data={item} />
            ))
          )}
        </div>
      </div>
    </>
  )
}
