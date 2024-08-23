import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {
  RouteProp,
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';
import {RootStackParamList} from '../../App';
import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

type MealDetailsScreenRouteProp = RouteProp<RootStackParamList, 'MealDetails'>;

const MealDetailsScreen: React.FC<{route: MealDetailsScreenRouteProp}> = ({
  route,
}) => {
  const {mealId} = route.params;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const headerButtonPressHandler = () => {
    console.log('Button pressed!');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={'heart'}
          color={'#ffffff'}
          onPress={headerButtonPressHandler}
        />
      ),
    });
  }, [navigation, headerButtonPressHandler]);

  const meal = MEALS.find(meal => meal.id === mealId);

  if (!meal) {
    return (
      <View style={styles.rootContainer}>
        <Text>Meal not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{uri: meal.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        textStyle={styles.detailText}
        affordability={meal.affordability}
        complexity={meal.complexity}
        duration={meal.duration}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle title="Ingredients" />
          <List content={meal.ingredients} />
          <Subtitle title="Steps" />
          <List content={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: '#ffffff',
  },
  detailText: {
    color: '#ffffff',
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  rootContainer: {
    marginBottom: 32,
  },
});
