import { useQuery } from '@apollo/client'
import { GetUserDataByID } from '../GraphQL/Query'

export default function useGetUserDataByID(id) {
  const { data: dataUser, loading: loadingUser, error: errorUser } = useQuery(GetUserDataByID, { variables: { id } })

  return { dataUser, loadingUser, errorUser }
}
