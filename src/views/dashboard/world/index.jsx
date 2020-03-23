import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Typography, Link, Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink } from '@reach/router'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import {
  allCasesSelector,
  loadingAllCases,
  countriesCasesSelector,
  loadingCountriesCases,
} from '_modules/covid/selector'
import { getAllCovidCases, getCountries } from '_modules/covid/actions'
import useDashboardStyles from '_views/dashboard/styles'
import { formatTimeZoneDate } from '_utils/date-format'
import CasesSummary from '_components/cases-summary'
import CovidTable from '_components/covid-table'

const WorldDashboard = () => {
  const stylesDashboard = useDashboardStyles()
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
      <Grid item className={stylesDashboard.titleWrapper}>
        <Typography className={stylesDashboard.title} variant="h1">
          {t('common:monitor')}
        </Typography>
      </Grid>
      <Grid item className={stylesDashboard.fullWidth}>
        <Link component={RouterLink} to="/" variant="body2" className={stylesDashboard.link}>
          <Button
            aria-label="ver detalhes"
            color="primary"
            variant="contained"
            endIcon={<ChevronRightIcon className={stylesDashboard.detailIcon} />}
          >
            <Typography>{t('common:goToBrazil')}</Typography>
          </Button>
        </Link>
      </Grid>
      <Grid item className={stylesDashboard.fullWidth}>
        <CasesSummary loading={loadingAllCovidCases} allCovidCases={allCovidCases} date={date} />
      </Grid>
      <Grid item className={stylesDashboard.fullWidth}>
        <CovidTable data={covidByCountries} loading={loadingCovidByCountries} />
      </Grid>
    </Grid>
  )
}

export default WorldDashboard
