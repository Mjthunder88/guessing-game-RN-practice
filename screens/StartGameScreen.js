import { TextInput, View, StyleSheet } from "react-native";

import PrimaryButton from "../components/PirmaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.ButtonContainer}>
        <PrimaryButton>Confirm</PrimaryButton>
        <PrimaryButton>Reset</PrimaryButton>
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default StartGameScreen;
