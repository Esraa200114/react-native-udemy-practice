import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Goal } from '../App';

type GoalItemProps = {
    goalItem: Goal;
    onDeleteItem: (id: string) => void
};

const GoalItem = ({ goalItem, onDeleteItem }: GoalItemProps) => {

    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{ color: "#210644" }} style={({pressed})=> pressed && styles.pressedItem} onPress={onDeleteItem.bind(this, goalItem.id)}>
                <Text style={styles.goalItemText}>{goalItem.text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e08cc",
    },
    goalItemText: {
        color: "#ffffff",
        padding: 8
    },
    pressedItem: {
        opacity: 0.5
    }
})