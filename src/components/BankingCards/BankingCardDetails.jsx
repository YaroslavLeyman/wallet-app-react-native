import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { deleteCard } from "../../redux/actions/cardsActions";

const BankingCardDetails = ({ route, navigation }) => {
  const { cardDetails } = route.params;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCard(cardDetails));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardBack}>
        <View style={styles.cardBackWhiteStripe}>
          <Text style={styles.cardBackText}>CVV: {cardDetails.cvv}</Text>
        </View>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.cardHolderName}>
          Владелец карты: {cardDetails.cardHolderName}
        </Text>
        <Text style={styles.cardNumber}>
          Номер карты: {cardDetails.cardNumber}
        </Text>
        <Text style={styles.expiryDate}>
          Срок действия: {cardDetails.expiryDate}
        </Text>
      </View>
      <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Удалить карту</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 40,
  },
  cardBack: {
    width: 300,
    height: 190,
    backgroundColor: "#2C3E50",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 10,
  },
  cardBackWhiteStripe: {
    width: "90%",
    height: 30,
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
    alignItems: "flex-end",
  },
  cardBackText: {
    fontSize: 20,
    fontWeight: 600,
    color: "black",
    marginRight: 5,
  },
  containerText: {
    flex: 2,
  },
  cardHolderName: {
    fontSize: 18,
    marginTop: 10,
  },
  cardNumber: {
    fontSize: 18,
    marginTop: 5,
  },
  expiryDate: {
    fontSize: 18,
    marginTop: 5,
  },
  deleteButton: {
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  deleteButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});

export default BankingCardDetails;
