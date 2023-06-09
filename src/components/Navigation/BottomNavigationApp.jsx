import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";

import { CashBackPage } from "../../pages/CashBackPage/CashBackPage";
import BankCardStackNavigator from "./BankCardStackNavigator";
import DiscountStackNavigator from "./DiscountStackNavigator";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="Банковcкие карты" />
    <BottomNavigationTab title="Дисконты" />
    <BottomNavigationTab title="Кешбэк" />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator
    initialRouteName="Дисконты"
    tabBar={(props) => <BottomTabBar {...props} />}
  >
    <Screen
      name="Банковcкие карты"
      component={BankCardStackNavigator}
      options={{ headerShown: false }}
    />
    <Screen
      name="Дисконты"
      component={DiscountStackNavigator}
      options={{ headerShown: false }}
    />
    <Screen
      name="Кешбэк"
      component={CashBackPage}
      options={{ headerShown: false }}
    />
  </Navigator>
);

export const BottomNavigationApp = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
