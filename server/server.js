const express = require('express')
require('dotenv').config()
const cors = require('cors')
const spotifyWebApi = require('spotify-web-api-node')

const app = express()
app.use(cors())
app.use(express.json())

const redirectUrl = 'http://localhost:3000/callback'

const clientId = process.env.SPOTIFY_CLIENT_ID

const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

app.post('/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken

  const spotifyApi = new spotifyWebApi({
    redirectUri: redirectUrl,
    clientId: clientId,
    clientSecret: clientSecret,
    refreshToken,
  })

  spotifyApi
    .refreshAccessToken()
    .then(data => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      })
    })
    .catch(() => {
      res.sendStatus(400)
    })
})

app.post('/login', (req, res) => {
  const code = req.body.code

  const spotifyApi = new spotifyWebApi({
    redirectUri: redirectUrl,
    clientId: clientId,
    clientSecret: clientSecret,
  })

  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(() => {
      res.sendStatus(400)
    })
})

app.listen(3001)
