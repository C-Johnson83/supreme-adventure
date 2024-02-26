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
  mutation addList($username: String!, $accessCode: String!, $listType: String!, $listName: String!, $eventDate: Date!) {
    addList(username: $username, accessCode: $accessCode, listType: $listType, listName: $listName, eventDate: $eventDate ) {

            _id
            username
            listName
            listType
          eventDate
      
    }
  }
`;

export const ADD_ITEM_TO_LIST = gql`
  mutation addItemToList($id: ID!, $title: String!, $description: String!, $link: String!, $note: String!) {
    addItemToList(id: $id, title: $title, description: $description, link: $link, note: $note) {
      _id
      title
      description
      link
      note
    }
  }
`;




