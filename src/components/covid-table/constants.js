/* eslint-disable react/prop-types */
import React from 'react'

import styles from './styles.css'

const relativeSpeed = percent => {
  if (percent <= 0.05) return 'Low'
  if (percent <= 0.1) return 'Medium'
  return 'High'
}

export const WORLDOMETER_DATA_FORMAT = t => [
  {
    key: 100,
    id: 'place',
    tooltip: t('tooltip:order'),
    style: { minWidth: 10 },
    format: ({ place }) => place,
    className: () => '',
    applyStyle: () => false,
  },
  {
    key: 0,
    id: 'country',
    tooltip: t('tooltip:country'),
    label: t('common:country'),
    style: { minWidth: 30 },
    className: () => '',
    applyStyle: () => false,
    format: ({ country }) => t(`country:${country.replace('.', '').replace('.', '')}`),
  },
  {
    key: 1,
    id: 'cases',
    tooltip: t('tooltip:cases'),
    label: t('common:cases'),
    style: { minWidth: 30 },
    align: 'right',
    className: () => '',
    applyStyle: () => false,
    format: ({ cases }) => <b>{cases ? cases.toLocaleString() : '-'}</b>,
  },
  {
    key: 3,
    id: 'todayCases',
    tooltip: t('tooltip:todayCases'),
    label: t('common:todayCases'),
    className: ({ cases, todayCases }) =>
      `todayCasesRow${todayCases ? relativeSpeed(todayCases / cases) : 'None'}`,
    style: { minWidth: 100 },
    align: 'right',
    applyStyle: () => true,
    format: ({ cases, todayCases }) => (
      <span>
        {todayCases.toLocaleString()} <br />
        <span className={styles['new-cases']}>
          (+{((todayCases / cases) * 100 || 0).toFixed(2)}%)
        </span>
      </span>
    ),
  },
  {
    key: 4,
    id: 'deaths',
    tooltip: t('tooltip:deaths'),
    label: t('common:deaths'),
    style: { minWidth: 20 },
    align: 'right',
    className: () => '',
    applyStyle: () => false,
    format: ({ cases, deaths }) => (
      <span>
        {deaths ? deaths.toLocaleString() : '-'} <br />
        <span className={styles['new-cases']}>({((deaths / cases) * 100 || 0).toFixed(2)}%)</span>
      </span>
    ),
  },
  {
    key: 5,
    id: 'todayDeaths',
    tooltip: t('tooltip:todayDeaths'),
    label: t('common:todayDeaths'),
    style: { minWidth: 110 },
    align: 'right',
    className: ({ deaths, todayDeaths }) =>
      `todayDeathsRow${todayDeaths ? relativeSpeed(todayDeaths / deaths) : 'None'}`,
    applyStyle: () => true,
    format: ({ deaths, todayDeaths }) => (
      <span>
        {todayDeaths.toLocaleString()} <br />
        <span className={styles['new-cases']}>
          (+{((todayDeaths / deaths) * 100 || 0).toFixed(2)}%)
        </span>
      </span>
    ),
  },
  {
    key: 6,
    id: 'recovered',
    tooltip: t('tooltip:recovered'),
    label: t('common:recovered'),
    style: { minWidth: 20 },
    align: 'right',
    className: () => '',
    applyStyle: () => false,
    format: ({ recovered }) => <b>{recovered ? recovered.toLocaleString() : '-'}</b>,
  },
  {
    key: 7,
    id: 'active',
    tooltip: t('tooltip:active'),
    label: t('common:active'),
    style: { minWidth: 30 },
    align: 'right',
    className: () => '',
    applyStyle: () => false,
    format: ({ active }) => (active ? active.toLocaleString() : '-'),
  },
  {
    key: 8,
    id: 'critical',
    tooltip: t('tooltip:critical'),
    label: t('common:critical'),
    style: { minWidth: 20 },
    align: 'right',
    className: () => '',
    applyStyle: () => false,
    format: ({ critical }) => (critical ? critical.toLocaleString() : '-'),
  },
  {
    key: 9,
    id: 'casesPerOneMillion',
    tooltip: t('tooltip:casesPerOneMillion'),
    label: t('common:casesPerOneMillion'),
    style: { minWidth: 40 },
    align: 'right',
    className: () => '',
    applyStyle: () => false,
    format: ({ casesPerOneMillion }) =>
      casesPerOneMillion ? casesPerOneMillion.toLocaleString() : '-',
  },
  {
    key: 10,
    id: 'casesPerOneMillion',
    tooltip: t('tooltip:populationPercentAffected'),
    label: t('common:populationPercentAffected'),
    style: { minWidth: 40 },
    align: 'right',
    className: () => '',
    applyStyle: () => false,
    format: ({ casesPerOneMillion }) =>
      casesPerOneMillion ? `${(casesPerOneMillion / 10000).toFixed(3)} %` : '-',
  },
]

export const BRAZIL_DATA_FORMAT = t => [
  {
    key: 100,
    id: 'place',
    tooltip: t('tooltip:order'),
    style: { minWidth: 10 },
    format: ({ place }) => place,
    className: () => '',
    applyStyle: () => false,
  },
  {
    key: 0,
    id: 'state',
    tooltip: t('tooltip:state'),
    label: t('common:state'),
    style: { minWidth: 30 },
    className: () => '',
    applyStyle: () => false,
    format: ({ state }) => state,
  },
  {
    key: 1,
    id: 'cases',
    tooltip: t('tooltip:cases'),
    label: t('common:cases'),
    style: { minWidth: 30 },
    align: 'right',
    className: () => '',
    applyStyle: () => false,
    format: ({ cases }) => <b>{cases ? cases.toLocaleString() : '-'}</b>,
  },
  {
    key: 3,
    id: 'todayCases',
    tooltip: t('tooltip:todayCases'),
    label: t('common:todayCases'),
    className: ({ cases, todayCases }) =>
      `todayCasesRow${todayCases ? relativeSpeed(todayCases / cases) : 'None'}`,
    style: { minWidth: 100 },
    align: 'right',
    applyStyle: () => true,
    format: ({ cases, todayCases }) => (
      <span>
        {todayCases ? todayCases.toLocaleString() : '-'} <br />
        <span className={styles['new-cases']}>
          (+{((todayCases / cases) * 100 || 0).toFixed(2)}%)
        </span>
      </span>
    ),
  },
  {
    key: 4,
    id: 'deaths',
    tooltip: t('tooltip:deaths'),
    label: t('common:deaths'),
    style: { minWidth: 20 },
    align: 'right',
    className: () => '',
    applyStyle: () => false,
    format: ({ confirmed, deaths }) => (
      <span>
        {deaths ? deaths.toLocaleString() : '-'} <br />
        <span className={styles['new-cases']}>
          ({((deaths / confirmed) * 100 || 0).toFixed(2)}%)
        </span>
      </span>
    ),
  },
  {
    key: 5,
    id: 'todayDeaths',
    tooltip: t('tooltip:todayDeaths'),
    label: t('common:todayDeaths'),
    style: { minWidth: 110 },
    align: 'right',
    className: ({ deaths, todayDeaths }) =>
      `todayDeathsRow${todayDeaths ? relativeSpeed(todayDeaths / deaths) : 'None'}`,
    applyStyle: () => true,
    format: ({ deaths, todayDeaths }) => (
      <span>
        {todayDeaths ? todayDeaths.toLocaleString() : '-'} <br />
        <span className={styles['new-cases']}>
          (+{((todayDeaths / deaths) * 100 || 0).toFixed(2)}%)
        </span>
      </span>
    ),
  },
  {
    key: 9,
    id: 'confirmedPer100kInhabitants',
    tooltip: t('tooltip:confirmedPer100kInhabitants'),
    label: t('common:confirmedPer100kInhabitants'),
    style: { minWidth: 100 },
    align: 'right',
    className: () => '',
    applyStyle: () => false,
    format: ({ confirmedPer100kInhabitants }) =>
      confirmedPer100kInhabitants ? confirmedPer100kInhabitants.toFixed(2).toLocaleString() : '-',
  },
  {
    key: 10,
    id: 'confirmedPer100kInhabitants',
    tooltip: t('tooltip:populationPercentAffected'),
    label: t('common:populationPercentAffected'),
    style: { minWidth: 40 },
    align: 'right',
    className: () => '',
    applyStyle: () => false,
    format: ({ confirmedPer100kInhabitants }) =>
      confirmedPer100kInhabitants ? `${(confirmedPer100kInhabitants / 1000).toFixed(3)} %` : '-',
  },
]

export const BRAZIL_CITY_DATA_FORMAT = t => [
  {
    key: 100,
    id: 'place',
    tooltip: t('tooltip:order'),
    style: { minWidth: 10 },
    format: ({ place }) => place,
    className: () => '',
    applyStyle: () => false,
  },
  {
    key: 0,
    id: 'city',
    tooltip: t('tooltip:city'),
    label: t('common:city'),
    style: { minWidth: 30 },
    className: () => '',
    applyStyle: () => false,
    format: ({ city }) => (city === 'nonInformed' ? t('common:nonInformed') : city),
  },
  {
    key: 1,
    id: 'cases',
    tooltip: t('tooltip:cases'),
    label: t('common:cases'),
    style: { minWidth: 30 },
    align: 'right',
    className: () => '',
    applyStyle: () => false,
    format: ({ cases }) => <b>{cases ? cases.toLocaleString() : '-'}</b>,
  },
  {
    key: 3,
    id: 'todayCases',
    tooltip: t('tooltip:todayCases'),
    label: t('common:todayCases'),
    className: ({ cases, todayCases }) =>
      `todayCasesRow${todayCases ? relativeSpeed(todayCases / cases) : 'None'}`,
    style: { minWidth: 100 },
    align: 'right',
    applyStyle: () => true,
    format: ({ cases, todayCases }) => (
      <span>
        {todayCases ? todayCases?.toLocaleString() : '-'} <br />
        <span className={styles['new-cases']}>
          (+{((todayCases / cases) * 100 || 0).toFixed(2)}%)
        </span>
      </span>
    ),
  },
  {
    key: 4,
    id: 'deaths',
    tooltip: t('tooltip:deaths'),
    label: t('common:deaths'),
    style: { minWidth: 20 },
    align: 'right',
    className: () => '',
    applyStyle: () => false,
    format: ({ confirmed, deaths }) => (
      <span>
        {deaths ? deaths.toLocaleString() : '-'} <br />
        <span className={styles['new-cases']}>
          ({((deaths / confirmed) * 100 || 0).toFixed(2)}%)
        </span>
      </span>
    ),
  },
  {
    key: 5,
    id: 'todayDeaths',
    tooltip: t('tooltip:todayDeaths'),
    label: t('common:todayDeaths'),
    style: { minWidth: 110 },
    align: 'right',
    className: ({ deaths, todayDeaths }) =>
      `todayDeathsRow${todayDeaths ? relativeSpeed(todayDeaths / deaths) : 'None'}`,
    applyStyle: () => true,
    format: ({ deaths, todayDeaths }) => (
      <span>
        {todayDeaths ? todayDeaths.toLocaleString() : '-'} <br />
        <span className={styles['new-cases']}>
          (+{((todayDeaths / deaths) * 100 || 0).toFixed(2)}%)
        </span>
      </span>
    ),
  },
  {
    key: 9,
    id: 'confirmedPer100kInhabitants',
    tooltip: t('tooltip:confirmedPer100kInhabitants'),
    label: t('common:confirmedPer100kInhabitants'),
    style: { minWidth: 40 },
    align: 'right',
    className: () => '',
    applyStyle: () => false,
    format: ({ confirmedPer100kInhabitants }) =>
      confirmedPer100kInhabitants ? confirmedPer100kInhabitants.toFixed(2).toLocaleString() : '-',
  },
  {
    key: 10,
    id: 'confirmedPer100kInhabitants',
    tooltip: t('tooltip:populationPercentAffected'),
    label: t('common:populationPercentAffected'),
    style: { minWidth: 40 },
    align: 'right',
    className: () => '',
    applyStyle: () => false,
    format: ({ confirmedPer100kInhabitants }) =>
      confirmedPer100kInhabitants ? `${(confirmedPer100kInhabitants / 1000).toFixed(3)} %` : '-',
  },
]
