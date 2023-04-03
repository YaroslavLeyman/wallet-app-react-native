import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CardLoader = ({ onPress }) => {
  return (
    <View style={styles.containerContent}>
      <Text style={styles.containerContentText}>
        У Вас еще нет сохраненных карт
      </Text>
      <TouchableOpacity style={styles.buttonAdd} onPress={onPress}>
        <Text style={styles.buttonAddText}>Добавить +</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerContent: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  containerContentText: {
    fontSize: 20,
    textAlign: "center",
  },
  buttonAdd: {
    backgroundColor: "blue",
    borderRadius: 7,
    padding: 10,
    alignItems: "center",
  },
  buttonAddText: {
    color: "white",
    fontSize: 16,
  },
});

export default CardLoader;

