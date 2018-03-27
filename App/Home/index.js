import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class Home extends React.Component {
  state = {
    text: '',
  }
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor, focused }) => (
      <MaterialIcons name="home" size={26} style={{ color: tintColor }} />
    ),
  }
  handleTextChange = text => {
    this.setState({ text })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Home screen</Text>
        <Button
          onPress={() => {}}
          title="Learn More"
          accessibilityLabel="Learn more about this purple button"
        />
        <TextInput
          style={styles.input}
          onChangeText={this.handleTextChange}
          value={this.state.text}
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
  input: {
    width: '70%',
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    borderRadius: 7,
    textAlign: 'center',
  },
})
