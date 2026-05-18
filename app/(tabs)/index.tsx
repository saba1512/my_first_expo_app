import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count App</Text>

      <Text style={styles.number}>{count}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.buttonText}>+ 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count - 1)}
      >
        <Text style={styles.buttonText}>- 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetButton} onPress={() => setCount(0)}>
        <Text style={styles.resetText}>clear</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
  number: {
    fontSize: 60,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#4caf50",
  },
  button: {
    backgroundColor: "#2196f3",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  resetButton: {
    marginTop: 10,
  },
  resetText: {
    color: "#f44336",
    fontSize: 16,
  },
});
