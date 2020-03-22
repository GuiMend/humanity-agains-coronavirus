import { makeStyles, withStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'

export default makeStyles(theme => ({
  wrapper: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
  },
  gray: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
  red: {
    color: theme.palette.custom.red,
  },
  green: {
    color: theme.palette.custom.green,
  },
  time: {
    color: theme.palette.custom.lightGray,
    fontSize: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.custom.purple,
  },
}))

export const StyledTypograpgy = withStyles(() => ({
  root: {
    textAlign: 'center',
  },
}))(Typography)
