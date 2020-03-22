import React from 'react'
import PropTypes from 'prop-types'

import Header from '_components/header'

import useStyles from './styles'

const App = ({ children }) => {
  const styles = useStyles()
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
}

export default React.memo(App)
