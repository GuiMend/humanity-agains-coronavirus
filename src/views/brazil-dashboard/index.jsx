import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import { allBrazilCasesSelector, loadingBrazilAllCases } from '_modules/covid-brazil/selector'
import { BRAZIL_DATA_FORMAT } from '_components/covid-table/constants'
import { getAllBrazilCases } from '_modules/covid-brazil/actions'
import CasesSummary from '_components/cases-summary'
import CovidTable from '_components/covid-table'
import BrazilMap from '_components/brazil-map'

import useStyles from './styles'

const Dashboard = () => {
  const styles = useStyles()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const allBrazilCovidCases = useSelector(allBrazilCasesSelector)
  const loadingAllBrazilCovidCases = useSelector(loadingBrazilAllCases)
  // const date = allCovidCases?.updated && formatTimeZoneDate(new Date(allCovidCases?.updated))

  const statesData = allBrazilCovidCases.filter(
    entry => entry.placeType === 'state' && entry.isLast
  )

  const summaryData = statesData.reduce(
    (acc, curr) => {
      return {
        cases: acc.cases + curr.confirmed,
        deaths: acc.deaths + curr.deaths,
      }
    },
    {
      cases: 0,
      deaths: 0,
      recovered: null,
    }
  )

  useEffect(() => {
    dispatch(getAllBrazilCases())
  }, [dispatch])

  return (
    <Grid container spacing={2}>
      <Grid item className={styles.titleWrapper}>
        <Typography className={styles.title} variant="h1">
          {t('common:monitorBrazil')}
        </Typography>
      </Grid>
      <Grid item className={styles.fullWidth}>
        <CasesSummary
          loading={loadingAllBrazilCovidCases}
          allCovidCases={summaryData}
          link="https://brasil.io/dataset/covid19/caso"
          source={t('common:brazilSource')}
          // date={date}
        />
      </Grid>
      <Grid item className={styles.fullWidth}>
        <BrazilMap />
      </Grid>
      <Grid item className={styles.fullWidth}>
        <CovidTable
          brazil
          data={statesData}
          columns={BRAZIL_DATA_FORMAT}
          loading={loadingAllBrazilCovidCases}
        />
      </Grid>
    </Grid>
  )
}

export default Dashboard
