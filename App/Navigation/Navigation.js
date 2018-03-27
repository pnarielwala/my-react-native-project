import React from 'react'
import { TabNavigator } from 'react-navigation'
import { StyleSheet, Text, View } from 'react-native'

export default class Navigation extends React.Component {
  render() {
    const Tabs = TabNavigator({
      Home: { screen: this.props.HomeScreen },
      Settings: { screen: this.props.SettingsScreen },
    })
    return <Tabs />
  }
}
