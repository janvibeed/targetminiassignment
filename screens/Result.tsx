import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../types';

export default function ResultScreen({navigation,}: StackScreenProps<RootStackParamList, 'Result'>) {
  return (
    <div style={{margin:'auto'}}>
      <Text>Chapter Name Practice Test</Text>
      <div style={{backgroundColor:'skyblue',margin:'auto'}}>
      <Text>Total Number of Questions: 3</Text><br/><br/>
      <Text>Correct: 2</Text><br/><br/>
      <Text>Incorrect: 1</Text><br/><br/>
      </div>
      <br/><br/><br/>
      <div  style={{
          display: 'flex',
          justifyContent:'center',
          alignContent:'center',textAlign:'center',width:'100%'
        }}>
      <button style={{color:'white',textAlign:'center',backgroundColor:'blue'}}
              onClick={() => navigation.navigate('Root')}>
              Retake</button>
      </div>
      <br/>
    </div>
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
