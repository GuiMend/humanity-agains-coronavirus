import 'core-js/stable'
import 'raf-polyfill'
import 'regenerator-runtime/runtime'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

// Fail tests on any console error
console.error = message => {
  throw new Error(message)
}

window.matchMedia =
  window.matchMedia || // eslint-disable-next-line func-names
  function() {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    }
  }
