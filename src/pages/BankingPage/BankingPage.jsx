import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import BankingItem from "../../components/BankingCards/BankingItem";
import BankingLoader from "../../components/BankingLoader/BankingLoader";
import BankingHeader from "../../components/Header/BankingHeader/BankingHeader";

const CardsPage = ({ navigation }) => {
  const savedCards =
    useSelector((state) => state.cardsReducer.savedCards) || [];

  useEffect(() => {
    console.log(`There are ${savedCards.length} saved cards.`);
  }, [savedCards]);

  const handleAddCard = () => {
    navigation.navigate("AddCardPage");
  };

  const hasNoSavedCards = savedCards.length === 0;

  const renderCard = ({ item }) => (
    <BankingItem
      cardNumber={item.cardNumber}
      cardHolderName={item.cardHolderName}
      expiryDate={item.expiryDate}
      cvv={item.cvv}
      imageUri={item.imageUri}
    />
  );

  return (
    <View style={styles.container}>
      <BankingHeader onPressAdd={handleAddCard} />
      {hasNoSavedCards ? (
        <BankingLoader onPress={() => handleAddCard()} />
      ) : (
        <FlatList
          data={savedCards}
          renderItem={renderCard}
          keyExtractor={(item) => item.cardNumber}
          style={styles.containerFlatList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFlatList: {
    backgroundColor: "white",
  },
});

export default CardsPage;
