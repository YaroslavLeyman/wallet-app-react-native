import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { BottomNavigationSimpleUsageShowcase } from "./src/components/BottomNavigation/BottomNavigationSimpleUsageShowcase";
import { View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store/index";

const App = () => (
  <Provider store={store}>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={{ flex: 1 }}>
        <BottomNavigationSimpleUsageShowcase />
      </View>
    </ApplicationProvider>
  </Provider>
);

export default App;
