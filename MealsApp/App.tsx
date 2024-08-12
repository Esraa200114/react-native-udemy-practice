import React from 'react';
import { Button, StatusBar, StyleSheet, Text } from 'react-native';

import CategoriesScreen from './src/screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';
import { CATEGORIES } from './src/data/dummy-data';
import MealDetailsScreen from './src/screens/MealDetailsScreen';

export type RootStackParamList = {
  MealsCategories: undefined,
  MealsOverview: { categoryId: string },
  MealDetails: { mealId: string }
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={'#24180f'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='MealsCategories' screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: "#ffffff",
          contentStyle: { backgroundColor: '#3f2f25' }
        }}>
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{
              title: 'All Categories'
            }}
          />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
          // options={({ route, navigation }) => {

          //   const { categoryId } = route.params;
          //   const category = CATEGORIES.find((category) => category.id === categoryId);

          //   return {
          //     title: category ? category.title : 'Category Title',
          //   };
          // }}
          />
          <Stack.Screen
            name='MealDetails'
            component={MealDetailsScreen}
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
