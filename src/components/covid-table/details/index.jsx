import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from '@reach/router'
import { Link, IconButton } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import useStyles from './styles'

const Details = ({ state }) => {
  const styles = useStyles()

  return (
    <Link
      component={RouterLink}
      to={`/brasil/${state?.toLowerCase()}`}
      variant="body2"
      className={styles.link}
    >
      <IconButton aria-label="ver detalhes" color="secondary">
        <ChevronRightIcon className={styles.detailIcon} />
      </IconButton>
    </Link>
  )
}

Details.propTypes = {
  state: PropTypes.string.isRequired,
}

export default Details
