import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t } = useTranslation(['common'])
  return (
    <AppBar>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h5">{t('common:title')}</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
