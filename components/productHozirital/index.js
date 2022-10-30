import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { FormatPrice, SalePercent } from "../../help";
import IconHeart from "../iconHeart";
import { Ionicons } from "@expo/vector-icons";
import { IMAGES, MESSAGE } from "../../contains";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Favorite } from "../../store/slices/favorite";
import { useEffect } from "react";
import { AddCart } from "../../store/slices/cart";
import { showToast } from "../../help/showToast";

const ProductHozirital = ({ data, sale = true }) => {
  const [heart, setHeart] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const favoriteData = useSelector((state) => state.Favorite.items);

  useEffect(() => {
    favoriteData.indexOf(data.id) !== -1 ? setHeart(true) : setHeart(false);
  }, [favoriteData]);

  const onHeart = () => {
    setHeart(!heart);
    dispatch(Favorite({ id: data.id }));
  };

  const handleAddCart = () => {
    dispatch(AddCart({ id }));
    showToast(MESSAGE.addCartSuccess);
  };

  const showProduct = () => {
    navigation.navigate("ProductScreen", {
      id: data.id,
    });
  };

  useEffect(() => {
    favoriteData.indexOf(data.id) !== -1 ? setHeart(true) : setHeart(false);
  }, [favoriteData]);

  return (
    <TouchableOpacity onPress={showProduct} style={styles.container}>
      <View style={styles.product}>
        <View style={styles.boxImg}>
          <Image style={styles.imgItem} source={{ uri: data.image }} />
        </View>
        <View style={styles.titleCategory}>
          <Text numberOfLines={1} style={styles.name}>
            {data.name}
          </Text>
          <Text numberOfLines={1} style={styles.title}>
            {data.summary}
          </Text>
          {sale && (
            <Text style={styles.oldPrice}>{FormatPrice(data.price)}</Text>
          )}
          <Text style={styles.price}>{FormatPrice(data.price_sale_off)}</Text>
        </View>
        <View style={styles.iconLike}>
          <TouchableOpacity onPress={onHeart}>
            <IconHeart heart={heart} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleAddCart} style={styles.iconShoping}>
          <Ionicons name={"ios-cart"} size={24} color={"red"} />
        </TouchableOpacity>
        {sale && (
          <View style={styles.sale}>
            <Image style={styles.saleImg} source={IMAGES.sale} />
            <Text style={styles.salePr}>
              {SalePercent(data.price, data.price_sale_off)}
            </Text>
            <Text style={styles.saleOf}>GIẢM GIÁ</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProductHozirital;
