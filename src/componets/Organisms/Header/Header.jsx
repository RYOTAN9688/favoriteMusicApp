import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { SearchForm } from './SearchField'

const useStyles = makeStyles({
  header: {
    justifyContent: 'space-between',
  },
  textField: {
    overflow: 'auto',
  },
})

export const Header = () => {
  const classes = useStyles()
  return (
    <Toolbar className={classes.header}>
      <Button type="submit" size="medium">
        FavoriteMusic
      </Button>
      <SearchForm />
    </Toolbar>
  )
}
