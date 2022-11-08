import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { fetchProductInCategory } from "../../store/slices/categories";
import { useEffect } from "react";
import RatingComponent from "../rating";
import { FormatPrice } from "../../help";
import Quantify from "../quantify";
import Comment from "../comment";
import ProductHozirital from "../productHozirital";
import { fetchSingleProduct } from "../../store/slices/product";

const ShowProduct = ({ product }) => {
  const [number, setNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const route = useRoute();
  const { id } = route.params;
  const [isSeeMore, setIsSeeMore] = useState(false);

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

  const handleShow = () => {
    setIsSeeMore(!isSeeMore);
  };

  const showItems = ({ item }) => {
    return <ProductHozirital data={item} />;
  };
  const handleChangeNumber = (val) => {
    setNumber(val);
  };
  return (
    <>
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
          <Text style={[styles.title_source, isSeeMore && styles.active]}>
            {product.description}{" "}
          </Text>
          <TouchableOpacity style={styles.title_text} onPress={handleShow}>
            <Text style={styles.text}>Xem thêm</Text>
          </TouchableOpacity>
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
    </>
  );
};

export default ShowProduct;
