import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
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
import { SelectList } from "react-native-dropdown-select-list";

const BuyScreen = () => {
  const router = useRoute();
  const cartItems = useSelector((state) => state.Cart.cart);
  const { total } = router.params;
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [code, setCode] = useState("");
  const navigation = useNavigation();

  const hideDialog = () => setVisible(false);

  const [selected, setSelected] = React.useState("Thanh toan truc tiep");
  
  const data = [
      {key:'1', value:'Thanh toán trực tuyến'},
      {key:'2', value:'Thanh toán Momo'},
      {key:'3', value:'Thanh toán Zalo Pay'},
      {key:'4', value:'Thanh toán Pay Pal'},
  ]

  const handleSuccess = () => {
    setVisible(false);
    dispatch(RemoveAll())
    navigation.navigate("Home");
  };

  const handlePay = () => {
    navigation.navigate("PayScreen");
  };

  const handleShip =() => {
    navigation.navigate("ShipScreen");
  }
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

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        {cartItems.map((item) => (
          <ProductList key={item.id} item={item} />
        ))}
      </ScrollView>

      <View style={styles.fromTotal}>
        <View style={styles.form}>
          <InputStyle name={"Mã giảm giá ( nếu có )"} />
          <Text style={styles.salePrice}>Bạn đã được giảm:</Text>
        </View>
        <View style={styles.formShip}>
          <Text style={styles.text}>Phí vận chuyển </Text>
          <TouchableOpacity onPress={handleShip}>
            <Text style={styles.text}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formText}>
          <Text style={styles.text}>Phương thức thanh toán</Text>
          <TouchableOpacity onPress={handlePay}>
            <SelectList 
              setSelected={(val) => setSelected(val)} 
              data={data}
              save="value"
              placeholder="Thanh toán trực tuyến"
              boxStyles={styles.boxSlider}
              search={false}
            />
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
