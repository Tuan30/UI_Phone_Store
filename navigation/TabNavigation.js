import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../contains";
import MyTabs from "./index";
import {
  BuyScreen,
  CartScreen,
  FillterScreen,
  LoginScreen,
  OrderScreen,
  PayScreen,
  ProductScreen,
  SearchScreen,
  OrderItemScreen,
  SignupScreen,
  ShipScreen,
  ChatApp,
} from "../screens";
import AppLoading from "expo-app-loading";
import { HeaderScreen, HeaderSearch } from "../components";
import {
  Inter_900Black,
  Allura_400Regular,
  useFonts,
} from "@expo-google-fonts/dev";

const Stack = createStackNavigator();

const TabStackScreen = () => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Allura_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
        name="MyTabs"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FillterScreen"
        component={FillterScreen}
        options={{
          header: () => (
            <HeaderScreen product right={false} name={"Lọc sản phẩm"} />
          ),
        }}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          header: () => <HeaderScreen product right={true} />,
          title: "Chi tiết sản phẩm",
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          header: () => <HeaderScreen product right={false} />,
          title: "Giỏ hàng",
        }}
      />
      <Stack.Screen
        name="AllOrder"
        component={OrderScreen}
        options={{
          header: () => <HeaderScreen product right={false} />,
          title: "Đặt hàng",
        }}
      />
      <Stack.Screen name="OrderItemScreen" component={OrderItemScreen} />
      <Stack.Screen
        name="BuyScreen"
        component={BuyScreen}
        options={{ title: "Thanh toán" }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          header: () => <HeaderSearch product right={false} />,
          title: "Tìm kiếm sản phẩm",
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PayScreen"
        component={PayScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="ShipScreen"
        component={ShipScreen}
        options={{ title: "Vận chuyển" }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatApp}
        options={{ title: "Hỗ trợ" }}
      />
    </Stack.Navigator>
  );
};

export default TabStackScreen;
