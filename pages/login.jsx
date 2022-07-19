
// routes to /login

import Head from 'next/head'
import Auth from '../components/auth.jsx'
import { gql, useMutation } from "@apollo/client";

const LOGIN = gql`mutation LoginUser($input: SignInInput!) {
  signInUser(input: $input)
}`

export default function Login() {

  const [login] = useMutation(LOGIN)

  return (
    <>
      <Head>
        <title>Login - Augie UI Prototypes</title>
      </Head>

      <Auth
        onSubmit={
          async ({ email, setEmail, password, setPassword, setLoading, setSubmitted }) => {
            try {
              const res = await login({
                variables: {
                  input: { email, password }
                }
              })

              console.log(res)
              alert('Login successful!')
              
            } catch (e) {

              console.error(e)
              alert(e)

              setLoading(false)
              setSubmitted(false)
              setEmail('')
              setPassword('')
            }
          }
        }
        title='Welcome Back!'
        SSODivider='Login with'
        emailDivider='Or use your email'
        submitButton='Login'
        otherQuestion='New to Augie?'
        otherLinkText='Sign Up'
        otherLinkHref='/signup'
      />

    </>
  )
}