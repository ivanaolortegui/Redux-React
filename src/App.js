import React from 'react'

import Todos from './components/Todos'
import { Provider } from 'react-redux'

import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Todos />
      </div>
    </Provider>

  )
}

export default App

