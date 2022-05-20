import React from "react";
import { StyleSheet, View, Text, Image,TouchableOpacity} from "react-native";
import Icons from './Icons';
import resources from './resources.json';


export default class ContentPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          {resources.map((item) =>
          <View style={{ flexDirection: "column"}} key={item.id}>
              <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity onPress={() => this.props.pageChange(3)}>
                  <Image style={{ width: 50, height: 50, margin: 16 }} source={Icons[item.image]} />
                  </TouchableOpacity>
                  <Text style={{ margin: 20 }}>{item.title} </Text>
                  <Text  style={{ margin: 16 }}>{item.numbering} </Text>
              </View>
          </View>)}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89CFF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
