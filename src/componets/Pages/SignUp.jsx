import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Checkbox from '@material-ui/core/Checkbox'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom'
const useStyles = makeStyles(theme => ({
  header: {
    padding: '20px',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'Alegreya Sans SC',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: '15px',
  },
}))

export const SignUp = () => {
  const classes = useStyles()
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <div className={classes.header}>
          <Typography component="h1" variant="h4">
            FavoriteMusic🎵
          </Typography>
          <Typography component="h2" variant="h3">
            音楽でみんなと繋がろう
          </Typography>
        </div>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="usernameを入力"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Emailを入力"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Passwordを入力"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              ログイン
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              component={Link}
              to="/"
            >
              TOPPageに戻る
            </Button>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    </div>
  )
}
