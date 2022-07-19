
// routes to /login

import Head from 'next/head'
import Auth from '../components/auth.jsx'
import { gql, useMutation } from "@apollo/client"
import { useRouter } from 'next/router'

const LOGIN = gql`mutation LoginUser($input: SignInInput!) {
  signInUser(input: $input)
}`

export default function Login() {

  const [login] = useMutation(LOGIN)
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Login - Augie UI Prototypes</title>
      </Head>

      <Auth
        onSubmit={
          async ({ email, password, reset }) => {
            try {
              const res = await login({
                variables: {
                  input: { email, password }
                }
              })

              // save token
              localStorage.setItem('token', res.data.signInUser)
              router.push('/dashboard')

            } catch (e) {
              console.error(e)
              alert(e)
              reset()
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