import React from 'react'
import { render } from 'react-dom'

import { App } from './app'

if (module.hot) {
  module.hot.dispose(function () {
    console.log('HOT DISPOSE')
  })

  module.hot.accept(function () {
    console.log('HOT ACCEPT')
  })
}

render(<App />, document.getElementById('root'))
