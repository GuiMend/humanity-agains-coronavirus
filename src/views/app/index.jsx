import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'

import Header from '_components/header'

import useStyles from './styles'

const App = ({ children, location }) => {
  const styles = useStyles()
  const { t } = useTranslation()

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search)
  }, [location.pathname, location.search])

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.background}>
        <div className={styles.toolbar} />
        <a
          className={styles.link}
          href="https://www.shutterstock.com/g/Paranyu"
          rel="noopener noreferrer"
          target="_blank"
        >
          {t('common:paranyuSource')}
        </a>
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
