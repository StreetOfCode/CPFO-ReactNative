import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

class MyFirstComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: false, text: '' };
  }  
  
  componentDidMount(){
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  render() {  
    return (
      <View>
        <TextInput onChangeText={(text) => this.setState({text: text})}/>
        {(!this.state.isShowingText || this.state.text == '') && <Text>{this.state.text}</Text>}
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