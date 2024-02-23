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

export const SAVE_LIST = gql`
  mutation saveList($username: String!, $accessCode: String!, $listType: String!, $listName: String!, $eventDate: Date) {
    saveList(username: $username, accessCode: $accessCode, listType: $listType, listName: $listName, eventDate: $eventDate) {
      _id
      username
      accessCode
      listType 
      listName
     

    }
  }
`;


