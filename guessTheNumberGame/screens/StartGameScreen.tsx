import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, View, Dimensions, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

type StartGameScreenProps = {
    onConfirmNumber: (pickedNumber: number) => void
}

const StartGameScreen = ({ onConfirmNumber }: StartGameScreenProps) => {

    const [enteredNumber, setEnteredNumber] = useState<string>();
    const { width, height } = useWindowDimensions()

    function numberInputHandler(enteredText: string) {
        setEnteredNumber(enteredText)
    }

    function resetInputHanlder() {
        setEnteredNumber("")
    }

    function showAlert() {
        Alert.alert("Invalid Number!",
            "Number has to be between 1 and 99.",
            [{ text: "Ok", style: "destructive", onPress: resetInputHanlder }]
        )
    }

    function confirmInputHandler() {

        if (enteredNumber) {
            const chosenNumber = parseInt(enteredNumber)

            if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
                showAlert()
                return
            }
            onConfirmNumber(chosenNumber)
        } else {
            showAlert()
            return
        }
    }

    const marginTop = height < 380 ? 10 : 40;

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior='position'>
                <View style={[styles.rootContainer, { marginTop: marginTop }]}>
                    <Title>Guess My Number</Title>
                    <Card>
                        <InstructionText style={styles.instructionText}>Enter a number</InstructionText>
                        <TextInput
                            style={styles.textInput}
                            maxLength={2}
                            keyboardType='number-pad'
                            autoCapitalize='none'
                            autoCorrect={false}
                            value={enteredNumber}
                            onChangeText={numberInputHandler}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHanlder}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    screen: { flex: 1 },
    rootContainer: {
        flex: 1,
        // marginTop: deviceHeight < 380 ? 10 : 40,
        alignItems: "center"
    },
    textInput: {
        height: 70,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
        width: 50,
        textAlign: "center"
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    },
    instructionText: {
        marginBottom: 12
    }
});
