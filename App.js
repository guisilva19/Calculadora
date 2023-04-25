import React from "react";
import Button from "./src/components/Button/Button";
import Display from "./src/components/Display/Display";

import { SafeAreaView, StyleSheet, View } from "react-native";
import { useState } from "react";

const App = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberPress = (number) => {
    if (currentValue === "0" && number !== ".") {
      setCurrentValue(String(number));
    } else if (currentValue.includes(".") && number === ".") {
    } else {
      setCurrentValue(currentValue + String(number));
    }
  };

  const handleOperatorPress = (nextOperator) => {
    const current = parseFloat(currentValue);

    if (previousValue === null) {
      setPreviousValue(current);
      setCurrentValue("0");
    } else if (operator) {
      const result = calculateResult();
      setPreviousValue(result);
      setCurrentValue(String(result));
    }

    setOperator(nextOperator);
  };

  const calculateResult = () => {
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);

    switch (operator) {
      case "+":
        return previous + current;
      case "-":
        return previous - current;
      case "×":
        return previous * current;
      case "÷":
        return previous / current;
      default:
        return current;
    }
  };

  const handleEqualsPress = () => {
    const result = calculateResult();
    setPreviousValue(null);
    setCurrentValue(String(result));
  };

  const handleClearPress = () => {
    setCurrentValue("0");
    setPreviousValue(null);
    setOperator(null);
  };

  const handleDeletePress = () => {
    if (currentValue.length === 1) {
      setCurrentValue("0");
    } else {
      setCurrentValue(currentValue.slice(0, -1));
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Display currentValue={currentValue} />
        <View style={style.ContainerButtons}>
          <Button label="AC" double onClick={handleClearPress} />
          <Button label="C" onClick={handleDeletePress} />
          <Button label="÷" operation onClick={handleOperatorPress} />
          <Button label="7" onClick={handleNumberPress} />
          <Button label="8" onClick={handleNumberPress} />
          <Button label="9" onClick={handleNumberPress} />
          <Button label="*" operation onClick={handleOperatorPress} />
          <Button label="4" onClick={handleNumberPress} />
          <Button label="5" onClick={handleNumberPress} />
          <Button label="6" onClick={handleNumberPress} />
          <Button label="-" operation onClick={handleOperatorPress} />
          <Button label="1" onClick={handleNumberPress} />
          <Button label="2" onClick={handleNumberPress} />
          <Button label="3" onClick={handleNumberPress} />
          <Button label="+" operation onClick={handleOperatorPress} />
          <Button label="0" double onClick={handleNumberPress} />
          <Button label="." onClick={handleNumberPress} />
          <Button label="=" operation onClick={handleEqualsPress} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  ContainerButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default App;
