import React, { useEffect, useState } from 'react'
import './App.css'
import { Login } from '../../Login/Login'
import { getTokenFromUrl } from '../../../../../api/spotify'

export const App = () => {
  const [token, setToken] = useState()

  //ページが読み込まれたときのみコードのセットが実行
  useEffect(() => {
    const hash = getTokenFromUrl()
    location.hash = ''
    const _token = hash.access_token
    if (_token) {
      setToken(_token)
    }

    console.log('token', token)
  }, [])
  return <div className="app">{token ? <h1>Loggie in</h1> : <Login />}</div>
}
