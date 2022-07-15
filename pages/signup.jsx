import Head from 'next/head'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { useState } from 'react';
import Link from 'next/link';

export default function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert('Username: ' + email + '\nPassword: ' + password)
    }, 2000)
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
            <span className='p-input-icon-left'>
              <i className='pi pi-envelope px-1' />
              <InputText className='w-full pl-4' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' />
            </span>
            <span className='p-input-icon-left'>
              <Password className='w-full' inputClassName='w-full pl-10' value={password} onChange={(e) => setPassword(e.target.value)} toggleMask placeholder='Password' />
              <i className='pi pi-lock px-1' />
            </span>
          </div>
          <Button className='p-button p-button-rounded' disabled={loading} onClick={handleSubmit}>
            { loading ? <i className='pi pi-spin pi-spinner px-1' /> : null }
            <span className='text-center w-full'>{loading ? 'Loading' : 'Create Account'}</span>
          </Button>
          <p className='text-lg text-center text-slate-300'>Already have an account? <Link href='/login'><a className='text-blue-400 hover:text-blue-600 transition-colors mx-1'>Login here</a></Link></p>
        </div>
      </div>
    </>
  )
}