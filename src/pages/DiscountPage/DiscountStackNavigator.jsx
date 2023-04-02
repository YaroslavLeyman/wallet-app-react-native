import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DiscountPage from "./DiscountPage";
import CardDetails from "./CardDetails";

const Stack = createStackNavigator();

function DiscountStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DiscountPage" component={DiscountPage} options={{ headerShown: false }} />
      <Stack.Screen name="Данные карты" component={CardDetails} />
    </Stack.Navigator>
  );
}

export default DiscountStackNavigator;