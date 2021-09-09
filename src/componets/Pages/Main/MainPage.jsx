import { Container, CssBaseline } from '@material-ui/core'
import React from 'react'
import { Header } from '../../Organisms/Header/Header'
// import Typography from '@material-ui/core/Typography'

export const MainPage = () => {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
      </Container>
    </div>
  )
}
