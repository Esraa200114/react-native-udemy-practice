import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'
import PrimaryButton from '../components/ui/PrimaryButton'

type GameOverScreenProps = {
    roundsNumber: number,
    userNumber: number,
    onStartNewGame: () => void
}

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }: GameOverScreenProps) => {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imagecontainer}>
                <Image style={styles.image} source={require("../assets/images/success.png")} />
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text>.</Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        alignItems: "center",
        justifyContent: "center"
    },
    imagecontainer: {
        borderRadius: 250,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: "hidden",
        margin: 36
    },
    image: {
        width: "100%",
        height: "100%"
    },
    summaryText: {
        fontFamily: "Open Sans Regular",
        fontSize: 24,
        textAlign: "center",
        marginBottom: 24
    },
    highlightText: {
        fontFamily: "Open Sans Bold",
        color: Colors.primary500
    }
})