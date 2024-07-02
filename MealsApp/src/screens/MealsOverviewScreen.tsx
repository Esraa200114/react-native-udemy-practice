import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data'
import Meal from '../models/meal'
import MealItem from '../components/MealItem'

const MealsOverviewScreen = ({ route }) => {

    const { categoryId } = route.params

    const displayedMeals = MEALS.filter((item) => item.categoryIds.indexOf(categoryId) >= 0)

    function renderMealItem(item: Meal) {
        return <MealItem
            title={item.title} />
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