import { StyleSheet, Text } from 'react-native'
import React, { PropsWithChildren, ReactNode } from 'react'
import Colors from '../../constants/colors'

type InstructionTextProps = PropsWithChildren<{
    children: ReactNode,
    style: Object
}>

const InstructionText = ({children, style}: InstructionTextProps) => {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    )
}

export default InstructionText

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
        // fontWeight: "bold",
        fontFamily: "Open Sans Regular"
    },
})