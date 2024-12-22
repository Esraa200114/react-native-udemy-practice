import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {CATEGORIES} from '../data/dummy-data';
import Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../App';

const CategoriesScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  function renderCategoryItem({item}: {item: Category}) {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {categoryId: item.id});
    };

    return (
      <CategoryGridTile
        color={item.color}
        title={item.title}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
