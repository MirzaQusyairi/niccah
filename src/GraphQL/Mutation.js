import { gql } from '@apollo/client'

const InsertOrder = gql`
  mutation MyMutation($user_id: Int, $name: String, $packet: String, $date_finish: date) {
    insert_order(objects: {user_id: $user_id, name: $name, packet: $packet, date_finish: $date_finish}) {
      affected_rows
    }
  }
`

const DeleteOrder = gql`
  mutation MyMutation($id: Int) {
    delete_order(where: {id: {_eq: $id}}) {
      affected_rows
    }
  }
`

export {
  InsertOrder,
  DeleteOrder,
}