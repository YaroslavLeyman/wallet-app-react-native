import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { deleteImage } from "../../redux/actions/imageActions";
import QRCode from "react-native-qrcode-svg";

function DiscountCardDetails({ route, navigation }) {
  const { data } = route.params;
  const dispatch = useDispatch();
  const [codeData, setCodeData] = useState("");
  const [barcodeUri, setBarcodeUri] = useState(null);

  const isNumeric = (str) => !isNaN(str) && !isNaN(parseFloat(str));

  useEffect(() => {
    if (data.number) {
      setCodeData(data.number);
      if (
        isNumeric(data.number) &&
        (data.number.length === 12 || data.number.length === 13)
      ) {
        setBarcodeUri(
          `https://barcode.tec-it.com/barcode.ashx?data=${data.number}&code=Code128&multiplebarcodes=false&translate-esc=false&unit=Fit&dpi=96&imagetype=Png&rotation=0&color=%23000000&bgcolor=%23ffffff&qunit=Mm&quiet=0`
        );
      } else {
        setBarcodeUri(null);
      }
    }
  }, [data.number]);

  const handleDelete = () => {
    Alert.alert(
      "Подтверждение удаления",
      "Вы точно хотите удалить карту?",
      [
        {
          text: "Нет",
          style: "cancel",
        },
        {
          text: "Да",
          onPress: () => {
            dispatch(deleteImage(data.id));
            navigation.goBack();
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{data.name || "Название карты"}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={{ uri: data.uri }} style={styles.enlargedImage} />
      </TouchableOpacity>
      {codeData ? (
        <>
          {barcodeUri ? (
            <Image source={{ uri: barcodeUri }} style={styles.barcode} />
          ) : (
            <QRCode value={codeData} size={100} />
          )}
        </>
      ) : null}
      <View style={styles.cardData}>
        <Text style={styles.cardDataText}>Номер карты:</Text>
        <Text style={styles.cardDataText}>{data.number || "Номер карты"}</Text>
      </View>
      <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Удалить карту</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  enlargedImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardData: {
    alignItems: "center",
  },
  cardDataText: {
    fontSize: 18,
    marginTop: 20,
  },
  deleteButton: {
    backgroundColor: "red",
    borderRadius: 7,
    marginTop: 70,
    padding: 10,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  barcode: {
    width: "100%",
    height: 80,
    resizeMode: "contain",
    marginVertical: 10,
  },
});

export default DiscountCardDetails;
