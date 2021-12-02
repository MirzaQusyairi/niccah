import { useMutation } from '@apollo/client'
import { UpdateOrder } from '../GraphQL/Mutation'
import { GetOrderByUserID } from '../GraphQL/Query'

export default function useUpdateOrder() {
  const [updateOrder, { loading: loadingUpdateOrder }] = useMutation(UpdateOrder, { refetchQueries: [GetOrderByUserID] })

  return { updateOrder, loadingUpdateOrder }
}
