import { useQuery } from '@apollo/client'
import { GetOrderByUserID } from '../GraphQL/Query'

export default function useGetOrderByUserID(userid) {
  const {
    data: dataByUserIDOrder,
    loading: loadingByUserIDOrder,
    error: erroByUserIDOrder
  } = useQuery(GetOrderByUserID, { variables: { userid } })

  return {
    dataByUserIDOrder,
    loadingByUserIDOrder,
    erroByUserIDOrder
  };
}
