
// routes to /login

// TODO - remember me?
// TODO - forgot password?

import Head from 'next/head'
import AuthCard from '../components/authCard.jsx'
import { useMutation } from "@apollo/client"
import { useRouter } from 'next/router'
import { LOGIN_USER } from '../graphql/mutations'
import { client } from '../graphql/client'

export default function Login() {

  const [login] = useMutation(LOGIN_USER)
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Login - Augie UI Prototypes</title>
      </Head>

      <AuthCard
        onSubmit={
          async ({ email, password, reset }) => {
            try {
              const { data } = await login({
                variables: {
                  input: { email, password }
                }
              })

              // save token
              localStorage.setItem('token', data.signInUser)
              client.resetStore()
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
        passwordLength={0}
      />

    </>
  )
}