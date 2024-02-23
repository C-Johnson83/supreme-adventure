import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(username: $username, firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_LIST = gql`
  mutation addList($username: String!, $accessCode: String!, $listType: String!, $listName: String!) {
    addList(username: $username, accessCode: $accessCode, listType: $listType, listName: $listName ) {

            _id
            username
            listName
          
      
    }
  }
`;




