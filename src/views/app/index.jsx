import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import BMW from '_assets/images/bmw328i.jpg'
import { getPerfectBMW } from '_modules/car/actions'

import styles from './styles.css'

const App = () => {
  const car = useSelector(state => state.car)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPerfectBMW())
  }, [dispatch])

  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={BMW} alt="BMW" className={styles['App-logo']} />
        <h1 className={styles['App-title']}>Jungle Devs Boilerplate</h1>
      </header>
      {car.marca ? (
        <p
          className={styles['App-intro']}
        >{`The ${car.marca} ${car.modelo} ${car.anoModelo} - ${car.combustivel} (FIPE ${car.codigoFipe}) was evaluated at ${car.valor}`}</p>
      ) : (
        <p className={styles['App-intro']}>Loading...</p>
      )}
    </div>
  )
}

export default React.memo(App)
