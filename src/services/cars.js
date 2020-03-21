import { get } from './requests'

export const getPerfectBMW = () =>
  get(['carros', 'marcas', '7', 'modelos', '185', 'anos', '1996-1'], {
    removeTrailingSlash: true,
  })
