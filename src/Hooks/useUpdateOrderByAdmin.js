import { useMutation } from '@apollo/client'
import { UpdateOrderByAdmin } from '../GraphQL/Mutation'
import { GetOrderAll } from '../GraphQL/Query'

export default function useUpdateOrderByAdmin() {
  const [updateOrder, { loading: loadingUpdateOrder }] = useMutation(UpdateOrderByAdmin, { refetchQueries: [GetOrderAll] })

  return { updateOrder, loadingUpdateOrder }
}
