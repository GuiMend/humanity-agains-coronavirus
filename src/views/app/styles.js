import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    padding: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
}))
