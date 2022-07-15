
// TODO - email validation

import { useState, useEffect } from 'react'

import Head from 'next/head'
import Link from 'next/link'

import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'

export default function Signup() {

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
      setPasswordInvalid('')
    }
    return !emailInvalid && !passwordInvalid
  }

  function handleSubmit(e) {
    e.preventDefault()

    setSubmitted(true)

    if (checkValidity()) {
      setLoading(true)
      setTimeout(() => {
        alert('Username: ' + email + '\nPassword: ' + password)
        setLoading(false)
        setEmail('')
        setPassword('')
        setSubmitted(false)
      }, 2000)
    }
  }

  return (
    <>
      <Head>
        <title>Sign Up – Augie UI Prototypes</title>
        <meta name='description' content="Josh's prototypes for the Augie UI he is making while he learns React/Next" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='grid justify-items-center'>
        <div className='bg-slate-800 w-full max-w-lg rounded-2xl p-11 grid gap-7 text-center'>
          <h2 className='text-2xl font-semibold z-10'>Sign Up and Start Creating!</h2>
          <div className='text-lg text-slate-300 bg-slate-300 text-center border-b-[1px] border-b-slate-300 leading-[1px] my-4'>
            <span className='bg-slate-800 p-4'>Create an account with</span>
          </div>
          <div className='grid gap-4 grid-flow-col'>
            <Button className='p-2 grid justify-center grid-flow-col p-button-secondary p-button-rounded' aria-label='Google'>
              <i className='pi pi-google px-1'></i>
              <span className='px-2'>Google</span>
            </Button>
            <Button className='p-2 grid justify-center grid-flow-col p-button-secondary p-button-rounded' aria-label='Facebook'>
              <i className='pi pi-facebook px-1'></i>
              <span className='px-2'>Facebook</span>
            </Button>
            <Button className='p-2 grid justify-center grid-flow-col p-button-secondary p-button-rounded' aria-label='Apple'>
              <i className='pi pi-apple px-1'></i>
              <span className='px-2'>Apple</span>
            </Button>
          </div>
          <div className='text-lg text-slate-300 bg-slate-300 text-center border-b-[1px] border-b-slate-300 leading-[1px] my-4'>
            <span className='bg-slate-800 p-4'>Or use your email</span>
          </div>
          <div className='grid gap-4'>
            <div className='grid gap-1'>
              <span className='p-input-icon-left'>
                <i className='pi pi-envelope px-1' />
                <InputText className={'w-full pl-4 ' + (emailInvalid && submitted ? 'p-invalid' : '')} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' />
              </span>
              {emailInvalid && submitted && <small className='p-error'>{emailInvalid}</small>}
            </div>
            <div className='grid gap-1'>
              <span className='p-input-icon-left'>
                <Password className={'w-full ' + (passwordInvalid && submitted ? 'p-invalid' : '')} inputClassName='w-full pl-10' value={password} onChange={(e) => setPassword(e.target.value)} toggleMask placeholder='Password' />
                <i className='pi pi-lock px-1' />
              </span>
              {passwordInvalid && submitted && <small className='p-error'>{passwordInvalid}</small>}
            </div>
          </div>
          <Button className='p-button p-button-rounded' disabled={loading} onClick={handleSubmit}>
            {loading ? <i className='pi pi-spin pi-spinner px-1' /> : null}
            <span className='text-center w-full'>{loading ? 'Loading' : 'Create Account'}</span>
          </Button>
          <p className='text-lg text-center text-slate-300'>Already have an account? <Link href='/login'><a className='text-blue-400 hover:text-blue-600 transition-colors mx-1'>Login here</a></Link></p>
        </div>
      </div>
    </>
  )
}