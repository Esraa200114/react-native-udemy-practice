import { Alert, FlatList, StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native'
import { useEffect, useState } from 'react';
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import Icon from 'react-native-vector-icons/Ionicons';
import GuessLogItem from '../components/game/GuessLogItem';
import React from 'react';

function generateRandomBetween(min: number, max: number, exclude: number) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

type GameScreenProps = {
    userNumber: number,
    onGameOver: (numberOfRounds: number) => void
}

let minBoundary = 1
let maxBoundary = 100

const GameScreen = ({ userNumber, onGameOver }: GameScreenProps) => {

    const { width, height } = useWindowDimensions()
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState<number>(initialGuess)
    const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess])

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length)
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100
    }, [])

    function nextGuessHandler(direction: string) { // direction = "lower" | "higher"

        if ((direction === "lower" && currentGuess < userNumber) || (direction === "higher" && currentGuess > userNumber)) {
            Alert.alert("Don't lie !", "You know this is wrong...", [{ text: "Sorry", style: "cancel" }])
            return
        }
        if (direction === "lower") {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }
        console.log(minBoundary, maxBoundary);

        const newRandomGuess = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRandomGuess)
        setGuessRounds((prev) => [newRandomGuess, ...prev])
    }

    const guessRoundsListLength = guessRounds.length

    let content = <>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(null, "higher")}><Icon name="add-outline" size={24} /></PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(null, "lower")}><Icon name="remove-outline" size={24} /></PrimaryButton>
                </View>
            </View>
        </Card></>

    if (width > 500) {
        content = <>
            <View style={styles.buttonsContainerWide}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(null, "higher")}><Icon name="add-outline" size={24} /></PrimaryButton>
                </View>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(null, "lower")}><Icon name="remove-outline" size={24} /></PrimaryButton>
                </View>
            </View>
        </>
    }
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={[styles.listContainer, { padding: width > 500 ? 0 : 16 }]}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) =>
                        <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />
                    }
                    keyExtractor={(item) => item.toString()}
                />
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    },
    instructionText: {
        marginBottom: 12,
        alignSelf: 'center'
    },
    listContainer: {
        flex: 1,
    },
    buttonsContainerWide: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})