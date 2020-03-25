import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    padding: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
  },
  background: {
    height: '400px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  link: {
    position: 'absolute',
    right: '-20px',
    top: '220px',
    textDecoration: 'none',
    color: 'white',
    transform: 'rotate(-90deg)',
    '-webkit-transform': 'rotate(-90deg)',
  },
}))
