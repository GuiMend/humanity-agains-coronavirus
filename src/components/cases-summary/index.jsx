import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Paper, Grid } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import Loader from '_components/loader'

import useStyles, { StyledTypograpgy } from './styles'

const CasesSummary = ({ loading, allCovidCases, date, link, source }) => {
  const styles = useStyles()
  const { t } = useTranslation(['common'])

  if (loading) {
    return <Loader />
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
          <StyledTypograpgy
            component="p"
            variant={allCovidCases?.recovered ? 'h1' : 'caption'}
            className={classnames({ [styles.green]: allCovidCases?.recovered })}
          >
            {allCovidCases?.recovered ? (
              <b>{allCovidCases.recovered.toLocaleString()}</b>
            ) : (
              t('common:noData')
            )}
          </StyledTypograpgy>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledTypograpgy className={styles.time}>
            {t('common:lastUpdated')}: {date || '-'}
          </StyledTypograpgy>
          <StyledTypograpgy className={styles.time}>
            {t('common:source')}:{' '}
            <a className={styles.link} href={link} rel="noopener noreferrer" target="_blank">
              {source}
            </a>
          </StyledTypograpgy>
        </Grid>
      </Grid>
    </Paper>
  )
}

CasesSummary.propTypes = {
  loading: PropTypes.bool,
  allCovidCases: PropTypes.shape().isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string,
  source: PropTypes.string,
}

CasesSummary.defaultProps = {
  loading: false,
  link: 'https://worldometers.info/coronavirus',
  source: 'worldometers',
}

export default CasesSummary
