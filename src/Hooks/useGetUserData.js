import { useLazyQuery } from '@apollo/client'
import { GetUserData } from '../GraphQL/Query'

export default function useGetUserData() {
  const [
    getUserData,
    {
      data,
      loading,
      error
    }
  ] = useLazyQuery(GetUserData);

  return {
    getUserData,
    data,
    loading,
    error
  };
}
