import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Icons from './Icons';

function StoryPage({route, navigation}) {
  const { story, image } = route.params;

  const colorCheck = num => {
    if ((num % 2) == 0) {
      return true;
    }
  };

  return (
    <View style = {[styles.container, {backgroundColor: colorCheck(story.id) ? '#89CFF0' : '#fcc3c3'}]}>

      {/* Top part */}
      <View style={{ flex:1, flexDirection: "column"}}>
        <View style={{justifyContent:"center", alignItems: "center"  , paddingTop: 40}}>
          <Image
            source={Icons[image]}
            style={{ width: 50, height: 50, }}
          />
          <Text style={{ margin: 20, fontSize:16, fontWeight:'bold' }}>{story.title}</Text>
        </View>
      </View>

      {/* Story part */}
      <View style={{ flex:3, flexDirection: "row"}}>
          
          <View style={{flex:0.5}}/>

          <ScrollView style={{
            flex:3,
            backgroundColor: "#FFFFFF",
            // justifyContent:'center'
          }}>
              {
                story.story.map( (item, key)  => 
                  <Text style={{ textAlign: 'left', fontSize:14, paddingTop: 10 }} key={key}>
                    { item }
                  </Text>
                )
              }

              <Text style={{ textAlign: 'left', fontSize:14, fontWeight: "bold", paddingTop: 30 }}>
                Pengajaran ibu bapa boleh sampaikan kepada anak anak : 
              </Text>

              {
                story.lesson.map( (item, key)  => 
                  <Text style={{ textAlign: 'left', fontSize:14, paddingTop: 10 }} key={key}>
                    { item }
                  </Text>
                )
              }

          </ScrollView>

          <View style={{flex:0.5}}/>
      </View>

      {/* Button part */}
      <View style={{ flex:1, flexDirection: "column"}}>
        <View style={{justifyContent:"center", alignItems: "center"  , padding: 50, }}>
          <TouchableOpacity 
            style={{backgroundColor: colorCheck(story.id) ? '#fcc3c3' : '#89CFF0', padding: 20 }}
            onPress={() => navigation.goBack()}
          >
            <Text>
              Kembali 
            </Text>
          </TouchableOpacity>
        </View>
      </View>    

    </View>
  );
}

export default StoryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    flex: 1
  }
});
