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

export const CreditCardForm = () => {
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
  };

  const handleCardHolderNameChange = (text) => {
    setCardHolderName(text);
    let isValid = isValidName(text);
    setErrors((prevErrors) => ({
      ...prevErrors,
      cardHolderName: isValid ? "" : "Invalid name",
    }));
  };

  const handleExpiryDateChange = (text) => {
    let formattedText = text
      .replace(/[^0-9/]/g, "")
      .replace(/(^\d{2}$)/g, "$1/");
    setExpiryDate(formattedText);
  };

  const handleSave = () => {
    let validationErrors = {
      cardNumber:
        cardNumber.replace(/ /g, "").length === 16
          ? ""
          : "Please enter a 16-digit card number.",
      cardHolderName: isValidName(cardHolderName) ? "" : "Invalid name",
      expiryDate:
        expiryDate.length === 5 && expiryDate.charAt(2) === "/"
          ? ""
          : "Please enter a valid expiry date (MM/YY).",
      cvv: isValidCvv(cvv) ? "" : "Please enter a valid CVV.",
    };

    setErrors(validationErrors);

    if (Object.values(validationErrors).every((error) => error === "")) {
      // Save credit card information
      console.log({
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
        placeholder="Card Number"
        keyboardType="numeric"
        maxLength={19}
        onChangeText={handleCardNumberChange}
        value={cardNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Cardholder Name"
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
          onChangeText={setCvv}
          value={cvv}
        />
      </View>
      <Text style={styles.errorText}>{errors.expiryDate}</Text>
      <Text style={styles.errorText}>{errors.cvv}</Text>
      <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
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
});

