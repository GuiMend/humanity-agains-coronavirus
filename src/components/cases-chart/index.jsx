import React from 'react'
import PropTypes from 'prop-types'
import { Chart } from 'react-google-charts'

const CasesChart = ({ data, ...options }) => (
  <Chart
    width="100%"
    height="400px"
    chartType="ComboChart"
    loader={<div>Loading Chart</div>}
    data={data}
    options={{
      backgroundColor: 'transparent',
      seriesType: 'bars',
      ...options,
    }}
    rootProps={{ 'data-testid': '1' }}
  />
)

CasesChart.propTypes = {
  data: PropTypes.shape(),
}

CasesChart.defaultProps = {
  data: [],
}

export default CasesChart
