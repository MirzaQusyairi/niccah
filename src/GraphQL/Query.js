import { gql } from '@apollo/client'

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

export { GetOrderAll }