import React from "react";
import { Card, Text } from "@ui-kitten/components";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function DiscountItem({ data }) {
  const navigation = useNavigation();

  const handleImagePress = () => {
    navigation.navigate("Данные карты", { data });
  };

  return (
    <Card style={styles.container} onPress={handleImagePress}>
      <Image
        source={{ uri: data.uri }}
        style={{
          width: 250,
          height: 150,
          borderRadius: 10,
          marginBottom: 10,
          borderWidth: 2,
          borderColor: "#EDF1F7",
        }}
      />

      <Text style={styles.text}>{data.name || "Название карты"}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
});

export default DiscountItem;
