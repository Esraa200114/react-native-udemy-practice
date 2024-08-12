import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type SubtitleProps = {
    title: string
}

const Subtitle = ({ title }: SubtitleProps) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{title}</Text>
        </View>
    )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitle: {
        color: '#e2b497',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2
    }
})