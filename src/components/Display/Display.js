import { StyleSheet, Text, View } from "react-native";

const Display = ({ currentValue }) => {
  return (
    <View style={style.display}>
      <Text style={style.displayValue} numberOfLines={1}>
        {currentValue}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  display: {
    padding: 20,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "flex-end",
  },
  displayValue: {
    fontSize: 60,
    color: "white",
  },
});

export default Display;
