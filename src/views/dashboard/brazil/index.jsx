import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Typography, Link, Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink } from '@reach/router'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import {
  brazilStateCasesSelector,
  loadingBrazilStateCases,
  lastUpdatedSelector,
} from '_modules/covid-brazil/selector'
import { BRAZIL_DATA_FORMAT } from '_components/covid-table/constants'
import { getBrazilStatesCases, getBrazilLatUpdated } from '_modules/covid-brazil/actions'
import useDashboardStyles from '_views/dashboard/styles'
import { formatTimeZoneDate } from '_utils/date-format'
import CasesSummary from '_components/cases-summary'
import CovidTable from '_components/covid-table'

import useStyles from './styles'

const BrazilDashboard = () => {
  const styles = useStyles()
  const stylesDashboard = useDashboardStyles()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const statesData = useSelector(brazilStateCasesSelector)
  const loadingBrazilStatesCovidCases = useSelector(loadingBrazilStateCases)
  const lastUpdated = useSelector(lastUpdatedSelector)
  const date = lastUpdated && formatTimeZoneDate(lastUpdated)

  const summaryData = statesData.reduce(
    (acc, curr) => {
      return {
        cases: acc.cases + curr.cases,
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
    dispatch(getBrazilStatesCases())
    dispatch(getBrazilLatUpdated())
  }, [dispatch])

  return (
    <Grid container spacing={2}>
      <Grid item className={stylesDashboard.titleWrapper}>
        <Typography className={styles.title} variant="h1">
          {t('common:monitorBrazil')}
        </Typography>
      </Grid>
      <Grid item className={stylesDashboard.fullWidth}>
        <Link component={RouterLink} to="/world" variant="body2" className={stylesDashboard.link}>
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
          loading={loadingBrazilStatesCovidCases}
          allCovidCases={summaryData}
          link="https://brasil.io/dataset/covid19/caso"
          source={t('common:brazilSource')}
          date={date}
        />
      </Grid>
      <Grid item className={stylesDashboard.fullWidth}>
        <div className={styles.stateLabel}>
          <Typography>{t('common:selectState')}</Typography>
        </div>
      </Grid>
      <Grid item className={stylesDashboard.fullWidth}>
        <CovidTable
          brazil
          data={statesData}
          columns={BRAZIL_DATA_FORMAT}
          loading={loadingBrazilStatesCovidCases}
        />
      </Grid>
    </Grid>
  )
}

export default BrazilDashboard
