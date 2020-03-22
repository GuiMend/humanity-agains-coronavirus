import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Paper,
  CircularProgress,
} from '@material-ui/core'

import { countriesCasesSelector, loadingCountriesCases } from '_modules/covid/selector'
import { getCountries, getJHUCovidCases } from '_modules/covid/actions'

import columns from './constants'
import useStyles from './styles'

const CovidTable = () => {
  const styles = useStyles()
  const dispatch = useDispatch()
  const { t } = useTranslation(['common'])
  const loadingCovidByCountries = useSelector(loadingCountriesCases)
  const covidByCountries = useSelector(countriesCasesSelector)
  const COLUMNS = columns(t)

  useEffect(() => {
    dispatch(getCountries())
    dispatch(getJHUCovidCases())
  }, [dispatch])

  if (loadingCovidByCountries) {
    return <CircularProgress />
  }

  return (
    <TableContainer component={Paper}>
      <Table className={styles.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {COLUMNS.map(({ format, ...column }) => (
              <TableCell {...column}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {covidByCountries?.length &&
            covidByCountries?.map(row => (
              <TableRow key={row.country}>
                {COLUMNS.map(({ format, ...column }) => (
                  <TableCell {...column} className={styles.bodyCell}>
                    {format(row)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CovidTable
