import { useEffect, useState } from 'react'
import Navbar from '../../components/NavbarUser'
import { useLazyQuery, useMutation } from '@apollo/client'
import { GetOrderAll } from '../../GraphQL/Query'
import Loading from '../../components/Loading'
import CardOrder from './CardOrder'

export default function Admin() {
  const [getOrderList, { data, loading, error }] = useLazyQuery(GetOrderAll)

  const [order, setOrder] = useState()

  useEffect(() => {
    getOrderList();
    if (data && typeof order === "undefined") {
      setOrder(data.order)
    }
  }, [data, order, getOrderList])

  if (error) {
    console.log(error)
    return null
  }

  if (loading) {
    return <Loading />
  }

  // const onGetData = () => {
  //   setOrder(() => {
  //     getOrderList();
  //     return data.order;
  //   });
  // };


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
          {order?.map(item => (
            <CardOrder key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  )
}
