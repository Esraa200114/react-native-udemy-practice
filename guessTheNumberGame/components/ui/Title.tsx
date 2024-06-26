import { StyleSheet, Text, Platform } from 'react-native'
import React, { PropsWithChildren, ReactNode } from 'react'

type TitleProps = PropsWithChildren<{
    children: ReactNode
}>

const Title: React.FC<TitleProps> = ({ children }) => {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        // fontWeight: "bold",
        color: "white",
        textAlign: "center",
        borderWidth: Platform.OS === 'android' ? 2 : 0,
        borderColor: "white",
        padding: 12,
        fontFamily: "Open Sans Bold",
        width: 300,
        maxWidth: '90%',
        alignSelf: 'center'
    }
})