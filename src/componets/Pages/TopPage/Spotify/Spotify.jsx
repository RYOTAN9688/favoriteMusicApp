import React from 'react'

import { DashBoard } from './DashBoard'
import { SpotifyLogin } from './SpotifyLogin/SpotifyLogin'

const code = new URLSearchParams(location.search).get('code')

export const Spotify = () => {
  return code ? <DashBoard code={code} /> : <SpotifyLogin />
}
