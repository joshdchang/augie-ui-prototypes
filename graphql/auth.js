
import { createContext, useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'
import client from '../graphql/client'
import { useRouter } from 'next/router'

export function checkToken() {
  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem('token')
    if (token) {
      const user = jwtDecode(token)
      if (user.exp > new Date().getTime() / 1000) {
        return {
          authenticated: true,
          user
        }
      } else {
        localStorage.removeItem('token')
      }
    }
  }
  return {
    authenticated: false,
    user: null
  }
}

export const AuthContext = createContext()

export function AuthProvider({ children }) {

  const router = useRouter()

  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [init, setInit] = useState(false)
  
  function refresh() {
    const parsedToken = checkToken()
    if (parsedToken.authenticated !== authenticated) {
      setAuthenticated(parsedToken.authenticated)
    }
    if (parsedToken.user !== user) {
      setUser(parsedToken.user)
    }
    if (parsedToken.authenticated !== authenticated || parsedToken.user !== user) {
      client.clearStore()
    }
  }
  function logout() {
    localStorage.removeItem('token')
    refresh()
    router.push('/')
  }
  function login(token) {
    localStorage.setItem('token', token)
    refresh()
  }
  useEffect(() => {
    refresh()
    setInit(true)
  }, [])

  return (
    <AuthContext.Provider value={{ authenticated, user, refresh, logout, login }}>
      {init && children}
    </AuthContext.Provider>
  )
}
