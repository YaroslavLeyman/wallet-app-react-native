import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DiscountPage from '../../pages/DiscountPage/DiscountPage';
import DiscountCardDetails from '../DiscountCards/DiscountCardDetails';
import DiscountLoader from '../DiscountLoader/DiscountLoader';

const Stack = createStackNavigator();

function DiscountStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DiscountPage"
        component={DiscountPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Данные карты" component={DiscountCardDetails} />
      <Stack.Screen name="Добавление карты" component={DiscountLoader} />
    </Stack.Navigator>
  );
}

export default DiscountStackNavigator;
