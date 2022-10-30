import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { COLORS } from "../contains";
import HomeStackScreen from "./HomeNavigation";
import CategoryStackNavigation from "./CategoryNavigation";
import FavoriteStackNavigation from "./FavoriteNavigation";
import InfoStackNavigation from "./InfoNavigation";
import SupportStackNavigation from "./SupportNavigation";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = focused ? "ios-home" : "ios-home-outline";
              break;
            case "Favorite":
              iconName = focused ? "ios-heart" : "ios-heart-outline";
              break;
            case "Category":
              iconName = focused ? "ios-bookmark" : "ios-bookmark-outline";
              break;
            case "Support":
              iconName = focused
                ? "ios-chatbubbles"
                : "ios-chatbubbles-outline";
              break;
            case "Info":
              iconName = focused ? "ios-person" : "ios-person-outline";
              break;
            default:
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.primary,
        tabBarStyle: {
          height: 90,
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
          fontSize: 12,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ title: "Trang chủ" }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryStackNavigation}
        options={{
          title: "Danh mục",
          tabBarBadge: "Sale",
          tabBarBadgeStyle: {
            backgroundColor: "yellow",
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteStackNavigation}
        options={{ title: "Yêu thích" }}
      />
      <Tab.Screen
        name="Support"
        component={SupportStackNavigation}
        options={{ title: "Hỗ trợ" }}
      />
      <Tab.Screen
        name="Info"
        component={InfoStackNavigation}
        options={{ title: "Thông tin" }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
