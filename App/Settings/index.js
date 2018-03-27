import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class Settings extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ tintColor, focused }) => (
      <MaterialIcons name="settings" size={26} style={{ color: tintColor }} />
    ),
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings screen</Text>
        <Button
          onPress={() => {}}
          title="Learn More"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
