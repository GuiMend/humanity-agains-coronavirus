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
      highlightYellow: '#FFF9C4',
      lightYellow: '#ffffed',
      mediumOrange: '#F9CF7F',
      highOrange: 'rgba(255, 147, 58, 0.8)',
      lightGreen: 'rgba(137, 194, 148, 0.7)',
      lightRed: '#FFDBDB',
      mediumRed: 'rgba(244, 146, 146, 0.7)',
      highRed: 'rgba(244, 75, 75, 0.7)',
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
