import { gql } from '@apollo/client'

const GetUserData = gql`
  query GetUserData($email: String, $password: String) {
    user(where: {email: {_eq: $email}, password: {_eq: $password}}) {
      id
      email
      name
      phone
    }
  }
`

const GetOrderAll = gql`
  query GetOrderAll {
    order(order_by: {id: desc}) {
      id
      name
      packet
      date_finish
      status
      link
      userorder {
        name
        phone
      }
    }
  }
`

const GetOrderByUserID = gql`
  query GetOrderByUserID($userid: Int) {
    order(order_by: {id: desc}, where: {user_id: {_eq: $userid}}) {
      id
      name
      packet
      date_finish
      status
      link
      userorder {
        name
        phone
      }
    }
  }
`


export {
  GetUserData,
  GetOrderAll,
  GetOrderByUserID,
}