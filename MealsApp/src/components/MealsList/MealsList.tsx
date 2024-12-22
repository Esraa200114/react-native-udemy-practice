/* eslint-disable prettier/prettier */
import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import Meal from '../../models/meal';
import MealItem from './MealItem';

const MealsList = ({items}: {items: Meal[]}) => {
  function renderMealItem(item: Meal) {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      image: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={item => renderMealItem(item.item)}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
