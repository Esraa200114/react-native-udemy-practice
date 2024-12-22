import {StyleSheet, Text, View, Pressable, Image, Platform} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MealDetails from '../MealDetails';

type MealItemProps = {
  id: string;
  title: string;
  image: string;
  duration: number;
  affordability: string;
  complexity: string;
};

const MealItem = ({
  id,
  title,
  image,
  affordability,
  complexity,
  duration,
}: MealItemProps) => {
  const navigation = useNavigation();

  const showMealDetails = () => {
    navigation.navigate('MealDetails', {mealId: id});
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}
        onPress={showMealDetails}>
        <View>
          <View>
            <Image source={{uri: image}} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            affordability={affordability}
            complexity={complexity}
            duration={duration}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: '#ffffff',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
