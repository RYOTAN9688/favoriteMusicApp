import { Container } from '@material-ui/core'
import React from 'react'

const authEndPoint = 'https://accounts.spotify.com/authorize'

const redirectUrl = 'http://localhost:3000/callback'

const clientId = process.env.SPOTIFY_CLIENT_ID
const scopes = [
  'streaming',
  'user-read-email',
  'user-read-private',
  'playlist-modify-public',
  'playlist-modify-private',
]

const AUTH_URL = `${authEndPoint}?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
  '%20',
)}`

export const SpotifyLogin = () => {
  return (
    <Container component="main" maxWidth="xs" className="container">
      <a href={AUTH_URL}>Login Spotify</a>
    </Container>
  )
}
