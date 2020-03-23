import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Typography, Link, Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink } from '@reach/router'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import {
  allBrazilCasesSelector,
  loadingBrazilAllCases,
  lastUpdatedSelector,
} from '_modules/covid-brazil/selector'
import { BRAZIL_DATA_FORMAT } from '_components/covid-table/constants'
import { getAllBrazilCases, getBrazilLatUpdated } from '_modules/covid-brazil/actions'
import useDashboardStyles from '_views/dashboard/styles'
import { formatTimeZoneDate } from '_utils/date-format'
import CasesSummary from '_components/cases-summary'
import CovidTable from '_components/covid-table'

const BrazilDashboard = () => {
  const stylesDashboard = useDashboardStyles()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const allBrazilCovidCases = useSelector(allBrazilCasesSelector)
  const loadingAllBrazilCovidCases = useSelector(loadingBrazilAllCases)
  const lastUpdated = useSelector(lastUpdatedSelector)
  const date = lastUpdated && formatTimeZoneDate(lastUpdated)

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
    dispatch(getBrazilLatUpdated())
  }, [dispatch])

  return (
    <Grid container spacing={2}>
      <Grid item className={stylesDashboard.titleWrapper}>
        <Typography className={stylesDashboard.title} variant="h1">
          {t('common:monitorBrazil')}
        </Typography>
      </Grid>
      <Grid item className={stylesDashboard.fullWidth}>
        <Link
          component={RouterLink}
          to="/world"
          variant="body2"
          className={stylesDashboard.fullWidth}
        >
          <Button
            aria-label="ver detalhes"
            color="primary"
            variant="contained"
            startIcon={<ChevronLeftIcon className={stylesDashboard.detailIcon} />}
          >
            <Typography>{t('common:goToWorld')}</Typography>
          </Button>
        </Link>
      </Grid>
      <Grid item className={stylesDashboard.fullWidth}>
        <CasesSummary
          loading={loadingAllBrazilCovidCases}
          allCovidCases={summaryData}
          link="https://brasil.io/dataset/covid19/caso"
          source={t('common:brazilSource')}
          date={date}
        />
      </Grid>
      <Grid item className={stylesDashboard.fullWidth}>
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

export default BrazilDashboard
