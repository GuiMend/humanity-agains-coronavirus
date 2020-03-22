import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import CasesSummary from '_components/cases-summary'
import CovidTable from '_components/covid-table'

import useStyles from './styles'

const Dashboard = () => {
  const styles = useStyles()
  const { t } = useTranslation()
  return (
    <Grid container spacing={2}>
      <Grid item className={styles.titleWrapper}>
        <Typography className={styles.title} variant="h1">
          {t('common:monitor')}
        </Typography>
      </Grid>
      <Grid item className={styles.fullWidth}>
        <CasesSummary />
      </Grid>
      <Grid item className={styles.fullWidth}>
        <CovidTable />
      </Grid>
    </Grid>
  )
}

export default Dashboard
