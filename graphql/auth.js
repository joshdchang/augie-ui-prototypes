
import { createContext, useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'
import client from '../graphql/client'

export function checkToken() {
  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem('token')
    if (token) {
      const user = jwtDecode(token)
      if (user.exp > new Date().getTime() / 1000) {
        return {
          authenicated: true,
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

  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  function refresh() {
    const parsedToken = checkToken()
    if (parsedToken.authenticated !== authenticated) {
      setAuthenticated(parsedToken.authenticated)
    }
    if (parsedToken.user !== user) {
      setUser(parsedToken.user)
    }
    if (parsedToken.authenticated !== authenticated || parsedToken.user !== user) {
      client.resetStore()
    }
  }
  function logout() {
    localStorage.removeItem('token')
    refresh()
  }
  function login(token) {
    localStorage.setItem('token', token)
    refresh()
  }
  useEffect(refresh, [])

  return (
    <AuthContext.Provider value={{ authenticated, user, refresh, logout, login }}>
      {children}
    </AuthContext.Provider>
  )
}