import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Square = ({ backgroundColor }) => {
  const [height, setHeight] = useState(0);
  return (
    <View
      onLayout={(e) => setHeight(e.nativeEvent.layout.width)}
      style={{ flex: 1, height, backgroundColor }}
    />
  );
};

export default function ContentPage() {
  return (
    <View style = {styles.container}>
      <View style={{ flexDirection: "column"}}>
          <View style={{ flexDirection: "row" }}>
          <Image
          source={require('../assets/images/rabbit-g521c44c12_640.png')}
            style={{ width: 50, height: 50, margin: 16 }}
          />
          <Text style={{ margin: 20 }}>Kisah Arnab dan Kura Kura </Text>
          <Text  style={{ margin: 16 }}>01 </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
          source={require('../assets/images/penguin_640.jpg')}
            style={{ width: 50, height: 50, margin: 16 }}
          />
          <Text style={{ margin: 20 }}>Kisah Semut dan Burung Merpati </Text>
          <Text  style={{ margin: 16 }}>02</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require('../assets/images/dog_640.jpg')}
            style={{ width: 50, height: 50, margin: 16 }}
          />
          <Text style={{ margin: 20 }}>Kisah Anjing yang Tamak </Text>
          <Text  style={{margin: 16 }}>03</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require('../assets/images/lion_640.jpg')}
            style={{ width: 50, height: 50, margin: 16 }}
          />
          <Text style={{ margin: 20 }}>Kisah Singa dan Arnab </Text>
          <Text  style={{margin: 16 }}>04</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89CFF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
