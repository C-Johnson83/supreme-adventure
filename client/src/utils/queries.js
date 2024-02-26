import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      lists {
        _id
        listType
        listName
        accessCode
        eventDate
     
      }
    }
  }
`


export const QUERY_LIST = gql`
query getListById($_Id: ID!) {
  getListById(_Id: $_Id) {
      _id
      listName
      listType
      accessCode
      eventDate
  }
}
`;
