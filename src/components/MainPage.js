import * as React from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import ContentPage from './ContentPage';


export default class MainPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
            <View style={{
              flex: 1,
              flexDirection: "row"
            }}>
              <View style={{
                flex: 0.5
              }}>
              </View>
              <View style={{
                flex: 0.5
              }}>
                <Image style={styles.imageMonkey} source={require('../assets/images/monkey.png')}/>
              </View>
              <View style={{
                flex: 0.5}
              }>
                <Image style={styles.imageMonkey} source={require('../assets/images/monkey.png')}/>
              </View>
              <View style={{
                flex: 0.5
              }}>
              </View>
            </View>
  
            <View style={{
              backgroundColor: "gold",
              flex: 3,
              alignContent: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}>
              <View style={{backgroundColor: '#89CFF0', flex:1}}/>
                <View style={{
                  backGroundColor: 'white',
                  flex:3,
                  borderWidth: 5,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  justifyContent:'center'
                }}>
                  <Text style={{textAlign: 'center', fontSize:36, fontWeight:'bold' }}>
                    Koleksi Cerita Haiwan Teladan
                  </Text>
                </View>
              <View style={{backgroundColor: '#89CFF0', flex:1}}/>
            </View>
  
            <View style={{
              flex: 1,
              flexDirection: "row"
            }}>
              <View style={{flex: 0.5}}>
                <Image style={styles.imageCat} source={require('../assets/images/cat.png')}/>
              </View>
              <View style={{flex: 0.5}}>
                <Button
                  style={{justifyContent: 'center'}}
                  title="Mula Membaca"
                  color="#ffc0cb"
                  onPress={() => this.props.pageChange(2)}
                />
              </View>
              <View style={{flex: 0.5}}>
                <Image style={styles.imageGiraffe} source={require('../assets/images/giraffe.png')}/>
              </View>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89CFF0'
  },
  imageGiraffe: {
    position: 'absolute',
    width: '240%',
    height: '200%',
    resizeMode: 'contain'
  },
  imageCat: {
    position: 'absolute',
    bottom: '-10%',
    left: '-10%',
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  imageMonkey: {
    bottom: '-40%',
    width: '80%',
    height: '70%',
    resizeMode: 'contain'
  }
});
