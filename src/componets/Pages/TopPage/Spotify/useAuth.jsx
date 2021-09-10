import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const useAuth = code => {
  const [accessToken, setAccessToken] = useState()
  const [refrechToken, setrefrechToken] = useState()
  const [expiresIn, setexpiresIn] = useState()

  useEffect(() => {
    axios.post('http:localhost:3001/login', { code }).then(res => {
      console.log(res.data)
    })
  }, [code])

  return <div></div>
}
