import { Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { SearchField } from '../Molucules/SearchField'
import { TrackSearchResult } from '../Organisms/SearchResult/TrackSearchResult'
import { useAuth } from '../Pages/TopPage/Spotify/useAuth'
import SpotifyWebApi from 'spotify-web-api-node'
// import axios from 'axios'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
})

export const DashBoard = ({ code }) => {
  const accessToken = useAuth(code)
  console.log(accessToken)
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const chooseTrack = track => {
    setSearch('')
  }

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    let cancel = false
    spotifyApi.searchTracks(search).then(res => {
      if (cancel) return
      setSearchResults(
        res.body.tracks.items.map(track => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image
              return smallest
            },
            track.album.images[0],
          )
          return {
            artist: track.artists[0].name,
            title: track.name,
            url: track.uri,
            albumUrl: smallestAlbumImage.url,
          }
        }),
      )
    })
    return () => (cancel = true)
  }, [search, accessToken])

  return (
    <Container component="main" maxWidth="xs">
      <SearchField onChange={onchange} />
      <TrackSearchResult
        track={track}
        key={track.url}
        chooseTrack={chooseTrack}
      />
    </Container>
  )
}
