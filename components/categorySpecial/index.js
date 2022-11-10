import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";
import RatingComponent from "../rating";
import { FormatPrice } from "../../help";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { fetchProduct } from "../../store/slices/product";

const CategorySpecial = ({ nameCategory }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let result;
    switch (nameCategory) {
      case "Danh Mục Nổi Bật":
        result = dispatch(fetchProduct({ special: true, name: "itemsSpec" }));
        break;
      case "Danh Mục Sản Phẩm Mới":
        result = dispatch(fetchProduct({ is_new: true, name: "itemsNew" }));
        break;

      default:
        break;
    }
    result.then((res) => {
      if (!res.error) {
        setItems(res.payload.data);
        setLoading(false);
      }
    });
  }, []);

  const goProduct = (id) => {
    navigation.navigate("ProductScreen", {
      id: id,
    });
  };

  const showItems = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => goProduct(item.id)} style={styles.box}>
        <View style={styles.boxCategory}>
          <Image style={styles.imgItem} source={{ uri: item.image }} />
        </View>
        <View style={styles.info}>
          <Text numberOfLines={1} style={[styles.infoName]}>
            {item.name}
          </Text>
          <Text numberOfLines={2}>{item.summary}</Text>
          <Text numberOfLines={1}><RatingComponent data={item.rating} /></Text>
          <Text numberOfLines={1} style={[styles.infoPrice]}>
            {FormatPrice(item.price)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{nameCategory}</Text>
      </View>
      <FlatList
        data={items}
        renderItem={showItems}
        keyExtractor={(item) => item.name.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategorySpecial;
