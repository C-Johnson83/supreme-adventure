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
`;


export const QUERY_LIST = gql`
query getListById($id: ID!) {
  getListById(id: $id) {
    listType
    listName
    eventDate
    accessCode
    username
    _id
    items {
      _id
      title
      description
      link
      note
    }
  }
}
`;

