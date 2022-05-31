import * as React from 'react';
import MainPage from './src/components/MainPage';
import ContentPage from './src/components/ContentPage';
import StoryPage from './src/components/StoryPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainPage} options={{headerShown:false}} />
        <Stack.Screen name="ContentPage" component={ContentPage}  options={{headerShown:false}}/>
        <Stack.Screen name="StoryPage" component={StoryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
