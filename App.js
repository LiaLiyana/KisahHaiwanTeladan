import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import MainPage from './src/components/MainPage';
import ContentPage from './src/components/ContentPage';
import Page1 from './src/components/Page1';
import Page2 from './src/components/Page2';
import Page3 from './src/components/Page3';
import Page4 from './src/components/Page4';

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
    if (this.state.page === 3) {
      return (<Page1 pageChange={(pageNum) => this.setState({page: pageNum})} />);
    }
    if (this.state.page === 4) {
      return (<Page2 pageChange={(pageNum) => this.setState({page: pageNum})} />);
    }
    if (this.state.page === 5) {
      return (<Page3 pageChange={(pageNum) => this.setState({page: pageNum})} />);
    }
    if (this.state.page === 6) {
      return (<Page4 pageChange={(pageNum) => this.setState({page: pageNum})} />);
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
