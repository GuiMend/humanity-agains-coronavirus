import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'

import Header from '_components/header'

import useStyles from './styles'

const App = ({ children, location }) => {
  const styles = useStyles()

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search)
  }, [location.pathname, location.search])

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.background}>
        <div className={styles.toolbar} />
        <section className={styles.content}>{children}</section>
      </div>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
}

export default React.memo(App)
