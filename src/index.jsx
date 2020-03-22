import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

import './bootstrap'
import configureStore from './store/configure-store'
import Router from './router'
import './i18n'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#70dbbe',
    },
    custom: {
      red: '#A63232',
      green: '#4BB543',
      lightGray: '#848d8f',
      lightYellow: '#ffffed',
      mediumOrange: '#F9CF7F',
      highOrange: '#FF933A',
      lightGreen: '#93FFA7',
      lightRed: '#FFDBDB',
      mediumRed: '#F49292',
      highRed: '#F44B4B',
      safetyOrange: '#FF7900',
      purple: '#5e35b1',
    },
  },
  overrides: {
    MuiTypography: {
      body1: {
        fontSize: '1.6rem',
      },
      body2: {
        fontSize: '1.4rem',
      },
      h1: {
        fontSize: '3.5rem',
      },
      h2: {
        fontSize: '2rem',
      },
      caption: {
        fontSize: '1.2rem',
      },
    },
  },
})

const root = () => {
  const initialState = {}
  const store = configureStore(initialState)
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>,
    document.getElementById('root')
  )
}

root()
