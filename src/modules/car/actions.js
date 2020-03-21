import { defineAction } from '_utils/redux'
import * as carsService from '_services/cars'

export const GET_PERFECT_BMW = defineAction('GET_PERFECT_BMW')

export const getPerfectBMW = () => dispatch =>
  dispatch({
    type: GET_PERFECT_BMW.ACTION,
    payload: carsService.getPerfectBMW(),
  })
