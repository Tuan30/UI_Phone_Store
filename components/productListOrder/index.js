import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { FormatPrice } from "../../help";

const ProductListOrder = ({ item }) => {

  const navigation = useNavigation()

  const showProduct = () => {
    navigation.navigate("OrderItemScreen", {
      id: item?.id,
      item: item?.order_items
    });
  };

  return (
    <TouchableOpacity onPress={showProduct} style={styles.container}>
      <View style={styles.imgBox}>
        <Image style={styles.img} source={require("../../assets/images/iph.png")} />
      </View>

      <View style={styles.content}>
        <View style={styles.contentInfo}>
          <Text numberOfLines={1} style={styles.contentName}>ID Đơn hàng: {item.id}</Text>
          <Text numberOfLines={1} style={styles.contentInfo}>Mã code: {item.code}</Text>
          <Text numberOfLines={1} style={styles.contentPrice}>Giá tiền : {FormatPrice(item.amount)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductListOrder;
