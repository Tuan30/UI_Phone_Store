import { View, Text, FlatList } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../contains";
import { FavoriteScreen } from "../screens";
import { Header } from "../components";

const Stack = createStackNavigator();

const FavoriteStackNavigation = () => {
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
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          header: () => <Header icon={"delete"} name={"Yêu thích"} product />,
        }}
      />
    </Stack.Navigator>
  );
};

export default FavoriteStackNavigation;
