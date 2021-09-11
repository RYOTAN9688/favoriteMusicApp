import React from 'react'
import { DashBoard } from '../../../../Templates/DashBoard'

import { SpotifyLogin } from './SpotifyLogin'

const code = new URLSearchParams(location.search).get('code')
console.log(code)

export const Spotify = () => {
  return code ? <DashBoard code={code} /> : <SpotifyLogin />
}
