import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import classnames from 'classnames'
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Paper,
  TableSortLabel,
  Typography,
  Tooltip,
} from '@material-ui/core'

import { countriesCasesSelector, loadingCountriesCases } from '_modules/covid/selector'
import { getCountries, getJHUCovidCases } from '_modules/covid/actions'
import Loader from '_components/loader'

import columns from './constants'
import useStyles from './styles'

const CovidTable = () => {
  const styles = useStyles()
  const dispatch = useDispatch()
  const { t } = useTranslation(['common', 'country'])
  const [orderBy, setOrderBy] = useState('cases')
  const [order, setOrder] = useState('desc')
  const loadingCovidByCountries = useSelector(loadingCountriesCases)
  const covidByCountries = useSelector(countriesCasesSelector)
  const COLUMNS = columns(t)

  useEffect(() => {
    dispatch(getCountries())
    dispatch(getJHUCovidCases())
  }, [dispatch])

  const descendingComparator = useCallback(
    (a, b) => {
      if (b[orderBy] < a[orderBy]) {
        return -1
      }
      if (b[orderBy] > a[orderBy]) {
        return 1
      }
      return 0
    },
    [orderBy]
  )

  const getComparator = useCallback(() => {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b)
      : (a, b) => -descendingComparator(a, b)
  }, [descendingComparator, order])

  const stableSort = useCallback((array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index])
    stabilizedThis.sort((a, b) => {
      const orderList = comparator(a[0], b[0])
      if (orderList !== 0) return orderList
      return a[1] - b[1]
    })
    return stabilizedThis.map(el => el[0])
  }, [])

  const createSortHandler = useCallback(
    property => () => {
      const isDesc = orderBy === property && order === 'desc'
      setOrder(isDesc ? 'asc' : 'desc')
      setOrderBy(property)
    },
    [order, orderBy]
  )

  if (loadingCovidByCountries) {
    return <Loader />
  }

  return (
    <TableContainer component={Paper} className={styles.container}>
      <Table className={styles.table} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {COLUMNS.map(({ format, applyStyle, tooltip, ...headCell }) => (
              <TableCell
                {...headCell}
                padding={headCell.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === headCell.id ? order : false}
                className={styles[headCell.id]}
              >
                <Tooltip title={<Typography>{tooltip}</Typography>}>
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={createSortHandler(headCell.id)}
                    className={styles.headCell}
                  >
                    <Typography variant="body2"> {headCell.label}</Typography>
                    {orderBy === headCell.id ? (
                      <span className={styles.visuallyHidden}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                      </span>
                    ) : null}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {covidByCountries?.length &&
            stableSort(covidByCountries, getComparator()).map((row, rowIndex) => (
              <TableRow key={row.country} hover>
                {COLUMNS.map(({ format, applyStyle, className, ...column }) => (
                  <TableCell
                    {...column}
                    className={classnames(styles[column.id], {
                      [styles[className(row)]]: applyStyle(row),
                    })}
                  >
                    <Typography variant="body2">
                      {format({ ...row, place: rowIndex + 1 })}
                    </Typography>
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
