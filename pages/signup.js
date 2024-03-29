
// routes to /signup

// TODO - name

// imports
import Head from 'next/head'
import AuthCard from '../components/authCard'
import { useMutation } from "@apollo/client"
import { useRouter } from 'next/router'
import { SIGNUP_USER, LOGIN_USER } from '../graphql/mutations'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../graphql/auth'
import Nav from '../components/nav'

export default function Signup() {

  const [signupMutation] = useMutation(SIGNUP_USER)
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
        <title>Sign Up - Augie UI Prototypes</title>
      </Head>

      <Nav />

      <AuthCard 
        onSubmit={
          async ({ email, password, reset }) => {
            try {
              await signupMutation({
                variables: {
                  input: { email, password, firstName: '', lastName: '' }
                }
              })
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
        title='Sign Up and Start Creating!'
        SSODivider='Create an account with'
        emailDivider='Or use your email'
        submitButton='Create Account'
        otherQuestion='Already have an account?'
        otherLinkText='Login'
        otherLinkHref='/login'
        passwordLength={8}
        passwordFeedback={true}
      />

    </>
  )
}