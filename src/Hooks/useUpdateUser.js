import { useMutation } from '@apollo/client'
import { UpdateUser } from '../GraphQL/Mutation'
import { GetUserDataByID } from '../GraphQL/Query'

export default function useUpdateUser() {
  const [updateUser, { loading: loadingUpdateUser }] = useMutation(UpdateUser, { refetchQueries: [GetUserDataByID] })

  return {
    updateUser,
    loadingUpdateUser
  }
}
