import React, { Component } from 'react';
import { Text, TextInput, Button, View, FlatList, SectionList } from 'react-native';

class MyFirstComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: false, text: 'Some text', data: [], sectionData: [] };
  }  

  toggleText() {
    this.setState(previousState => (
      { isShowingText: !previousState.isShowingText }
    ));
  }

  fillData() {
    let data = [];
    for (let i = 0; i < 1000; i++) {
      data.push({key: 'item' + i});
    }
    this.setState(() => ({
      data: data
    }))
  }
  
  fillSectionData() {
    let sectionData = [];
    for (let j = 0; j < 10; j++)
    {
      let section = {title: 'section' + j, data: []};
      for (let i = 0; i < 10; i++) {
        section.data.push({key: 'item' + j + ' ' + i});
      }
      sectionData.push(section);
    }
    this.setState(() => ({
      sectionData: sectionData
    }))
  }

  render() {  
    // return (
    //   <View>
    //     <Button 
    //       onPress={() => this.toggleText()}
    //       title="Toggle text" />
    //     <TextInput 
    //       onChangeText={(text) => this.setState({text: text})}
    //       value={this.state.text} />
    //     {(!this.state.isShowingText || this.state.text == '') && <Text>{this.state.text}</Text>}
    //   </View>
    // );
    // return (
    //   <View>
    //     <Button 
    //         onPress={() => this.fillData()}
    //         title="Fill data" />
    //     {this.state.data.length > 0 && <FlatList 
    //                                     data={this.state.data}
    //                                     renderItem={({item}) => <Text>{item.key}</Text>}/>}
    //   </View>
    // );
    return (
      <View>
        <Button 
            onPress={() => this.fillSectionData()}
            title="Fill section data" />
        {this.state.sectionData.length > 0 && <SectionList 
                                        sections={this.state.sectionData}
                                        renderItem={({item}) => <Text>{item.key}</Text>}
                                        renderSectionHeader={({section}) => <Text style={{fontWeight: 'bold', fontSize: 14}}>{section.title}</Text>}/>}
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