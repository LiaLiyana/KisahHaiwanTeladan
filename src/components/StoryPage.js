import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function StoryPage({route, navigation}) {
  const { id, story } = route.params;


  console.log(story);
  return (
    <View style = {styles.container}>
      <Image
          source={require('../assets/images/rabbit-g521c44c12_640.png')}
            style={{ width: 50, height: 50 }}
          />
      <View style={{ flexDirection: "column"}}>
          <View style={{ flexDirection: "row" }}>
          <Text style={{ margin: 20 }}>{id}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "column"}}>
          <View style={{ flexDirection: "row" }}>
          <Text style={{ margin: 20 }}>{story.story}</Text>
        </View>
      </View>
    </View>
  );
}

export default StoryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcc3c3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
