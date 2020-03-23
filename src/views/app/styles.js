import { makeStyles } from '@material-ui/styles'

import ComunityWithMask from '_assets/images/people_with_mask.jpg'

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
    background: `url(${ComunityWithMask})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  link: {
    position: 'absolute',
    right: '-27px',
    top: '355px',
    textDecoration: 'none',
    color: theme.palette.custom.darkGray,
    transform: 'rotate(-90deg)',
    '-webkit-transform': 'rotate(-90deg)',
  },
}))
