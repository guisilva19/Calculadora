import { Dimensions, StyleSheet, Text, TouchableHighlight } from "react-native";

const Button = ({ label, onClick, double, triple, operation }) => {
  const styleButton = [style.button];

  if (double) styleButton.push(style.buttonDouble);
  if (triple) styleButton.push(style.buttonTriple);
  if (operation) styleButton.push(style.operationButton);

  return (
    <TouchableHighlight onPress={() => onClick(label)}>
      <Text style={styleButton}>{label}</Text>
    </TouchableHighlight>
  );
};

const style = StyleSheet.create({
  button: {
    width: Dimensions.get("window").width / 4,
    height: Dimensions.get("window").width / 4,
    padding: 20,
    fontSize: 45,
    textAlign: "center",
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
  },

  operationButton: {
    color: "#fff",
    backgroundColor: "#fa8231",
  },

  buttonDouble: {
    width: (Dimensions.get("window").width / 4) * 2,
  },

  buttonTriple: {
    width: (Dimensions.get("window").width / 4) * 3,
  },
});

export default Button;
