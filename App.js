import React, { Component } from 'react';
import { Text, View } from 'react-native';

class MyFirstComponent extends Component {
  render() {
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