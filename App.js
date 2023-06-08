import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'

export default function App () {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <SafeAreaView style={{ backgroundColor: '#0f0d16', height: '100%' }}>
          <StatusBar style='inverted' />
          <Text style={styles.text}>PiperChat</Text>
        </SafeAreaView>
      </NativeBaseProvider>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: '700',
    backgroundColor: '#0f0d16',
    color: '#fff',
    textAlign: 'center'
  }
})
