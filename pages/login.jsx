
// routes to /login

// imports
import Head from 'next/head'
import Auth from '../components/auth.jsx'

export default function Login() {

  const login = ({ email, password, loading, submitted, setEmail, setPassword, setLoading, setSubmitted}) => {
    setTimeout(() => {
      alert('Username: ' + email + '\nPassword: ' + password)
      setLoading(false)
      setSubmitted(false)
      setEmail('')
      setPassword('')
    }, 1000)
  }

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