import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'

export const SearchField = () => {
  return (
    <div>
      <TextField variant="outlined" id="searhMusic" label="検索"></TextField>
      <Button type="button" onClick="">
        Search
      </Button>
    </div>
  )
}

export const SearchFormContainer = ({
  className,
  defaultValue,
  onSubmit,
  presenter,
}) => {
  const [keyword, setKeyword] = useState(defaultValue)
  return presenter({
    className,
    defaultValue,
    onChange: setKeyword,
    onSubmit: () => onSubmit(keyword),
  })
}
