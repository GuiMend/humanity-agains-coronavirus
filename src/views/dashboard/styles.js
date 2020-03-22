import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  titleWrapper: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: '150px',
    [theme.breakpoints.up('xl')]: {
      marginTop: 0,
      marginBottom: '220px',
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '160px',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '180px',
    },
  },
  title: {
    textAlign: 'center',
    fontWeight: 600,
  },
  fullWidth: {
    width: '100%',
  },
}))
