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

export default function App() {
  return (
    <View style = {styles.container}>
      <View style={{ flexDirection: "column"}}>
          <View style={{ flexDirection: "row" }}>
          <Image
          source={require('./src/assets/rabbit-g521c44c12_640.png')}
            style={{ width: 50, height: 50, margin: 16 }}
          />
          <Text style={{ margin: 20 }}>Kisah Kucing yang comel </Text>
          <Text  style={{ margin: 16 }}>1 </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
          source={require('./src/assets/rabbit-g521c44c12_640.png')}
            style={{ width: 50, height: 50, margin: 16 }}
          />
          <Text style={{ margin: 20 }}>Kisah Kucing yang comel </Text>
          <Text  style={{ margin: 16 }}>1 </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require('./src/assets/rabbit-g521c44c12_640.png')}
            style={{ width: 50, height: 50, margin: 16 }}
          />
          <Text style={{ margin: 20 }}>Kisah Kucing yang comel </Text>
          <Text  style={{margin: 16 }}>1 </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require('./src/assets/rabbit-g521c44c12_640.png')}
            style={{ width: 50, height: 50, margin: 16 }}
          />
          <Text style={{ margin: 20 }}>Kisah Kucing yang comel </Text>
          <Text  style={{margin: 16 }}>1 </Text>
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
