import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { addImage } from "../../redux/actions/imageActions";

import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, Input, Layout } from "@ui-kitten/components";

const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

function DiscountLoader({ onSave }) {
  const [resourcePath, setResourcePath] = useState(null);
  const [isTextVisible, setTextVisible] = useState(true);

  const nameInputState = useInputState();
  const numberInputState = useInputState();

  const dispatch = useDispatch();

  const cameraLaunch = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      alert("Sorry, we need camera permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.canceled) {
      setResourcePath(result.assets[0]);
      setTextVisible(false);
    }
  };

  const imageGalleryLaunch = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled) {
      setResourcePath(result.assets[0]);
      setTextVisible(false);
    }
  };

  const handleSave = () => {
    dispatch(
      addImage({
        ...resourcePath,
        name: nameInputState.value,
        number: numberInputState.value,
      })
    );
    console.log("Image and data saved:", resourcePath.uri);
    if (onSave) {
      onSave();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        {resourcePath && (
          <Image
            source={{ uri: resourcePath.uri }}
            style={{ width: 250, height: 150, borderRadius: 10, margin: 10 }}
          />
        )}

        {resourcePath && <Text style={{ alignItems: "center" }}></Text>}
        {isTextVisible && (
          <Text style={styles.text}>
            Здесь будут Ваши дисконтные карты, сделайте фото карты или добавьте
            из галереи устройства
          </Text>
        )}
        <TouchableOpacity onPress={cameraLaunch} style={styles.button}>
          <Text style={styles.buttonText}>Фото дисконта</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={imageGalleryLaunch} style={styles.button}>
          <Text style={styles.buttonText}>Выбрать из галереи</Text>
        </TouchableOpacity>

        {resourcePath && (
          <Layout style={styles.inputContainer}>
            <View style={styles.controlContainer}>
              <Input
                style={styles.input}
                status="basic"
                placeholder="Введите название карты"
                {...nameInputState}
              />
            </View>

            <View style={styles.controlContainer}>
              <Input
                style={styles.input}
                status="basic"
                placeholder="Введите номер карты"
                {...numberInputState}
              />
            </View>
          </Layout>
        )}
      </View>

      <View>
        {resourcePath && (
          <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
            <Text style={styles.buttonText}>Сохранить</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: "50%"
  },
  mainContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
  button: {
    width: "80%",
    backgroundColor: "blue",
    borderRadius: 7,
    marginTop: 10,
    padding: 10,
    alignItems: "center",
  },
  saveButton: {
    width: "100%",
    backgroundColor: "blue",
    borderRadius: 7,
    padding: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  inputContainer: {
    width: "83%",
    marginTop: 10,
  },
  controlContainer: {
    borderRadius: 7,
    margin: 5,
    backgroundColor: "blue",
  },
});

export default DiscountLoader;
