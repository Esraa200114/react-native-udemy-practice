import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import CategoriesScreen from './src/screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator()

function App(): React.JSX.Element {

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={'#24180f'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='MealsCategories'>
          <Stack.Screen name='MealsCategories' component={CategoriesScreen}></Stack.Screen>
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24180f',
    flex: 1
  }
});

export default App;
