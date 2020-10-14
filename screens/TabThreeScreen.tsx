import React,{Component} from 'react';
import { Button, StyleSheet, TouchableOpacity } from 'react-native';
import { loremIpsum} from 'lorem-ipsum';
// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import RadioGroup, {Radio} from 'react-native-radio-input';

function smiley(value){
    if(value === "B"){
      return(
        <View>
        <Text style={styles.title}>Explanation: {loremIpsum({count:5})}</Text>
        <View style={styles.container}>
          <Text style={styles.title}>{String.fromCodePoint(0X1f642)} Correct Answer!</Text>
        </View>
        </View>
      );
    }
    else if(value === null){
      return(null);
    }
    else{
      return(
        <View>
        <Text style={styles.title}>Explanation: {loremIpsum({count:5})}</Text>
        <View style={styles.container}>
          <Text style={styles.title}>{String.fromCodePoint(0X1f641)} Wrong Answer...</Text>
        </View>
        </View>
       );
    }
  }

class TabThreeScreen extends React.Component<{navigation}>{
  state={
    value: null,
  };
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{loremIpsum({count:3})}</Text>
        <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
        <RadioGroup getChecked = {(value)=>{this.setState({value:value})}}>
          <Radio label={"Option A"} value={"A"}/>
          <Radio label={"Option B"} value={"B"}/>
          <Radio label={"Option C"} value={"C"}/>
          <Radio label={"Option D"} value={"D"}/>
        </RadioGroup>
        <View style={styles.container}>{smiley(this.state.value)}</View>
        <Text>{"\n\n"}</Text>
        <View style={{display: 'flex',justifyContent:'center',alignContent:'center',width:'100%'}}>
          <Button onPress={() => this.props.navigation.navigate('Result')} title="SUBMIT">
          </Button>
        </View>
      </View>
    );
  };
}

export default TabThreeScreen;


const styles = StyleSheet.create({
  container: {
    // flex: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '100%',
  },
  divbox: {
    display: 'flex',
    textAlign: 'center',
    backgroundColor: 'skyblue',
    width:'50%',
  },
});

// style={{color:'white',textAlign:'center',backgroundColor:'blue'}}