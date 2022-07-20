
// routes to /signup

// imports
import Head from 'next/head'
import AuthCard from '../components/authCard.jsx'
import { useMutation } from "@apollo/client"
import { useRouter } from 'next/router'
import { SIGNUP_USER, LOGIN_USER } from '../graphql/mutations'
import { client } from '../graphql/client'

export default function Signup() {

  const [signup] = useMutation(SIGNUP_USER)
  const [login] = useMutation(LOGIN_USER)
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Sign Up - Augie UI Prototypes</title>
      </Head>

      <AuthCard 
        onSubmit={
          async ({ email, password, reset }) => {
            try {
              await signup({
                variables: {
                  input: { email, password, firstName: '', lastName: '' }
                }
              })
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
        title='Sign Up and Start Creating!'
        SSODivider='Create an account with'
        emailDivider='Or use your email'
        submitButton='Create Account'
        otherQuestion='Already have an account?'
        otherLinkText='Login'
        otherLinkHref='/login'
        passwordLength={8}
      />

    </>
  )
}