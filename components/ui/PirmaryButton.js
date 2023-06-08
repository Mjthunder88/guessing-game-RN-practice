import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

const PrimaryButton = ({ children, onPress }) => {
  let cool = () => {
    console.log("press");
  };
  return (
    <View style={styles.ButtonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.ButtonInnerContainer, styles.pressed]
            : styles.ButtonInnerContainer
        }
      >
        <Text style={styles.ButtonTxt}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonOuterContainer: {
    margin: 4,
    borderRadius: "10%",
    overflow: "hidden",
  },
  ButtonInnerContainer: {
    backgroundColor: Colors.Primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  ButtonTxt: {
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
