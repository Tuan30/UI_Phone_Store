import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  Button,
  Dialog,
  Paragraph,
  Portal,
  Provider,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { CheckFavorite } from "../../common";
import { InputStyle, ProductList } from "../../components";
import { FormatPrice } from "../../help";
import { fetchAsyncBuy } from "../../store/slices/buy";
import { showToast } from "../../help/showToast";

import styles from "./styles";
import { RemoveAll } from "../../store/slices/cart";

const BuyScreen = () => {
  const router = useRoute();
  const cartItems = useSelector((state) => state.Cart.cart);
  const { total } = router.params;
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [code, setCode] = useState("");
  const navigation = useNavigation();

  const hideDialog = () => setVisible(false);

  const handleSuccess = () => {
    setVisible(false);
    dispatch(RemoveAll())
    navigation.navigate("Home");
  };

  const handlePay = () => {
    navigation.navigate("PayScreen");
  };

  const handleBuy = () => [
    dispatch(fetchAsyncBuy({ data: cartItems })).then((res) => {
      if (!res.error) {
        setCode(res.payload.code);
        setVisible(true);
      } else {
        navigation.navigate("Login");
      }
    }),
  ];

  if (cartItems.length === 0) {
    return <CheckFavorite />;
  }

  const high = () => {
    const [high, setHigh] = useState(220);
    if (item.length != 1) {
       setHigh = auto
    }
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: high }}>
        {cartItems.map((item) => (
          <ProductList key={item.id} item={item} />
        ))}
      </ScrollView>

      <View style={styles.fromTotal}>
        <View style={styles.form}>
          <InputStyle name={"Mã giảm giá ( nếu có )"} />
          <Text style={styles.salePrice}>Bạn đã được giảm:</Text>
        </View>
        <View style={styles.form}>
          <InputStyle name={"Phí vận chuyển"} value={"35k"} />
        </View>
        <View style={styles.formText}>
          <Text style={styles.text}>Phương thức thanh toán</Text>
          <TouchableOpacity onPress={handlePay}>
            <Text style={styles.salePrice}>Thanh toán trực tiếp</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sumALl}>
          <Text>Tổng thanh toán: </Text>
          <Text numberOfLines={1} style={styles.contentPrice}>
            {FormatPrice(total)}
          </Text>
        </View>
      </View>

      <Provider>
        <View>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Cảm ơn bạn đã mua hàng</Dialog.Title>
              <Dialog.Content>
                <Paragraph>Mã đơn hàng của bạn là : {code} </Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={handleSuccess}>Trở về</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </Provider>

      <View style={styles.apply}>
        <TouchableOpacity onPress={handleBuy} style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Mua hàng</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BuyScreen;
