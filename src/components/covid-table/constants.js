/* eslint-disable react/prop-types */
import React from 'react'

export default t => [
  {
    key: 0,
    id: 'country',
    label: t('common:country'),
    style: { minWidth: 30 },
    format: ({ country }) => country,
  },
  {
    key: 1,
    id: 'cases',
    label: t('common:cases'),
    style: { minWidth: 30 },
    format: ({ cases }) => <b>{cases}</b>,
  },
  {
    key: 3,
    id: 'todayCases',
    label: t('common:todayCases'),
    style: { minWidth: 20 },
    format: ({ todayCases }) => todayCases,
  },
  {
    key: 4,
    id: 'deaths',
    label: t('common:deaths'),
    style: { minWidth: 20 },
    format: ({ deaths }) => deaths,
  },
  {
    key: 5,
    id: 'todayDeaths',
    label: t('common:todayDeaths'),
    style: { minWidth: 20 },
    format: ({ todayDeaths }) => todayDeaths,
  },
  {
    key: 6,
    id: 'recovered',
    label: t('common:recovered'),
    style: { minWidth: 20 },
    format: ({ recovered }) => recovered,
  },
  {
    key: 7,
    id: 'active',
    label: t('common:active'),
    style: { minWidth: 30 },
    format: ({ active }) => active,
  },
  {
    key: 8,
    id: 'critical',
    label: t('common:critical'),
    style: { minWidth: 20 },
    align: 'right',
    format: ({ critical }) => critical,
  },
  {
    key: 9,
    id: 'casesPerOneMillion',
    label: t('common:casesPerOneMillion'),
    style: { minWidth: 40 },
    align: 'right',
    format: ({ casesPerOneMillion }) => casesPerOneMillion,
  },
  {
    key: 10,
    id: 'casesPerOneMillion',
    label: t('common:populationPercentAffected'),
    style: { minWidth: 40 },
    align: 'right',
    format: ({ casesPerOneMillion }) => `${(casesPerOneMillion / 10000).toFixed(3)} %`,
  },
]
