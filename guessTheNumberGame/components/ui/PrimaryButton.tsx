import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'

import Colors from '../../constants/colors'

interface Props {
    children: ReactNode,
    onPress: () => void
}

const PrimaryButton: React.FC<Props> = ({ children, onPress }) => {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({ pressed }) => pressed ? [styles.buttonInnnerContainer, styles.pressed] : styles.buttonInnnerContainer} onPress={onPress} android_ripple={{ color: Colors.primary600 }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden"
    },
    buttonInnnerContainer: {
        backgroundColor: Colors.primary500,
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 2,
    },
    buttonText: {
        color: "#ffffff",
        textAlign: "center"
    },
    pressed: {
        opacity: 0.75
    }
})