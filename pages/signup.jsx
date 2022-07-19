
// routes to /signup

// imports
import Head from 'next/head'
import Auth from '../components/auth.jsx'

export default function Signup() {

  const signup = ({ email, password, reset }) => {
    setTimeout(() => {
      alert('Username: ' + email + '\nPassword: ' + password)
      reset()
    }, 1000)
  }

  return (
    <>
      <Head>
        <title>Sign Up - Augie UI Prototypes</title>
      </Head>

      <Auth 
        onSubmit={signup}
        title='Sign Up and Start Creating!'
        SSODivider='Create an account with'
        emailDivider='Or use your email'
        submitButton='Create Account'
        otherQuestion='Already have an account?'
        otherLinkText='Login'
        otherLinkHref='/login'
      />

    </>
  )
}