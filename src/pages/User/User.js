import { useEffect, useState, useRef } from 'react'
import Navbar from '../../components/Navbar'
import { useGetOrderByUserID } from '../../Hooks'
import Loading from '../../components/Loading'
import CardOrder from './CardOrder'
import CreateOrder from './CreateOrder'
import { Link } from 'react-router-dom'
import { useDeleteOrder } from '../../Hooks'

export default function User() {
  const ref = useRef()
  const userID = localStorage.getItem("user_id")

  const { dataByUserIDOrder, loadingByUserIDOrder, errorByUserIDOrder } = useGetOrderByUserID(userID)
  const { deleteOrder, loadingDeleteOrder } = useDeleteOrder()

  const [orderbyuserid, setOrderByUserID] = useState()

  const [openCreate, setOpenCreate] = useState(false)

  const onOpenCreate = () => {
    setOpenCreate(true);
  };

  const handleCreateModal = (value) => {
    setOpenCreate(value);
  };


  // useEffect(() => {
  //   const handleClick = (e) => {
  //     if (openCreate && ref.current && !ref.current.contains(e.target)) {
  //       setOpenCreate(false);
  //     }
  //   };
  //   document.addEventListener("click", handleClick);
  //   return () => {
  //     document.removeEventListener("click", handleClick);
  //   };
  // }, [openCreate]);

  const onDelete = (id) => {
    deleteOrder({
      variables: { id }
    })
  }

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
          <Link to="" className="btn btn-primary btn-register w-20 ms-auto" onClick={onOpenCreate}>Buat Undangan</Link>
          {openCreate && (
            <CreateOrder ref={ref} onClick={handleCreateModal} />
          )}

          {loadingByUserIDOrder ? (<Loading />) : (
            [
              (orderbyuserid?.length > 0 ? (
                orderbyuserid?.map(item => (
                  <CardOrder key={item.id} data={item} onDelete={onDelete} />
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
