import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

// import Image from '../../Image/NoMusicNoLife.jpg'

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },

  submitsignup: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: '15px',
  },
  submitlogin: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#e32547',
    borderRadius: '15px',
  },
}))

export const TopPage = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.image}>
        <Container component="main" maxWidth="xs">
          <div className={classes.header}>
            <Typography component="h1" variant="h4">
              FavoriteMusicApp🎵
            </Typography>
          </div>
          <div className={classes.submit}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submitsignup}
              component={Link}
              to="/Login"
            >
              ログイン
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submitlogin}
              component={Link}
              to="/SignUp"
            >
              新規登録
            </Button>
          </div>
        </Container>
      </div>
    </>
  )
}
