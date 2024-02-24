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
     
      }
    }
  }
`;