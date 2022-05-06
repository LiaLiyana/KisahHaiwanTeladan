import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Page2() {
  return (
    <View style = {styles.container}>
        <Image
          source={require('../assets/images/rabbit-g521c44c12_640.png')}
            style={{ width: 50, height: 50, margin: 16 }}
          />
      <View style={{ flexDirection: "column"}}>
          <View style={{ flexDirection: "row" }}>
          <Text style={{ margin: 20 }}>Kisah Arnab dan Kura Kura </Text>
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
