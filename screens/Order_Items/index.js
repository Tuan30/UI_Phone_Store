import React from "react";
import { FlatList, ScrollView, View } from "react-native";

import styles from "./styles";
import { useRoute } from "@react-navigation/native";
import { DetailOrder } from "../../components";

const OrderItemScreen = () => {
  const route = useRoute();
  const dataItems = route.params;

  const renderItem = ({ item }) => {
    return(
      <View>
        <Text>{item.amount}</Text>
      </View>
    )
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={dataItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toSting()}
        />
      </View>
    </>
  );
};

export default OrderItemScreen;
