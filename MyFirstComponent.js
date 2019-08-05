export default class MyFirstComponent extends Component {
    render() {
      let mahName = "Gabriel";
      return (
        <View>
          <Text>{mahName}</Text>
        </View>
      );
    }
  }

  AppRegistry.registerComponent('AwesomeProject', () => MyFirstComponent);