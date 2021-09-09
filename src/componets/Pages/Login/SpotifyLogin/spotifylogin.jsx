import React from 'react'
import { loginUrl } from '../../../../../api/spotify'

export const spotifylogin = () => {
  return (
    <div className="login">
      <h2>ログイン前</h2>
      <a href={loginUrl}>spotifyへログイン</a>
    </div>
  )
}
