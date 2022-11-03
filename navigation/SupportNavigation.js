import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../contains";
import { SupportScreen } from "../screens";
import { HeaderNoSearch } from "../components";

const Stack = createStackNavigator();

const SupportStackNavigation = () => {
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
        name="SupportScreen"
        component={SupportScreen}
        options={{
          header: () => <HeaderNoSearch name={"Hỗ trợ"} product />,
        }}
      />
    </Stack.Navigator>
  );
};

export default SupportStackNavigation;
