import { zonedTimeToUtc } from 'date-fns-tz'
import ptLocale from 'date-fns/locale/pt-BR'
import enLocale from 'date-fns/locale/en-US'
import dateFormat from 'date-fns/format'
import jstz from 'jstimezonedetect'

const ptOrDefault = navigator.language.includes('pt')
const browserLocale = ptOrDefault ? ptLocale : enLocale
const defaultFormat = ptOrDefault ? 'dd/MM/yyyy HH:mm:ss' : 'MMMM do, yyyy HH:mm:ss'

export const parseTimeZone = date => zonedTimeToUtc(date, jstz.determine().name())

export const formatDate = (date, formatStr = defaultFormat) =>
  dateFormat(date, formatStr, { locale: browserLocale })

export const formatTimeZoneDate = (date, formatStr) => formatDate(parseTimeZone(date), formatStr)
