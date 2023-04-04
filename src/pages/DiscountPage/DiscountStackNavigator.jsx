import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DiscountPage from './DiscountPage';
import CardDetails from './CardDetails';
import DiscountLoader from './DiscountLoader';

const Stack = createStackNavigator();

function DiscountStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DiscountPage"
        component={DiscountPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Данные карты" component={CardDetails} />
      <Stack.Screen name="Добавление карты" component={DiscountLoader} />
    </Stack.Navigator>
  );
}

export default DiscountStackNavigator;
