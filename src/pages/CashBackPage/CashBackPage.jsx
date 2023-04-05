import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Layout, Text, Button, List, Modal } from "@ui-kitten/components";
import { categories } from "../../helpers/CashBack/categories";
import { CategoryCard, numColumns } from "../../components/CashBack/CategoryCard";

export const CashBackPage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const renderItem = ({ item }) => (
    <CategoryCard title={item.title} cashback={item.cashback} />
  );

  return (
    <Layout style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title} category="h4">
          Как получить кешбэк до 30%?
        </Text>
        <Button style={styles.learnMoreButton} onPress={toggleModal}>
          Узнать больше
        </Button>
      </View>
      <Text style={styles.categoryHeader} category="h5">
        Категории
      </Text>
      <List
        style={styles.categoryList}
        contentContainerStyle={styles.categoryListContent}
        data={categories}
        renderItem={renderItem}
        numColumns={numColumns}
        keyExtractor={(item, index) => index.toString()}
      />
      <Modal
        visible={modalVisible}
        backdropStyle={styles.backdrop}
        onBackdropPress={toggleModal}
      >
        <Layout style={styles.modalContainer}>
          <Text category="h6" style={styles.modalTitle}>
            Как получить кешбэк до 30%
          </Text>
          <View>
            <Text>1. Выберите предложение партнера</Text>
            <Text>2. Совершите покупку в магазине или онлайн</Text>
            <Text>3. Отсканируйте чек и получите кешбэк на баланc в кошельке</Text>
            <Text>4. Накопите 500р., чтобы вывести деньги на карту любого банка</Text>
          </View>
          <Button style={styles.viewOffersButton} onPress={toggleModal}>
            Посмотреть
          </Button>
        </Layout>
      </Modal>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: "#E1E1E1",
    backgroundColor: "#f6f6f6",
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 24,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
  },
  learnMoreButton: {
    marginTop: 15,
  },
  categoryHeader: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    fontWeight: "bold",
  },
  categoryList: {
    flexGrow: 1,
  },
  categoryListContent: {
    paddingHorizontal: 16,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "90%",
    borderRadius: 5,
    padding: 20,
    alignItems: "center",
    alignSelf: "center",
  },
  modalTitle: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  viewOffersButton: {
    marginTop: 20,
    alignSelf: "center",
  },
});
