import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { useGetOrderAll } from '../../Hooks'
import Loading from '../../components/Loading'
import CardOrder from './CardOrder'
import { useUpdateOrderByAdmin } from '../../Hooks'
import { ToastContainer, toast } from 'react-toastify'

export default function Admin() {
  const { dataAllOrder, loadingAllOrder, errorAllOrder } = useGetOrderAll()

  const [order, setOrder] = useState()
  const { updateOrder, loadingUpdateOrder } = useUpdateOrderByAdmin()

  const ToastifySuccess = (text) => {
    toast.success(text, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const onUpdateOrder = (val) => {
    updateOrder({
      variables: {
        ...val,
      }
    })
    ToastifySuccess("Orderan berhasil diperbarui!")
  }

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
      <ToastContainer limit={1} />
      <div className="container">
        <div className="row justify-content-center text-center mt-5" >
          <div className="col-lg-7">
            <h1 className="fw-600">Orderan</h1>
          </div >
        </div>
        {console.log(order)}
        <div className="row justify-content-center pt-3 pb-5 px-2">
          {loadingAllOrder || loadingUpdateOrder ? (<Loading />) : (
            order?.map(item => (
              <CardOrder
                key={item.id}
                data={item}
                onUpdate={onUpdateOrder}
              />
            ))
          )}
        </div>
      </div>
    </>
  )
}
