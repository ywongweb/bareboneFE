import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 30,
  }
})

export const App = () => {
  return <View style={styles.container}>
    <Text style={styles.text}>Hello world from JS repo</Text>
  </View>
}
