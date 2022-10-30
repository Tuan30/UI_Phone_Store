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
  const productInCategory = useSelector((state) => state.Categories.products);

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

  const showItems = ({ item }) => {
    return <ProductHozirital data={item} />;
  };

  const handleAddCart = ({ id }) => {
    dispatch(AddCart({ id, sum: number }));
    setNumber(1);
    showToast(MESSAGE.addCartSuccess);
  };

  const handleChangeNumber = (val) => {
    setNumber(val);
  };
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.product}>
          <View style={styles.productImg}>
            <Image style={styles.img} source={{ uri: product.image }} />
          </View>
          <View style={styles.productContent}>
            <View>
              <Text numberOfLines={2} style={styles.name}>
                {product.name}
              </Text>
            </View>
            <View>
              <RatingComponent product={true} />
            </View>
            <View>
              <Text style={styles.oldPrice}>{FormatPrice(product.price)}</Text>
            </View>
            <View style={styles.price}>
              <Text style={styles.priceText}>
                {FormatPrice(product.price_sale_off)}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.view}>
          <View style={styles.view_main}>
            <Text style={styles.title}> Thông tin sản phẩm </Text>
            <Text style={styles.title_source}> {product.description} </Text>
          </View>
          <View style={styles.view_main}>
            <Text style={styles.title}> Số lượng </Text>
            <Quantify
              handleChangeNumber={(val) => handleChangeNumber(val)}
              quantity={number}
            />
          </View>
          <View style={styles.view_main}>
            <Text style={styles.title}> Sản phẩm liên quan </Text>
            <View style={styles.boxProduct}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={productInCategory}
                renderItem={showItems}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View>
            <Comment />
          </View>
        </View>
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
