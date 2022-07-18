
// routes to /login

// imports
import Head from 'next/head'
import Auth from '../components/auth.jsx'

export default function Login() {

  const login = (data) => {
    alert('Username: ' + data.email + '\nPassword: ' + data.password)
  }

  // template (very self-documenting)
  return (
    <>
      <Head>
        <title>Login - Augie UI Prototypes</title>
      </Head>

      <Auth
        onSubmit={login}
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