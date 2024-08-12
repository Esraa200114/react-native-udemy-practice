import { FlatList, StyleSheet, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import Meal from '../models/meal'
import MealItem from '../components/MealItem'
import { RootStackParamList } from '../../App'
import { RouteProp, useNavigation } from '@react-navigation/native'

type MealsOverviewScreenRouteProp = RouteProp<RootStackParamList, 'MealsOverview'>;

const MealsOverviewScreen: React.FC<{ route: MealsOverviewScreenRouteProp }> = ({ route }) => {

    const { categoryId } = route.params

    const navigation = useNavigation()

    const displayedMeals = MEALS.filter((item) => item.categoryIds.indexOf(categoryId) >= 0)

    useLayoutEffect(() => {

        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId)?.title;

        navigation.setOptions({
            title: categoryTitle,
        })
    }, [categoryId, navigation])

    function renderMealItem(item: Meal) {

        const mealItemProps = {
            id: item.id,
            title: item.title,
            image: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }

        return <MealItem
            {...mealItemProps
            } />
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={(item) => renderMealItem(item.item)} />
        </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({})