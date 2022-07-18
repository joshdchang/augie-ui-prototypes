
// routes to /login

// imports
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'

// local components
const CenterContent = p => (
  <div className='grid justify-items-center'>
    {p.children}
  </div>
)
const MainCard = p => (
  <div className='bg-slate-800 w-full max-w-lg rounded-2xl p-11 grid gap-7 text-center'>
    {p.children}
  </div>
)
const CardHeader = p => (
  <h2 className='text-2xl font-semibold z-10'>
    {p.children}
  </h2>
)
const CardDivider = p => (
  <div className='text-lg text-slate-300 bg-slate-300 text-center border-b-[1px] border-b-slate-300 leading-[1px] my-4'>
    <span className='bg-slate-800 p-4'>
      {p.children}
    </span>
  </div>
)
const SSOContainer = p => (
  <div className='grid gap-4 grid-flow-col'>
    {p.children}
  </div>
)
const SSOButton = p => (
  <Button
    className='p-2 grid justify-center grid-flow-col p-button-secondary p-button-rounded'
    aria-label={p.service}
  >
    <i className={`px-1 pi pi-${p.service}`}></i>
    <span className='px-2'>
      {p.children}
    </span>
  </Button>
)
const FormContainer = p => (
  <div className='grid gap-4'>
    {p.children}
  </div>
)
const InputContainer = p => (
  <div className='grid gap-1'>
    <span className='p-input-icon-left'>
      {p.children}
      <i className={`pi px-1 pi-${p.icon}`} />
    </span>
    {p.invalid && submitted && <small className='p-error'>{p.invalid}</small>}
  </div>
)
const OtherLink = p => (
  <p className='text-lg text-center text-slate-300 grid gap-2 grid-flow-col justify-center'>
    {p.children}
    <Link href={p.href}>
      <a className='text-blue-400 hover:text-blue-600 transition-colors'>
        {p.linkText}
      </a>
    </Link>
  </p>
)
const SubmitButton = p => (
  <Button
    className='p-button p-button-rounded'
    disabled={p.loading}
    onClick={p.handleSubmit}
  >
    {p.loading && <i className='pi pi-spin pi-spinner px-1' />}
    <span className='text-center w-full'>
      {p.loading ? 'Loading' : p.children}
    </span>
  </Button>
)

export default function Auth(props) {

  // form logic
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailInvalid, setEmailInvalid] = useState('')
  const [passwordInvalid, setPasswordInvalid] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    checkValidity()
  }, [email, password])

  function checkValidity() {
    if (submitted) {
      if (!email) {
        setEmailInvalid('Email is required')
      } else {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          setEmailInvalid('Email is invalid')
        } else {
          setEmailInvalid('')
        }
      }
      if (!password) {
        setPasswordInvalid('Password is required')
      } else {
        if (password.length < 6) {
          setPasswordInvalid('Password must be at least 6 characters')
        } else {
          setPasswordInvalid('')
        }
      }
      return !emailInvalid && !passwordInvalid
    }
  }

  function handleSubmit(e) {

    e.preventDefault()
    setSubmitted(true)

    if (checkValidity()) {
      setLoading(true)

      // simulate send to server
      props.onSubmit({ email, password, setEmail, setPassword, setLoading, setSubmitted })
    }
  }

  // template (very self-documenting)
  return (
    <CenterContent>
      <MainCard>

        <CardHeader> {props.title} </CardHeader>

        <CardDivider> {props.SSODivider} </CardDivider>
        <SSOContainer>
          <SSOButton service='google'>Google</SSOButton>
          <SSOButton service='facebook'>Facebook</SSOButton>
          <SSOButton service='apple'>Apple</SSOButton>
        </SSOContainer>

        <CardDivider> {props.emailDivider} </CardDivider>
        <FormContainer>

          <InputContainer icon='envelope' invalid={emailInvalid}>
            <InputText
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              className={`w-full pl-4 ${emailInvalid && submitted && 'p-invalid'}`}
            />
          </InputContainer>

          <InputContainer icon='lock' invalid={passwordInvalid}>
            <Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              inputClassName='w-full pl-10'
              toggleMask
              className={`w-full ${passwordInvalid && submitted && 'p-invalid'}`}
            />
          </InputContainer>

        </FormContainer>

        <SubmitButton
          loading={loading}
          handleSubmit={handleSubmit}
        >
          {props.submitButton} 
        </SubmitButton>

        <OtherLink href={props.otherLinkHref} linkText={props.otherLinkText}>{props.otherQuestion}</OtherLink>

      </MainCard>
    </CenterContent>
  )
}