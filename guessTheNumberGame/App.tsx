import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  ImageBackground,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

function App(): React.JSX.Element {

  const [userNumber, setUserNumber] = useState<number | null>()
  const [gameIsOver, setGameIsOver] = useState<boolean>(true)
  const [guessRounds, setGuessRounds] = useState<number>(0)

  function pickedNumberHandler(pickerNumber: number) {
    setUserNumber(pickerNumber)
    setGameIsOver(false)
  }

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />

  function gameOverHandler(numberofRounds: number) {
    setGameIsOver(true)
    setGuessRounds(numberofRounds)
  }

  function startNewGameHandler() {
    setUserNumber(null)
    setGuessRounds(0)
  }

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler} />
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={[Colors.primary700, Colors.accent500]}>
      <ImageBackground source={require("./assets/images/background.png")} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});

export default App;
