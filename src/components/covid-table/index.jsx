import React, { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import classnames from 'classnames'
import { List } from 'immutable'
import PropTypes from 'prop-types'
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

import Loader from '_components/loader'

import { WORLDOMETER_DATA_FORMAT, BRAZIL_DATA_FORMAT, BRAZIL_CITY_DATA_FORMAT } from './constants'
import useStyles from './styles'

const CovidTable = ({ columns, data, loading, brazil }) => {
  const styles = useStyles()
  const { t } = useTranslation(['common', 'country'])
  const [orderBy, setOrderBy] = useState(brazil ? 'confirmed' : 'cases')
  const [order, setOrder] = useState('desc')
  const COLUMNS = columns(t)

  const firstRow = data.reduce(
    (acc, cur) => ({
      ...acc,
      cases: acc.cases + cur.cases,
      confirmed: acc.confirmed + cur.confirmed,
      todayCases: acc.todayCases + cur.todayCases,
      deaths: acc.deaths + cur.deaths,
      todayDeaths: acc.todayDeaths + cur.todayDeaths,
      recovered: acc.recovered + cur.recovered,
      active: acc.active + cur.active,
      critical: acc.critical + cur.critical,
    }),
    {
      city: t('common:totalState'),
      state: t('common:totalCountry'),
      country: t('common:totalWorld'),
      casesPerMillion: null,
      confirmedPer100kInhabitants: null,
      cases: 0,
      confirmed: 0,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      active: 0,
      critical: 0,
    }
  )

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

  if (loading) {
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
          {data?.length && (
            <>
              <TableRow hover>
                {COLUMNS.map(({ format, applyStyle, className, ...column }) => (
                  <TableCell {...column} className={classnames(styles[column.id], styles.total)}>
                    <Typography variant="body2">
                      {format({ ...firstRow, hideDetails: true })}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
              {stableSort(data, getComparator()).map((row, rowIndex) => (
                <TableRow key={row.country || row.city || row.state} hover>
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
            </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

CovidTable.propTypes = {
  columns: PropTypes.oneOf([WORLDOMETER_DATA_FORMAT, BRAZIL_DATA_FORMAT, BRAZIL_CITY_DATA_FORMAT]),
  loading: PropTypes.bool,
  brazil: PropTypes.bool,
  data: PropTypes.oneOfType([
    PropTypes.instanceOf(List),
    PropTypes.arrayOf(
      PropTypes.shape({
        cases: PropTypes.number,
        deaths: PropTypes.number,
        confirmed: PropTypes.number,
        recovered: PropTypes.number,
        todayCases: PropTypes.number,
        todayDeaths: PropTypes.number,
      })
    ),
  ]).isRequired,
}

CovidTable.defaultProps = {
  columns: WORLDOMETER_DATA_FORMAT,
  loading: false,
  brazil: false,
}

export default CovidTable
