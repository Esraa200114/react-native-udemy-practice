import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const IconButton = ({onPress}) => {

    return (
        <Pressable onPress={onPress}>
            <Icon name="heart" size={24} color="#ffffff" />
        </Pressable>
    )
}

export default IconButton

const styles = StyleSheet.create({})