import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { PropsWithChildren, ReactNode } from 'react'
import Colors from '../../constants/colors'

type NumberContainerProps = PropsWithChildren<{
    children: ReactNode
}>

const NumberContainer = ({ children }: NumberContainerProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 380 ? 12 : 20,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    numberText: {
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 28 : 36,
        // fontWeight: "bold",
        fontFamily: "Open Sans Bold"
    }
})