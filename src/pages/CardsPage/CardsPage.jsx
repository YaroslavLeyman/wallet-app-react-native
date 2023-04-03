// {!hasNoSavedCards && (
//   <View>
//     <TouchableOpacity
//       onPress={() => setModalVisible(true)}
//       style={{ alignSelf: "flex-end" }}
//     >
//       <Text style={styles.buttonAdd}>Add</Text>
//     </TouchableOpacity>
//     {savedCards.map((card, index) => (
//       <View key={index} style={{ marginBottom: 20 }}>
//         <Text style={{ fontSize: 18 }}>
//           **** **** **** {card.cardNumber.slice(-4)}
//         </Text>
//       </View>
//     ))}
//   </View>
// )}

import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  Text,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addCard } from "../../redux/actions/cardsActions";
import CardItem from "./CardItem";
import CardLoader from "./CardLoader";
import { CreditCardForm } from "./CreditCardForm";

const CardsPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const savedCards =
    useSelector((state) => state.cardsReducer.savedCards) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(`There are ${savedCards.length} saved cards.`);
  }, [savedCards]);

  const handleSaveCard = (cardDetails) => {
    dispatch(addCard(cardDetails));
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const hasNoSavedCards = savedCards.length === 0;

  const renderCard = ({ item }) => (
    <CardItem
      cardNumber={item.cardNumber}
      cardHolderName={item.cardHolderName}
      expiryDate={item.expiryDate}
      cvv={item.cvv}
      imageUri={item.imageUri}
    />
  );

  return (
    <View style={styles.container}>
      {hasNoSavedCards ? (
        <CardLoader onPress={() => setModalVisible(true)} />
      ) : (
        <>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.addButton}
          >
            <Text style={styles.addButtonText}>Добавить +</Text>
          </TouchableOpacity>
          <FlatList
            data={savedCards}
            renderItem={renderCard}
            keyExtractor={(item) => item.cardNumber}
          />
        </>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <CreditCardForm onSave={handleSaveCard} onCancel={handleCancel} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  addButton: {
    alignSelf: "flex-end",
    backgroundColor: "blue",
    borderRadius: 7,
    padding: 10,
    marginBottom: 20,
    marginRight: 10,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
});

export default CardsPage;
