import { gql } from 'apollo-boost';

export const LOGIN = gql`
  mutation signIn($login:String! , $password:String!) { 

    signIn(login:$login , password:$password) {
        token
    }
  }

` ;


