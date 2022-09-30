
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ResultProvider } from './components/ResultContext';

import Results from './components/Results';
import Search from './components/Search';
import Details from './components/Details';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ResultProvider>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="Results" component={Results} />
                <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
      </NavigationContainer>
    </ResultProvider>
  );
};

export default App;
