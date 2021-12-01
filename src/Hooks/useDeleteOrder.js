import { useMutation } from '@apollo/client'
import { DeleteOrder } from '../GraphQL/Mutation'
import { GetOrderByUserID } from '../GraphQL/Query'

export default function useDeleteOrder() {
  const [deleteOrder, { loading: loadingDeleteOrder }] = useMutation(DeleteOrder, { refetchQueries: [GetOrderByUserID] })

  return {
    deleteOrder,
    loadingDeleteOrder
  }
}
