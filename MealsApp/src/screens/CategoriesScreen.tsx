import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import Category from '../models/category'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = ({ navigation }) => {

    function renderCategoryItem(item: Category) {

        const pressHandler = () => {
            navigation.navigate('MealsOverview', { categoryId: item.id })
        }

        return <CategoryGridTile color={item.color} title={item.title} onPress={pressHandler} />
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={(item) => renderCategoryItem(item.item)}
            numColumns={2}
        />
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({})