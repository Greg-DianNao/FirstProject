import { StatusBar } from 'expo-status-bar';  
import { StyleSheet, Text, View } from 'react-native';
import {UploadFile} from './components/UploadFile';
import {TaskBar} from './navigations/TaskBar'

export default function App() {
  console.log("App started")
  return (
    <View style={styles.container}>
      <TaskBar/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <UploadFile/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  taskBar: {
    
  }
});
