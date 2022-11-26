import { View, FlatList } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { ProductListOrder } from "../../components";
import { fetchAsyncOrder } from "../../store/slices/order";
import { CheckLogin } from "../../common";

const OrderScreen = () => {
  const orderItmes = useSelector((state) => state.Order.order);
  const isLogin = useSelector((state) => state.Auth.isLogin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncOrder());
  });

  const renderItem = ({ item }) => {
    return <ProductListOrder item={item} />;
  };

  return (
    <>
      {isLogin ? (
        <View style={styles.container}>
          <FlatList
            data={orderItmes}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      ) : (
        <CheckLogin />
      )}
    </>
  );
};

export default OrderScreen;
