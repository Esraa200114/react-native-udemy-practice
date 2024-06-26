import { Image, StyleSheet, Text, View, Dimensions, useWindowDimensions, ScrollView } from 'react-native'
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

    const { width, height } = useWindowDimensions()

    let imageSize = 300;

    if (width < 380) {
        imageSize = 150
    }

    if (height < 400) {
        imageSize = 80
    }

    const imageStyle = { width: imageSize, height: imageSize, borderRadius: imageSize / 2 }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>Game Over!</Title>
                <View style={[styles.imagecontainer, imageStyle]}>
                    <Image style={styles.image} source={require("../assets/images/success.png")} />
                </View>
                <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text>.</Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    )
}

export default GameOverScreen

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    screen: { flex: 1 },
    rootContainer: {
        flex: 1,
        padding: 24,
        alignItems: "center",
        justifyContent: "center"
    },
    imagecontainer: {
        // borderRadius: deviceWidth < 380 ? 75 : 150,
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
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