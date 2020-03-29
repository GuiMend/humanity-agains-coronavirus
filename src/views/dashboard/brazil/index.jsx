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
import { historicalDataSelector } from '_modules/covid/selector'
import { BRAZIL_DATA_FORMAT } from '_components/covid-table/constants'
import { getBrazilStatesCases, getBrazilLatUpdated } from '_modules/covid-brazil/actions'
import { getHistoricCovidCases } from '_modules/covid/actions'
import useDashboardStyles from '_views/dashboard/styles'
import { formatTimeZoneDate, formatDate } from '_utils/date-format'
import CasesSummary from '_components/cases-summary'
import CasesChart from '_components/cases-chart'
import CovidTable from '_components/covid-table'

import useStyles from './styles'

const BrazilDashboard = () => {
  const styles = useStyles()
  const stylesDashboard = useDashboardStyles()
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const historicalData = useSelector(historicalDataSelector('brazil'))
  const statesData = useSelector(brazilStateCasesSelector)
  const loadingBrazilStatesCovidCases = useSelector(loadingBrazilStateCases)
  const lastUpdated = useSelector(lastUpdatedSelector)
  const date = lastUpdated && formatTimeZoneDate(lastUpdated)

  const format = i18n.language === 'pt' ? 'd/MM' : 'MMMM do'

  const chartCases = historicalData
    ? historicalData?.map?.(entry => [formatDate(entry.date, format), entry.cases, entry.newCases])
    : []

  const deathsCases = historicalData
    ? historicalData?.map?.(entry => [
        formatDate(entry.date, format),
        entry.deaths,
        entry.newDeaths,
      ])
    : []

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
    dispatch(getHistoricCovidCases('brazil'))
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
        <CasesChart
          title={t('charts:titleCases')}
          vAxis={{ title: t('charts:cases') }}
          hAxis={{ title: t('charts:date') }}
          data={[['Date', t('common:cases'), t('common:todayCases')], ...chartCases]}
          series={{
            0: { type: 'line', color: 'blue' },
            1: { color: 'black' },
          }}
        />
      </Grid>
      <Grid item className={stylesDashboard.fullWidth}>
        <CasesChart
          title={t('charts:titleDeaths')}
          vAxis={{ title: t('charts:death') }}
          hAxis={{ title: t('charts:date') }}
          data={[['Date', t('charts:deaths'), t('charts:todayDeaths')], ...deathsCases]}
          series={{
            0: { type: 'line', color: 'red' },
            1: { color: 'black' },
          }}
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
