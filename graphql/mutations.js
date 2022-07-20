
import { gql } from "@apollo/client"

export const LOGIN_USER = gql`
  mutation LoginUser($input: SignInInput!) {
    signInUser(input: $input)
  }
`

export const SIGNUP_USER = gql`
  mutation SignUpUser($input: SignUpInput!) {
    signUpUser(input: $input)
  }
`