import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Product } from "../../components";

import styles from "./styles";
import { useDispatch } from "react-redux";

import { fetchProduct } from "../../store/slices/product";
import CheckFavorite from "../../common/checkFavorite";

import HighlightText from "@sanar/react-native-highlight-text";

const InfoCartScreen = () => {
  const route = useRoute();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [items, setItems] = useState({});
  const search = route.params;

  useEffect(() => {
    setLoading(true);
    dispatch(fetchProduct({ search })).then((res) => {
      if (!res.error) {
        setLoading(false);
        setItems(res.payload.data);
      }
    });
  }, [search]);

  const HighLightName = (string) => {
    return (
      <HighlightText
        highlightStyle={{ backgroundColor: "yellow" }}
        searchWords={[search]}
        textToHighlight={string}
      />
    );
  };

  const showItems = ({ item }) => {
    let product = {
      ...item,
      name: HighLightName(item.name),
    };
    return <Product data={product} />;
  };

  return (
    <>
      {items.length > 0 ? (
        <View style={styles.container}>
          <View style={styles.aside}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={items}
              renderItem={showItems}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
            />
          </View>
        </View>
      ) : (
        <CheckFavorite />
      )}
    </>
  );
};

export default InfoCartScreen;
