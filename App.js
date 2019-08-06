import React, { Component } from 'react';
import { Text, View } from 'react-native';

class MyFirstComponent extends Component {
  
  componentDidMount(){
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }
  
  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    let mahName = "Gabriel";    
    return (
      <View>
        <Text>{mahName}</Text>
      </View>
    );
  }
}

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
        <MyFirstComponent/>
      </View>
    );
  }
}