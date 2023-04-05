import React from "react";
import { View } from "react-native";
import { CreditCardForm } from "./CreditCardForm";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/actions/cardsActions";
import { useNavigation } from "@react-navigation/native";

const AddCardPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSaveCard = (cardDetails) => {
    dispatch(addCard(cardDetails));
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <CreditCardForm onSave={handleSaveCard} onCancel={handleCancel} />
    </View>
  );
};

export default AddCardPage;
