import React from 'react'
import { useAuth } from './useAuth'

export const DashBoard = ({ code }) => {
  const accessToken = useAuth(code)
  return <div>{code}</div>
}