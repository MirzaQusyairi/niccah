import { useQuery } from '@apollo/client'
import { GetOrderAll } from '../GraphQL/Query'

export default function useGetOrderAll() {
  const {
    data: dataAllOrder,
    loading: loadingAllOrder,
    error: errorAllOrder
  } = useQuery(GetOrderAll)

  return {
    dataAllOrder,
    loadingAllOrder,
    errorAllOrder
  };
}
