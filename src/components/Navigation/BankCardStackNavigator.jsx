import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BankingPage from "../../pages/BankingPage/BankingPage";
import BankingCardDetails from "../BankingCards/BankingCardDetails";
import AddCardPage from "../BankingCards/AddCardPage";

const Stack = createStackNavigator();

function BankCardStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BankingPage"
        component={BankingPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Данные карты" component={BankingCardDetails} />
      <Stack.Screen
        name="AddCardPage"
        component={AddCardPage}
        options={{ title: "Добавление карты" }}
      />
    </Stack.Navigator>
  );
}

export default BankCardStackNavigator;
