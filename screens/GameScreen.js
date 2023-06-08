import { View, Text, StyleSheet, Alert } from "react-native";

// * .bind() on functions lets you send predefined props/ variables into a funciton.

import { useState } from "react";

import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PirmaryButton";

let minBoundry = 1;
let maxBoundry = 100;
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}


const GameScreen = ({ userNumber }) => {
  const initalGuess = generateRandomBetween(minBoundry, maxBoundry, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initalGuess);

  let nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "Try again buddy", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    console.log(minBoundry, maxBoundry)

    if (direction === "lower") {
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess + 1;
      const newRandomNum = generateRandomBetween(
        minBoundry,
        maxBoundry,
        currentGuess
      );
      setCurrentGuess(newRandomNum);
    }
  };

  return (
    <View style={styles.screen}>
      <Title>Opponents Guess </Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
