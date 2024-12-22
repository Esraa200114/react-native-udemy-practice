import React, {useLayoutEffect} from 'react';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import {RootStackParamList} from '../../App';
import {RouteProp, useNavigation} from '@react-navigation/native';
import MealsList from '../components/MealsList/MealsList';

type MealsOverviewScreenRouteProp = RouteProp<
  RootStackParamList,
  'MealsOverview'
>;

const MealsOverviewScreen: React.FC<{route: MealsOverviewScreenRouteProp}> = ({
  route,
}) => {
  const {categoryId} = route.params;

  const navigation = useNavigation();

  const displayedMeals = MEALS.filter(
    item => item.categoryIds.indexOf(categoryId) >= 0,
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === categoryId,
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
