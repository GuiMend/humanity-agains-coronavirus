import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Typography, Link, Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink } from '@reach/router'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import {
  brazilCitiesCasesSelector,
  loadingBrazilCitiesCases,
  lastUpdatedSelector,
} from '_modules/covid-brazil/selector'
import { BRAZIL_CITY_DATA_FORMAT } from '_components/covid-table/constants'
import { getBrazilCitiesCases, getBrazilLatUpdated } from '_modules/covid-brazil/actions'
import useDashboardStyles from '_views/dashboard/styles'
import { formatTimeZoneDate } from '_utils/date-format'
import CasesSummary from '_components/cases-summary'
import CovidTable from '_components/covid-table'

import useStyles from './styles'

const BrazilStateDashboard = ({ state }) => {
  const styles = useStyles()
  const stylesDashboard = useDashboardStyles()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const selectedStateData = useSelector(brazilCitiesCasesSelector)
  const loadingAllBrazilCovidCases = useSelector(loadingBrazilCitiesCases)
  const lastUpdated = useSelector(lastUpdatedSelector)
  const date = lastUpdated && formatTimeZoneDate(lastUpdated)

  const summaryData = selectedStateData.reduce(
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
    dispatch(getBrazilCitiesCases({ state: state.toUpperCase() }))
    dispatch(getBrazilLatUpdated())
  }, [dispatch, state])

  return (
    <Grid container spacing={2}>
      <Grid item className={stylesDashboard.titleWrapper}>
        <Typography className={styles.title} variant="h1">
          {t(`brazil:${state.toUpperCase()}`)}
        </Typography>
      </Grid>
      <Grid item className={stylesDashboard.fullWidth}>
        <Link component={RouterLink} to="/" variant="body2" className={stylesDashboard.link}>
          <Button
            aria-label="ver detalhes"
            color="primary"
            variant="contained"
            startIcon={<ChevronLeftIcon className={stylesDashboard.detailIcon} />}
          >
            <Typography>{t('common:goToBrazil')}</Typography>
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
          data={selectedStateData}
          columns={BRAZIL_CITY_DATA_FORMAT}
          loading={loadingAllBrazilCovidCases}
        />
      </Grid>
    </Grid>
  )
}

BrazilStateDashboard.propTypes = {
  state: PropTypes.string,
}

BrazilStateDashboard.defaultProps = {
  state: '',
}

export default BrazilStateDashboard
