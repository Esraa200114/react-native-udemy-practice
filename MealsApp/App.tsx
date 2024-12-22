/* eslint-disable prettier/prettier */
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import CategoriesScreen from './src/screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';
import MealDetailsScreen from './src/screens/MealDetailsScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavouritesScreen from './src/screens/FavouritesScreen';
import FavouritesContextProvider from './store/context/favourites-context';
import {Provider} from 'react-redux';
import {store} from './store/redux/store';

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: {categoryId: string};
  MealDetails: {mealId: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => (
            <FoundationIcon name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesomeIcon name="heart" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={'#24180f'} />
      {/* <FavouritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MealsCategories"
            screenOptions={{
              headerStyle: {backgroundColor: '#351401'},
              headerTintColor: '#ffffff',
              contentStyle: {backgroundColor: '#3f2f25'},
            }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                title: 'All Categories',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
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
              name="MealDetails"
              component={MealDetailsScreen}
              options={{
                title: 'About the Meal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </FavouritesContextProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24180f',
    flex: 1,
  },
});

export default App;
