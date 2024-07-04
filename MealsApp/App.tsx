import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import CategoriesScreen from './src/screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';

export type RootStackParamList = {
  MealsCategories: undefined,
  MealsOverview: { categoryId: string }
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={'#24180f'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='MealsCategories'>
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
          />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24180f',
    flex: 1
  }
});

export default App;
