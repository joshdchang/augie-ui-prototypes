
// routes to /login

// imports
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'

// local components
const CenterContent = ({ children }) => (
  <div className='grid justify-items-center'>
    {children}
  </div>
)
const MainCard = ({ children }) => (
  <div className='bg-slate-800 w-full max-w-lg rounded-2xl p-11 grid gap-7 text-center'>
    {children}
  </div>
)
const CardHeader = ({ children }) => (
  <h2 className='text-2xl font-semibold z-10'>
    {children}
  </h2>
)
const CardDivider = ({ children }) => (
  <div className='text-lg text-slate-300 bg-slate-300 text-center border-b-[1px] border-b-slate-300 leading-[1px] my-4'>
    <span className='bg-slate-800 p-4'>
      {children}
    </span>
  </div>
)
const SSOContainer = ({ children }) => (
  <div className='grid gap-4 grid-flow-col'>
    {children}
  </div>
)
const SSOButton = ({ children, service }) => (
  <Button
    className='p-2 grid justify-center grid-flow-col p-button-secondary p-button-rounded'
    aria-label={service}
  >
    <i className={`px-1 pi pi-${service}`}></i>
    <span className='px-2'>
      {children}
    </span>
  </Button>
)
const FormContainer = ({ children }) => (
  <div className='grid gap-4'>
    {children}
  </div>
)
const InputContainer = ({ children, invalid, icon, submitted }) => (
  <div className='grid gap-1'>
    <span className='p-input-icon-left'>
      {children}
      <i className={`pi px-1 pi-${icon}`} />
    </span>
    {invalid && submitted && <small className='p-error'>{invalid}</small>}
  </div>
)
const OtherLink = ({ children, href, linkText }) => (
  <p className='text-lg text-center text-slate-300 grid gap-2 grid-flow-col justify-center'>
    {children}
    <Link href={href}>
      <a className='text-blue-400 hover:text-blue-600 transition-colors'>
        {linkText}
      </a>
    </Link>
  </p>
)
const SubmitButton = ({ children, loading, handleSubmit }) => (
  <Button
    className='p-button p-button-rounded'
    disabled={loading}
    onClick={handleSubmit}
  >
    {loading && <i className='pi pi-spin pi-spinner px-1' />}
    <span className='text-center w-full'>
      {loading ? 'Loading' : children}
    </span>
  </Button>
)

export default function Auth({ title, SSODivider, emailDivider, submitButton, otherQuestion, otherLinkText, otherLinkHref }) {

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

  function handleSubmit(e) {

    e.preventDefault()
    setSubmitted(true)

    if (checkValidity()) {
      setLoading(true)

      // simulate send to server
      props.onSubmit({ email, password, loading, submitted, setEmail, setPassword, setLoading, setSubmitted })
    }
  }

  // component structure (somewhat self-documenting I think)
  return (
    <CenterContent>
      <MainCard>

        <CardHeader> {title} </CardHeader>

        <CardDivider> {SSODivider} </CardDivider>
        <SSOContainer>
          <SSOButton service='google'>Google</SSOButton>
          <SSOButton service='facebook'>Facebook</SSOButton>
          <SSOButton service='apple'>Apple</SSOButton>
        </SSOContainer>

        <CardDivider> {emailDivider} </CardDivider>
        <FormContainer>

          <InputContainer
            icon='envelope'
            invalid={emailInvalid}
            submitted={submitted}
          >
            <InputText
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              className={`w-full pl-4 ${emailInvalid && submitted && 'p-invalid'}`}
            />
          </InputContainer>

          <InputContainer
            icon='lock'
            invalid={passwordInvalid}
            submitted={submitted}
          >
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
          {submitButton}
        </SubmitButton>

        <OtherLink href={otherLinkHref} linkText={otherLinkText}>{otherQuestion}</OtherLink>

      </MainCard>
    </CenterContent>
  )
}