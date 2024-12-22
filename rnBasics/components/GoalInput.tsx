import { Button, Modal, StyleSheet, TextInput, View, Image } from 'react-native'
import React, { useState } from 'react'

type GoalInputProps = {
    visible: boolean,
    onAddGoal: (text: string) => void,
    onCancelGoal: () => void
}

const GoalInput = ({ visible, onAddGoal, onCancelGoal }: GoalInputProps) => {

    const [goal, setGoal] = useState<string>("")

    function goalInputHandler(enteredText: string) {
        setGoal(enteredText)
    }

    function addGoalHandler() {
        onAddGoal(goal)
        setGoal("")
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image source={require("../assets/images/goal.png")} style={styles.image} />
                <TextInput style={styles.textInput} value={goal} placeholder='Your course goal' onChangeText={goalInputHandler} />
                <View style={styles.actionsContainer}>
                    <View style={styles.actionButton}>
                        <Button title='Cancel' onPress={onCancelGoal} color="#f31282" />
                    </View>
                    <View style={styles.actionButton}>
                        <Button title='Add Goal' onPress={addGoalHandler} color="#b180f0" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b"
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        width: "70%",
        padding: 16,
        color: "#120438",
        borderRadius: 6
    },
    actionsContainer: {
        marginTop: 16,
        flexDirection: "row"
    },
    actionButton: {
        width: 100,
        marginHorizontal: 8
    }
})