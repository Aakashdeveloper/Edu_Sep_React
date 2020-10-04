import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ListItem from './component/ListItem';

function App() {
  const [OutputText,SetOutputText] = useState("Test Button on Native App")
  return (
    <View style={styles.container}>
      <Text>{OutputText}</Text>
      <Button title="click me" onPress={()=>SetOutputText('Text Changed')}/>
      <ListItem/>
    </View>
  );
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
