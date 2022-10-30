import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { IMAGES } from "../../contains";

const CheckLogin = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={IMAGES.resetPas} />
      <Text style={styles.text}>Chức năng yêu cầu đăng nhập tài khoản</Text>
    </View>
  );
};

export default CheckLogin;
