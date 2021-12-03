import { useEffect, useState, useRef } from 'react'
import Navbar from '../../components/Navbar'
import { useGetOrderByUserID, useInsertOrder, useUpdateOrder, useDeleteOrder } from '../../Hooks'
import Loading from '../../components/Loading'
import CardOrder from './CardOrder'
import CreateOrder from './CreateOrder'
import { useNavigate } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'


export default function User() {
  const ref = useRef()
  const navigate = useNavigate()
  const userID = localStorage.getItem("user_id")

  const { dataByUserIDOrder, loadingByUserIDOrder, errorByUserIDOrder } = useGetOrderByUserID(userID)
  const { insertOrder, loadingInsertOrder } = useInsertOrder()
  const { updateOrder, loadingUpdateOrder } = useUpdateOrder()
  const { deleteOrder, loadingDeleteOrder } = useDeleteOrder()

  const [orderbyuserid, setOrderByUserID] = useState()

  const [openCreate, setOpenCreate] = useState(false)

  const onOpenCreate = () => {
    setOpenCreate(true);
  };

  const handleCreateModal = (value) => {
    setOpenCreate(value);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (openCreate && ref.current && !ref.current.contains(e.target)) {
        setOpenCreate(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [openCreate]);

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

  const onInsertOrder = (val) => {
    insertOrder({
      variables: { ...val }
    })
    ToastifySuccess("Orderan berhasil dikirim!")
  }

  const onUpdateOrder = (val) => {
    updateOrder({
      variables: {
        ...val,
      }
    })
    ToastifySuccess("Orderan berhasil diperbarui!")
  }

  const onDeleteOrder = (id) => {
    deleteOrder({
      variables: { id }
    })
    ToastifySuccess("Orderan berhasil dihapus!")
  }

  useEffect(() => {
    if (localStorage.getItem("user_id") === null) {
      navigate("/")
    }
    if (dataByUserIDOrder) {
      setOrderByUserID(dataByUserIDOrder.order)
    }
  }, [dataByUserIDOrder, navigate])

  if (errorByUserIDOrder) {
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
        <div className="row justify-content-center pt-3 pb-5 px-2">
          <button className="btn btn-primary btn-register w-20 ms-auto create-order" onClick={onOpenCreate}>Buat Undangan</button>
          {openCreate && (
            <CreateOrder ref={ref} onClick={handleCreateModal} onSubmit={onInsertOrder} />
          )}

          {loadingByUserIDOrder || loadingDeleteOrder || loadingInsertOrder || loadingUpdateOrder ? (<Loading />) : (
            [
              (orderbyuserid?.length > 0 ? (
                orderbyuserid?.map(item => (
                  <CardOrder
                    key={item.id}
                    data={item}
                    onDelete={onDeleteOrder}
                    onUpdate={onUpdateOrder}
                  />
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
