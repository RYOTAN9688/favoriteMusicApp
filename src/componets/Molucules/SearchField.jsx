import React from 'react'
import TextField from '@material-ui/core/TextField'

export const SearchField = ({ search, onchange }) => {
  return (
    <div>
      <TextField
        variant="outlined"
        type="search"
        label="Search Songs/Artists"
        onChange={onchange}
        value={search}
      ></TextField>
    </div>
  )
}
