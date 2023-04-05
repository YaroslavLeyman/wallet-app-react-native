import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon, Text } from "@ui-kitten/components";

const BankingHeader = ({ onPressAdd }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText} category="h5">
        Банковские карты
      </Text>
      <Icon
        name="plus-circle-outline"
        fill="blue"
        style={styles.addButton}
        onPress={onPressAdd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    padding: 10,
    backgroundColor: "#EDF1F7",
  },
  addButton: {
    width: 32,
    height: 32,
  },
  headerText: {
    paddingLeft: 10,
  },
});

export default BankingHeader;
