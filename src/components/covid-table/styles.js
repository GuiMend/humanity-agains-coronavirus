import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  container: {
    maxHeight: '85vh',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  headCell: {
    textAlign: 'center',
  },
  todayCasesRowNone: {
    borderRadius: '4px',
    backgroundColor: theme.palette.custom.lightGreen,
  },
  todayCasesRowLow: {
    borderRadius: '4px',
    backgroundColor: theme.palette.custom.lightYellow,
  },
  todayCasesRowMedium: {
    borderRadius: '4px',
    backgroundColor: theme.palette.custom.mediumOrange,
  },
  todayCasesRowHigh: {
    borderRadius: '4px',
    backgroundColor: theme.palette.custom.highOrange,
    '&:MuiTypography-root': {
      fontWeight: 600,
    },
  },
  todayDeathsRowNone: {
    borderRadius: '4px',
    backgroundColor: theme.palette.custom.lightGreen,
  },
  todayDeathsRowLow: {
    borderRadius: '4px',
    backgroundColor: theme.palette.custom.lightRed,
  },
  todayDeathsRowMedium: {
    borderRadius: '4px',
    backgroundColor: theme.palette.custom.mediumRed,
  },
  todayDeathsRowHigh: {
    borderRadius: '4px',
    backgroundColor: theme.palette.custom.highRed,
    '&:MuiTypography-root': {
      fontWeight: 600,
    },
  },
  deaths: {
    color: theme.palette.custom.red,
  },
  newDeaths: {
    color: theme.palette.custom.red,
  },
  recovered: {
    color: theme.palette.custom.green,
  },
  critical: {
    color: theme.palette.custom.safetyOrange,
  },
}))
