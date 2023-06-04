import { View, Text, StyleSheet } from "react-native";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Opponents Guess</Text>
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
  },
});

export default GameScreen;
