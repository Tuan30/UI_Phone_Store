import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { FormatPrice } from "../../help";
import {
  RatingComponent,
  Quantify,
  ProductHozirital,
  Comment,
  ShowProduct,
} from "../../components";

import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";

import { fetchSingleProduct } from "../../store/slices/product";
import { fetchProductInCategory } from "../../store/slices/categories";
import { useRoute } from "@react-navigation/native";
import { showToast } from "../../help/showToast";
import { AddCart } from "../../store/slices/cart";
import { MESSAGE } from "../../contains";

const ProductScreen = () => {
  const [number, setNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const route = useRoute();
  const { id } = route.params;

  const product = useSelector((state) => state.Product.product);

  console.log("product", product)

  useEffect(() => {
    dispatch(fetchSingleProduct({ id })).then((respone) => {
      if (!respone.error) {
        setLoading(true);
        dispatch(
          fetchProductInCategory({
            id: respone.payload.category_id,
            limit: 4,
          })
        );
      } else {
        alert("Sản phẩm lỗi");
      }
    });
  }, []);

  const handleAddCart = ({ id }) => {
    dispatch(AddCart({ id, sum: number }));
    setNumber(1);
    showToast(MESSAGE.addCartSuccess);
  };
  return (
    <>
      <ScrollView style={styles.container}>
        <ShowProduct product={product} />
      </ScrollView>
      <View style={styles.add}>
        <Text style={styles.addItem}>{number} item</Text>
        <TouchableOpacity style={styles.addBuy} onPress={handleAddCart}>
          <Text style={styles.addBuyText}>Thêm vào giỏ hàng</Text>
          <Text style={styles.addBuyPrice}>
            {FormatPrice(number * product.price_sale_off)}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ProductScreen;
