import React from 'react'
import './style.css'

export const TrackSearchResult = (track, chooseTrack) => {
  const handlePlay = () => {
    chooseTrack(track)
  }
  return (
    <div
      className="seachResult"
      style={{ cursor: 'pointer' }}
      onClick={handlePlay}
    >
      <img className="albumArtWork" src={track.albumUrl} alt="albumArtWork" />
      <div>
        <div>{track.title}</div>
        <div>{track.artist}</div>
      </div>
    </div>
  )
}
