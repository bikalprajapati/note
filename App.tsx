import React from 'react'
import { Text, View } from 'react-native'
import Notes from './component/Notes'
import { Provider } from 'react-redux'
import { store } from './component/Redux/ReduxWithTS/store'

const App = () => {
  return (
    <Provider store={store}>  
        <Notes/>
    </Provider>
  )
}

export default App