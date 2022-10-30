import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { InfoCartScreen, InfoScreen, InfoShipScreen } from "../screens";

import { COLORS } from "../contains";
import { HeaderNoSearch, HeaderScreen } from "../components";

const Stack = createStackNavigator();

const InfoStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.second,
      }}
    >
      <Stack.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{
          header: () => <HeaderNoSearch name={"Thông tin"} product />,
        }}
      />

      <Stack.Screen
        name="InfoShipScreen"
        component={InfoShipScreen}
        options={{
          header: () => <HeaderScreen right={false} />,
        }}
      />

      <Stack.Screen
        name="InfoCartScreen"
        component={InfoCartScreen}
        options={{
          header: () => <HeaderScreen right={false} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default InfoStackNavigation;
