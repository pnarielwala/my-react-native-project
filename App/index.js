import React from 'react'
import Navigation from './Navigation'
import Home from './Home'
import Settings from './Settings'

const App = () => {
  return <Navigation HomeScreen={Home} SettingsScreen={Settings} />
}
export default App
