import { View, Text, StyleSheet } from "react-native";

import { useState} from "react"

import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

const GameScreen = ({userNumber}) => {
const initalGuess = generateRandomBetween(1, 100, userNumber)
const [currentGuess, setCurrentGuess] = useState(initalGuess)

  return (
    <View style={styles.screen}>
      <Title>Opponents Guess </Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        {/* + - */}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  }
});

export default GameScreen;
