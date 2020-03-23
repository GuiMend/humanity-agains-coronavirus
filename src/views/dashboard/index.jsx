import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import {
  allCasesSelector,
  loadingAllCases,
  countriesCasesSelector,
  loadingCountriesCases,
} from '_modules/covid/selector'
import { getAllCovidCases, getCountries } from '_modules/covid/actions'
import { formatTimeZoneDate } from '_utils/date-format'
import CasesSummary from '_components/cases-summary'
import CovidTable from '_components/covid-table'

import useStyles from './styles'

const Dashboard = () => {
  const styles = useStyles()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const allCovidCases = useSelector(allCasesSelector)
  const loadingAllCovidCases = useSelector(loadingAllCases)
  const loadingCovidByCountries = useSelector(loadingCountriesCases)
  const covidByCountries = useSelector(countriesCasesSelector)
  const date = allCovidCases?.updated && formatTimeZoneDate(new Date(allCovidCases?.updated))

  useEffect(() => {
    dispatch(getAllCovidCases())
    dispatch(getCountries())
  }, [dispatch])

  return (
    <Grid container spacing={2}>
      <Grid item className={styles.titleWrapper}>
        <Typography className={styles.title} variant="h1">
          {t('common:monitor')}
        </Typography>
      </Grid>
      <Grid item className={styles.fullWidth}>
        <CasesSummary loading={loadingAllCovidCases} allCovidCases={allCovidCases} date={date} />
      </Grid>
      <Grid item className={styles.fullWidth}>
        <CovidTable data={covidByCountries} loading={loadingCovidByCountries} />
      </Grid>
    </Grid>
  )
}

export default Dashboard
