import React from 'react'

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: '#572c80',
      },
      secondary: {
        main: '#08a9e2',
      },
    },
  })
)

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
