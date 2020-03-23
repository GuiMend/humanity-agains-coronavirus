import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import ReactGA from 'react-ga'

import { GA_ID } from '_config/environment'

import './bootstrap'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/configure-store'
import Router from './router'
import './i18n'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#004D40',
    },
    custom: {
      red: '#A63232',
      green: '#4BB543',
      gray1: '#F5F5F5',
      lightGray: '#848d8f',
      darkGray: '#757575',
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
  typography: {
    fontFamily: 'Roboto, sans-serif',
    button: {
      textTransform: 'none',
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

ReactGA.initialize(GA_ID)

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

registerServiceWorker()

root()
