import React from "react";
import { Text, View } from "react-native";
import { CreditCardForm } from "./CreditCardForm";

const CardsPage = () => {
  return (
    <View>
      <Text category="h5">Банковские карты</Text>
      <CreditCardForm />
    </View>
  );
};

export default CardsPage;
