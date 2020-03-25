import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  stateLabel: {
    opacity: 0.8,
    backgroundColor: theme.palette.custom.lightYellow,
    border: `solid 1px ${theme.palette.custom.safetyOrange}`,
    padding: theme.spacing(2),
    borderRadius: '4px',
    textAlign: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 600,
  },
}))
