import React, { useCallback } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, Grid } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t, i18n } = useTranslation(['common'])
  const currentLang = i18n.language.includes('en')

  const language = {
    [true]: { label: 'EN', lang: 'en' },
    [false]: { label: 'PT', lang: 'pt' },
  }

  const toggleLang = useCallback(() => {
    i18n.changeLanguage(language[!currentLang].lang)
  }, [currentLang, i18n, language])

  return (
    <AppBar>
      <Toolbar>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h5">{t('common:title')}</Typography>
          </Grid>
          <Grid item>
            <Button onClick={toggleLang}>
              <Typography variant="body2">{language[currentLang].label}</Typography>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
