import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BankingItem = ({
  cardNumber,
  cardHolderName,
  expiryDate,
  cvv,
  imageUri,
}) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate("Данные карты", {
      cardDetails: {
        cardNumber,
        cardHolderName,
        expiryDate,
        cvv,
        imageUri,
      },
    });
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.cardContainer}>
        <Image source={{ uri: imageUri }} style={styles.cardImage} />
        <View style={styles.cardDetails}>
          <Text style={styles.cardNumber}>
            **** **** **** {cardNumber.slice(-4)}
          </Text>
          <View>
            <Text style={styles.cardHolderName}>{cardHolderName}</Text>
            <Text style={styles.expiryDate}>{expiryDate}</Text>
            <Text style={styles.cvv}>CVV ***</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  cardDetails: {
    position: "absolute",
    padding: 10,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  cardNumber: {
    fontSize: 18,
    color: "#fff",
    letterSpacing: 2,
  },
  cardHolderName: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 5,
  },
  expiryDate: {
    fontSize: 18,
    color: "#fff",
  },
  cvv: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "flex-end",
  },
});

export default BankingItem;
