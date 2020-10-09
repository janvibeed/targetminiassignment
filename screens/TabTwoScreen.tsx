import * as React from 'react';
import { StyleSheet } from 'react-native';
import { loremIpsum} from 'lorem-ipsum';
// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import RadioGroup, {Radio} from 'react-native-radio-input';


function smiley(value){
    
  if(value === "C"){
    
    return(
      <div>
      <Text style={styles.title}>{"Explanation: "+loremIpsum({count:5})}</Text>
      <View style={styles.container}>
        <Text style={styles.title}><span role="img">{String.fromCodePoint(0X1f642)}</span>{ "Correct Answer!"}</Text>
      </View>
      </div>
    );
  }
  else if(value === null){
    return(null);
  }
  else{
    return(
      <div>
      <Text style={styles.title}>{"Explanation: "+loremIpsum({count:5})}</Text>
      <View style={styles.container}>
        <Text style={styles.title}><span role="img">{String.fromCodePoint(0X1f641)}</span> {"Wrong Answer..."}</Text>
      </View>
      </div>
     );
  }
}

class TabTwoScreen extends React.Component{
  state={
    value: null,
  };

  render(){
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{loremIpsum({count:3})}</Text>
        <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <RadioGroup getChecked = {(value)=>{this.setState({value:value})}}>
          <Radio label={"Option A"} value={"A"}/>
          <Radio label={"Option B"} value={"B"}/>
          <Radio label={"Option C"} value={"C"}/>
          <Radio label={"Option D"} value={"D"}/>
        </RadioGroup>
    <View style={styles.container}>{smiley(this.state.value)}</View>
      </View>
      
    );
    };
    
  }
export default TabTwoScreen;


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
});
