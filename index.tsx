import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
  },
  text: {
    color: 'blue',
  }
})

interface HomeScreenShellProps {
  componentId: string
}

export const App = (props: HomeScreenShellProps) => {
  return <View style={styles.container}>
    <Text style={styles.text}>1234 FE repo</Text>
  </View>
}
