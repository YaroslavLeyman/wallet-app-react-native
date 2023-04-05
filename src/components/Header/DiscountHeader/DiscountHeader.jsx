import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

function DiscountHeader() {
  const navigation = useNavigation();

  const navigateToDiscountLoader = () => {
    navigation.navigate('Добавление карты');
  };

  return (
    <TouchableOpacity onPress={navigateToDiscountLoader}>
      <Icon name="plus-circle-outline" fill="blue" style={styles.addButton} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addButton: {
    width: 32,
    height: 32,
    marginTop: 30,
  },
});

export default DiscountHeader;

