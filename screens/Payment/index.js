import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./styles";
import { PaymentMomo } from "../../components";

const PayScreen = () => {

  const handlePaymentMomo = () => {
    return <PaymentMomo />
  }

  return (
    <View style={styles.container}>
      <View style={styles.pay}>
        <TouchableOpacity onPress={handlePaymentMomo}>
          <View style={styles.box}>
            <Image
              style={styles.img}
              source={require("../../assets/images/Payment/MoMo_Logo.png")}
            />
            <Text style={styles.text}>Thanh toán bằng Momo</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.box}>
        <Image
              style={styles.img}
              source={require("../../assets/images/Payment/Zalo_Logo.png")}
            />
          <Text style={styles.text}>Thanh toán bằng Zalo Pay</Text>
        </View>
        <View style={styles.box}>
        <Image
              style={styles.img}
              source={require("../../assets/images/Payment/PayPal_Logo.png")}
            />
          <Text style={styles.text}>Thanh toán bằng PayPal</Text>
        </View>
      </View>
    </View>
  );
};

export default PayScreen;
