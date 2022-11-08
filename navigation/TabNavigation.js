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
} from "../screens";
import { Header, HeaderNoSearch, HeaderScreen, HeaderSearch } from "../components";

const Stack = createStackNavigator();

const TabStackScreen = () => {
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
          title: "Gio Hang",
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
        name="PayScreen"
        component={PayScreen}
        options={{title: ""}}
      />
    </Stack.Navigator>
  );
};

export default TabStackScreen;
