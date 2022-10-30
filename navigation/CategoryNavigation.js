import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "../contains";
import { CategoryAllScreen } from "../screens";
import { Header } from "../components";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const CategoryStackNavigation = () => {
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
        name="CategoryAllScreen"
        component={CategoryAllScreen}
        options={{
          header: () => <Header icon={"sort"} name={"Danh mục"} product />,
        }}
      />
    </Stack.Navigator>
  );
};

export default CategoryStackNavigation;
