
// routes to /login

// TODO - remember me?
// TODO - forgot password?

import Head from 'next/head'
import AuthCard from '../components/authCard'
import { useMutation } from "@apollo/client"
import { useRouter } from 'next/router'
import { LOGIN_USER } from '../graphql/mutations'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../graphql/auth'
import Nav from '../components/nav'

export default function Login() {

  const [loginMutation] = useMutation(LOGIN_USER)
  const { login, authenticated } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (authenticated) {
      router.push('/dashboard')
    }
  }, [authenticated])

  return (
    <>
      <Head>
        <title>Login - Augie UI Prototypes</title>
      </Head>

      <Nav />
      
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
        passwordFeedback={false}
      />

    </>
  )
}