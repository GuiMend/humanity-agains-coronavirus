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
      marginTop: theme.spacing(2),
      marginBottom: '180px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(1),
      marginBottom: '170px',
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