
// routes to /login

// TODO - remember me?
// TODO - forgot password?
// TODO - disable strength meter on login

import Head from 'next/head'
import AuthCard from '../components/authCard'
import { useMutation } from "@apollo/client"
import { useRouter } from 'next/router'
import { LOGIN_USER } from '../graphql/mutations'
import { useContext } from 'react'
import { AuthContext } from '../graphql/auth'

export default function Login() {

  const [loginMutation] = useMutation(LOGIN_USER)
  const { login } = useContext(AuthContext)
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
              const { data } = await loginMutation({
                variables: {
                  input: { email, password }
                }
              })
              login(data.signInUser)
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