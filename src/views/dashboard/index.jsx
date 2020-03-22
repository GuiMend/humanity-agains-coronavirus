import React from 'react'

import CasesSummary from '_components/cases-summary'
import CovidTable from '_components/covid-table'

const Dashboard = () => (
  <div>
    <CasesSummary />
    <CovidTable />
  </div>
)

export default Dashboard
