import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'

const SearchField = ({ defaultValue, onChange, onSubmit }) => {
  return (
    <div>
      <TextField
        variant="outlined"
        id="searhMusic"
        label="検索"
        defaultValue={defaultValue}
        onChange={onChange}
      ></TextField>
      <Button type="button" onClick={onSubmit}>
        Search
      </Button>
    </div>
  )
}

const SearchFormContainer = ({ defaultValue, onSubmit, presenter }) => {
  const [keyword, setKeyword] = useState(defaultValue)
  console.log(keyword)
  return presenter({
    defaultValue,
    onChange: setKeyword,
    onSubmit: () => onSubmit(keyword),
  })
}

SearchFormContainer.defalutProps = {
  defaultValue: '',
}

export const SearchForm = props => (
  <SearchFormContainer presenter={SearchField} {...props} />
)
