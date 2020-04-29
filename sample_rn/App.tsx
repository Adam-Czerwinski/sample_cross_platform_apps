import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';




export default function App() {

  const [counter, setCounter] = useState(0);

const onPressButton = () => { setCounter(counter+1); }

  return (
    <View style={styles.container}>
      <Text>Witaj, to jest przykładowa aplikacja stworzona przez Adama Czerwińskiego :) </Text>
      <Text>{counter}</Text>
      <Button
  onPress={onPressButton}
  title="Kliknij mnie"
  color="#841584"
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
