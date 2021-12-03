import { gql } from '@apollo/client'

const CreateUser = gql`
  mutation MyMutation3($email: String, $name: String, $phone: String, $password: String) {
    insert_user(objects: {email: $email, name: $name, phone: $phone, password: $password}) {
      affected_rows
    }
  }
`

const UpdateUser = gql`
  mutation MyMutation($id: Int, $email: String, $name: String, $phone: String, $password: String, $avatar: String) {
    update_user(where: {id: {_eq: $id}}, _set: {email: $email, name: $name, phone: $phone, password: $password, avatar: $avatar}) {
      affected_rows
    }
  }
`

const InsertOrder = gql`
  mutation MyMutation($user_id: Int, $name: String, $packet: String, $date_finish: date) {
    insert_order(objects: {user_id: $user_id, name: $name, packet: $packet, date_finish: $date_finish}) {
      affected_rows
    }
  }
`

const UpdateOrder = gql`
  mutation MyMutation($id: Int, $name: String, $packet: String, $date_finish: date) {
    update_order(where: {id: {_eq: $id}}, _set: {name: $name, packet: $packet, date_finish: $date_finish}) {
      affected_rows
    }
  }
`

const UpdateOrderByAdmin = gql`
  mutation MyMutation2($id: Int, $status: String, $link: String) {
    update_order(where: {id: {_eq: $id}}, _set: {status: $status, link: $link}) {
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
  CreateUser,
  UpdateUser,
  InsertOrder,
  UpdateOrder,
  UpdateOrderByAdmin,
  DeleteOrder,
}