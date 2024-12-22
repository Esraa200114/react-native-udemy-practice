import { StyleSheet, View, Dimensions } from 'react-native'
import React, { PropsWithChildren, ReactNode } from 'react'
import Colors from '../../constants/colors'

type CardProps = PropsWithChildren<{
    children: ReactNode
}>

const Card = ({ children }: CardProps) => {
    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
}

export default Card

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        marginTop: deviceWidth < 380 ? 18 : 36,
        backgroundColor: Colors.primary800,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        justifyContent: "center",
        alignItems: "center"
    },
})