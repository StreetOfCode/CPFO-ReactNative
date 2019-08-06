import React, { Component } from 'react';
import { Text, TextInput, Button, View } from 'react-native';

class MyFirstComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: false, text: 'Some text' };
  }  

  toggleText() {
    this.setState(previousState => (
      { isShowingText: !previousState.isShowingText }
    ));
  }

  render() {  
    return (
      <View>
        <Button 
          onPress={() => this.toggleText()}
          title="Toggle text" />
        <TextInput 
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text} />
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