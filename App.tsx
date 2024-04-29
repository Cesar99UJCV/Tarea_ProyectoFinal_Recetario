/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */




import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RecetarioScreen from './screens/RecetarioScreen';
import CreateRecipeScreen from './screens/CreateRecipeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Recetario" component={RecetarioScreen} options={{ title: 'Recetario' }} />
        <Stack.Screen name="CrearReceta" component={CreateRecipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


