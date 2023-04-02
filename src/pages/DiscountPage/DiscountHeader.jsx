import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Text, Icon, Modal } from "@ui-kitten/components";
import DiscountLoader from "./DiscountLoader";

function DiscountHeader() {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const handleSave = () => {
    hideModal();
  };

  const handleClearText = () => {
    setTextVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.addContainer}>
        <Text category="h5" onPress={showModal}>
          Добавить еще
        </Text>
        <TouchableOpacity onPress={showModal}>
          <Icon
            name="plus-circle-outline"
            fill="blue"
            style={styles.addButton}
          />
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        backdropStyle={styles.backdrop}
        onBackdropPress={hideModal}
      >
        <View style={styles.modalContainer}>
          <DiscountLoader onSave={handleSave} onClearText={handleClearText} />
          <TouchableOpacity onPress={hideModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  addContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    alignItems: "center",
    padding: 10,
    gap: 5,
  },
  addButton: {
    width: 32,
    height: 32,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  closeButton: {
    backgroundColor: "blue",
    borderRadius: 7,
    padding: 10,
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default DiscountHeader;
