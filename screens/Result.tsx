import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { RootStackParamList } from '../types';

export default function ResultScreen({navigation,}: StackScreenProps<RootStackParamList, 'Result'>) {
  return (
    <View style={styles.container}>
      <Text>Chapter Name Practice Test{"\n\n\n\n"}</Text>
      <View style={{backgroundColor:'skyblue'}}>
      <Text>Total Number of Questions: 3{"\n\n"}</Text>
      <Text>Correct: 2{"\n\n"}</Text>
      <Text>Incorrect: 1{"\n\n"}</Text>
      </View>
      <Text>{"\n\n\n"}</Text>
      <View style={{
          display: 'flex',
          justifyContent:'center',
          alignContent:'center'
        }}>
      <Button onPress={() => navigation.navigate('Root')} title="Retake"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
