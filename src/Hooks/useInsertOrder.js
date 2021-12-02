import { useMutation } from '@apollo/client'
import { InsertOrder } from '../GraphQL/Mutation'
import { GetOrderByUserID } from '../GraphQL/Query'

export default function useInsertOrder() {
  const [insertOrder, { loading: loadingInsertOrder }] = useMutation(InsertOrder, { refetchQueries: [GetOrderByUserID] })

  return {
    insertOrder,
    loadingInsertOrder
  }
}
