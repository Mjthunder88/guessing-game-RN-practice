import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";

import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <>
      <StatusBar style="black" />
      <LinearGradient colors={["#C2E7D9", "#222E50"]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <StartGameScreen />
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#C2E7D9",
  },
  backgroundImage: {
    opacity: 0.15
  }
});
