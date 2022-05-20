import * as React from 'react';
import MainPage from './src/components/MainPage';
import ContentPage from './src/components/ContentPage';
import Page1 from './src/components/Page1';
import Page2 from './src/components/Page2';
import Page3 from './src/components/Page3';
import Page4 from './src/components/Page4';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainPage} options={{headerShown:false}} />
        <Stack.Screen name="ContentPage" component={ContentPage}  options={{headerShown:false}}/>
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Page3" component={Page3} />
        <Stack.Screen name="Page4" component={Page4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
