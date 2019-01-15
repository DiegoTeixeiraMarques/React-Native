import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from './src/components/Button'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <Button label='AC'/>
          <Button label='/'/>
          <Button label='7'/>
          <Button label='8'/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
