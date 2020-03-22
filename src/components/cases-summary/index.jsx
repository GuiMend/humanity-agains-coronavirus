import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Paper, Grid, CircularProgress } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import { getAllCovidCases } from '_modules/covid/actions'
import { allCasesSelector, loadingAllCases } from '_modules/covid/selector'
import { formatTimeZoneDate } from '_utils/date-format'

import useStyles, { StyledTypograpgy } from './styles'

const CasesSummary = () => {
  const styles = useStyles()
  const dispatch = useDispatch()
  const { t } = useTranslation(['common'])
  const loadingAllCovidCases = useSelector(loadingAllCases)
  const allCovidCases = useSelector(allCasesSelector)
  const date = allCovidCases?.updated && formatTimeZoneDate(new Date(allCovidCases?.updated))

  useEffect(() => {
    dispatch(getAllCovidCases())
  }, [dispatch])

  if (loadingAllCovidCases) {
    return <CircularProgress color="secondary" />
  }

  return (
    <Paper className={styles.wrapper}>
      <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
        <Grid item xs={12} md={4}>
          <StyledTypograpgy variant="body2" className={styles.gray}>
            {t('common:totalCases')}
          </StyledTypograpgy>
          <StyledTypograpgy variant="h1" className={styles.gray}>
            <b>{allCovidCases?.cases?.toLocaleString()}</b>
          </StyledTypograpgy>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledTypograpgy variant="body2" className={styles.red}>
            {t('common:totalDeaths')}
          </StyledTypograpgy>
          <StyledTypograpgy variant="h1" className={styles.red}>
            <b>{allCovidCases?.deaths?.toLocaleString()}</b>
          </StyledTypograpgy>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledTypograpgy variant="body2" className={styles.green}>
            {t('common:totalRecovered')}
          </StyledTypograpgy>
          <StyledTypograpgy variant="h1" className={styles.green}>
            <b>{allCovidCases?.recovered?.toLocaleString()}</b>
          </StyledTypograpgy>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledTypograpgy className={styles.time}>
            {t('common:lastUpdated')}: {date}
          </StyledTypograpgy>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default CasesSummary
