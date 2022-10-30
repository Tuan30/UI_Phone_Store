import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import { Product } from "../../components";

import styles from "./styles";

const FavoriteScreen = () => {
  const product = useSelector((state) => state.Product.items);
  const favoriteData = useSelector((state) => state.Favorite.items);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let itemsFavorites = product.filter(
      (item) => favoriteData.indexOf(item.id) !== -1
    );
    setItems(itemsFavorites);
  }, [favoriteData, product]);

  const showItems = ({ item }) => {
    return <Product data={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.aside}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={items}
          renderItem={showItems}
          keyExtractor={(item) => item.name.toString()}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default FavoriteScreen;
