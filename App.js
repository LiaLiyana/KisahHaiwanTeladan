import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import MainPage from './src/components/MainPage';
import ContentPage from './src/components/ContentPage';

export default class App extends React.Component {
  state = {
    page: 1,
  };

  pickPageToRender = () => {
    if (this.state.page === 1){
      return (<MainPage pageChange={(pageNum) => this.setState({page: pageNum})}/>);
    }
    if (this.state.page === 2) {
      return (<ContentPage pageChange={(pageNum) => this.setState({page: pageNum})} />);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.pickPageToRender()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  }
});
