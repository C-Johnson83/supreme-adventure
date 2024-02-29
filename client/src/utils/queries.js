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
     
    }
  }
}
`;

export const SEARCH_ACCESS_CODE = gql`
  query getListByAccessCode($accessCode: String!) {
    getListByAccessCode(accessCode: $accessCode) {
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
        purchased
      }
    }
  }
`;

