import { Container } from '@material-ui/core'
import React from 'react'

const authEndPoint = 'https://accounts.spotify.com/authorize'

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID

console.log(clientId)
const scopes = [
  'streaming',
  'user-read-email',
  'user-read-private',
  'user-library-read',
  'playlist-modify-private',
  'user-read-playback-state',
]

const AUTH_URL = `${authEndPoint}?client_id=${clientId}&response_type=code&redirect_uri=http://localhost:3000/callback&scope=${scopes.join(
  '%20',
)}`

export const SpotifyLogin = () => {
  return (
    <Container component="main" maxWidth="xs" className="container">
      <a href={AUTH_URL}>Login Spotify</a>
    </Container>
  )
}
