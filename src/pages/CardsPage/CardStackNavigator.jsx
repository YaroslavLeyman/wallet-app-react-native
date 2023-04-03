import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CardsPage from "./CardsPage";
import CardBankDetails from "./CardBankDetails";

const Stack = createStackNavigator();

function CardStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CardsPage" component={CardsPage} options={{ headerShown: false }} />
      <Stack.Screen name="Данные карты" component={CardBankDetails} />
    </Stack.Navigator>
  );
}

export default CardStackNavigator;