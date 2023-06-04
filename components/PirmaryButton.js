import { View, Text, Pressable, StyleSheet } from "react-native";

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
    backgroundColor: "#C2E7D9",
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
