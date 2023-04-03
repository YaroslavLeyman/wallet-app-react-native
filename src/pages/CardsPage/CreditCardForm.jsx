import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

const isValidName = (name) => {
  return /^[a-zA-Z\s]*$/.test(name);
};

const isValidCvv = (cvv) => /^[0-9]{3,4}$/.test(cvv);

const isValidCardNumber = (cardNumber) =>
  /^[0-9]{16}$/.test(cardNumber.replace(/ /g, ""));

export const CreditCardForm = ({ onSave, onCancel }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [errors, setErrors] = useState({
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleCardNumberChange = (text) => {
    let formattedText = text
      .replace(/[^0-9]/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    setCardNumber(formattedText);
    let isValid = isValidCardNumber(formattedText);
    setErrors((prevErrors) => ({
      ...prevErrors,
      cardNumber: isValid ? "" : "Пожалуйста, введите номер карты.",
    }));
  };

  const handleCardHolderNameChange = (text) => {
    setCardHolderName(text);
    let isValid = isValidName(text);
    setErrors((prevErrors) => ({
      ...prevErrors,
      cardHolderName: isValid ? "" : "Неверное имя",
    }));
  };

  const handleExpiryDateChange = (text) => {
    let formattedText = text
      .replace(/[^0-9/]/g, "")
      .replace(/(^\d{2}$)/g, "$1/");
    setExpiryDate(formattedText);
    let isValid = formattedText.length === 5 && formattedText.charAt(2) === "/";
    setErrors((prevErrors) => ({
      ...prevErrors,
      expiryDate: isValid ? "" : "Пожалуйста, введите в формате (MM/YY).",
    }));
  };

  const handleCvvChange = (text) => {
    setCvv(text);
    let isValid = isValidCvv(text);
    setErrors((prevErrors) => ({
      ...prevErrors,
      cvv: isValid ? "" : "Пожалуйста, введите CVV.",
    }));
  };

  const handleSave = () => {
    let validationErrors = {
      cardNumber: isValidCardNumber(cardNumber)
        ? ""
        : "Пожалуйста, введите номер карты.",
      cardHolderName: isValidName(cardHolderName) ? "" : "Неверное имя",
      expiryDate:
        expiryDate.length === 5 && expiryDate.charAt(2) === "/"
          ? ""
          : "Пожалуйста, введите в формате (MM/YY).",
      cvv: isValidCvv(cvv) ? "" : "Пожалуйста, введите CVV.",
    };

    setErrors(validationErrors);

    if (Object.values(validationErrors).every((error) => error === "")) {
      onSave({
        cardNumber,
        cardHolderName,
        expiryDate,
        cvv,
      });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Номер карты"
        keyboardType="numeric"
        maxLength={19}
        onChangeText={handleCardNumberChange}
        value={cardNumber}
      />
      <Text style={styles.errorText}>{errors.cardNumber}</Text>
      <TextInput
        style={styles.input}
        placeholder="Владелец карты"
        onChangeText={handleCardHolderNameChange}
        value={cardHolderName}
      />
      <Text style={styles.errorText}>{errors.cardHolderName}</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.inputHalf}
          placeholder="MM/YY"
          keyboardType="numeric"
          maxLength={5}
          onChangeText={handleExpiryDateChange}
          value={expiryDate}
        />
        <TextInput
          style={styles.inputHalf}
          placeholder="CVV"
          keyboardType="numeric"
          maxLength={4}
          onChangeText={handleCvvChange}
          value={cvv}
        />
      </View>
      <Text style={styles.errorText}>{errors.expiryDate}</Text>
      <Text style={styles.errorText}>{errors.cvv}</Text>
      <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Сохранить</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
        <Text style={styles.cancelButtonText}>Закрыть</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 20,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputHalf: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 20,
    fontSize: 16,
    width: "48%",
  },
  saveButton: {
    backgroundColor: "blue",
    borderRadius: 7,
    padding: 10,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    marginBottom: 15,
    fontSize: 14,
  },
  cancelButton: {
    backgroundColor: "red",
    borderRadius: 7,
    padding: 10,
    alignItems: "center",
    marginTop: 10,
  },
  cancelButtonText: {
    color: "white",
    fontSize: 16,
  },
});
