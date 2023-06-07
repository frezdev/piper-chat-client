import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box, Button } from "native-base";
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
      <Button>PiperChat</Button>
      <StatusBar style='inverted' />
    </NativeBaseProvider>
  );
}


