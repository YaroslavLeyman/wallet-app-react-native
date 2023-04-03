import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Text, Card } from "@ui-kitten/components";

export const numColumns = 2;
const screenWidth = Dimensions.get('window').width;
const cardWidth = screenWidth / numColumns - 32;

export const CategoryCard = ({ title, cashback }) => (
  <Card style={styles.card}>
    <Text style={styles.cardTitle} category="h6">
      {title}
    </Text>
    <Text style={styles.cardCashback} category="s1">
      {cashback}
    </Text>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 120,
    borderRadius: 12,
    margin: 8,
    width: cardWidth,
  },
  cardTitle: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardCashback: {
    color: "#ff5722",
    textAlign: "center",
  },
});
