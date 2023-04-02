import React from "react";
import { Text, Button, Layout } from "@ui-kitten/components";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native";

export const CashBackPage = () => {
  return (
    <View>
      <Layout style={styles.container} level="1">
        <Text style={styles.containerText} category="h5">
          Как получить кешбэк до 30%
        </Text>

        <Button style={styles.button} appearance="filled">
          Унать подробнее
        </Button>
      </Layout>

      <Text style={{ margin: 10 }} category="h5">
        Категории
      </Text>

      <Layout style={styles.containerCards} level="1">
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText} category="h6">
            Товары с кешбэком
          </Text>

          <Text style={styles.cardText}>До 20%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText} category="h6">
            Еда и продукты
          </Text>

          <Text style={styles.cardText}>До 20%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText} category="h6">
            Аптеки и медицина
          </Text>

          <Text style={styles.cardText}>До 20%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText} category="h6">
            Спорт
          </Text>

          <Text style={styles.cardText}>До 20%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText} category="h6">
            Авто
          </Text>

          <Text style={styles.cardText}>До 20%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText} category="h6">
            Подарки
          </Text>

          <Text style={styles.cardText}>До 20%</Text>
        </TouchableOpacity>
      </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 110,
    gap: 15,
    backgroundColor: "#2E3A59",
    borderRadius: 10,
    margin: 10,
    paddingBottom: 10,
  },
  button: {
    margin: 2,
  },
  containerText: {
    color: "white",
  },
  containerCards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#A6C1FF",
    height: "100%",
    gap: 10,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#DB2C66",
    width: 150,
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
  cardText: {
    color: "white",
    margin: 10,
  }
});
