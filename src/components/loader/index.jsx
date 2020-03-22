import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const Loader = () => {
  const styles = useStyles()
  return (
    <div className={styles.wrapper}>
      <CircularProgress color="secondary" />
    </div>
  )
}

export default Loader
