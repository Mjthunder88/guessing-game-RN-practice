import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/PirmaryButton";

const StartGameScreen = () => {

const [enteredNumber, setEnteredNumber] = useState('')

let numberInputHandler = (enteredText) => {
  setEnteredNumber(enteredText)
}

let resetInputHandler = () => {
  setEnteredNumber('')
}

let confirmInputHandler = () => {
  const chosenNumber = parseInt(enteredNumber);

  if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
    Alert.alert('Invalid Number', "Number has to be a number between 1-99.", [{text: 'Okay',style: 'destructive', onPress: resetInputHandler}])
    return;
  }
  console.log("valid Number")

}

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.ButtonContainer}>
        <View style={styles.ButtonContainerInner}>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
        <View style={styles.ButtonContainerInner}>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 10,
    backgroundColor: "#222E50",
    shadowColor: "black",
    shadowOffset: { width: 5, height: 8 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  numberInput: {
    height: 50,
    width: 100,
    fontSize: 32,
    borderBottomColor: "#C2E7D9",
    borderBottomWidth: 1.5,
    color: "#C2E7D9",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  ButtonContainer: {
    flexDirection: "row",
  },
  ButtonContainerInner: {
    flex: 1
  }
});

export default StartGameScreen;
