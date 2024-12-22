import React, {useContext} from 'react';
import MealsList from '../components/MealsList/MealsList';
import {FavouritesContext} from '../../store/context/favourites-context';
import {MEALS} from '../data/dummy-data';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '@reduxjs/toolkit/query';

const FavouritesScreen = () => {
  // const favouriteMealsCtx = useContext(FavouritesContext);
  const favouriteMealsIds = useSelector(
    (state: RootState) => state.favouriteMeals.ids,
  );

  const FavouiteMeals = MEALS.filter(meal =>
    favouriteMealsIds.includes(meal.id),
  );

  if (FavouiteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={FavouiteMeals} />;
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
