import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";
import { useSelector } from "react-redux";

import {
  BoxSlider,
  Category,
  CategorySpecial,
  CategoryImage,
} from "../../components";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const HomeScreen = () => {
  const token = useSelector((state) => state.Auth.token);

  useEffect(() => {
    const setHeders = async () => {
      try {
        let token = await AsyncStorage.getItem("access_token");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      } catch (error) {
        console.log(error);
      }
    };

    setHeders();
  }, [token]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <BoxSlider />
      <View style={styles.aside}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Category />
          <CategorySpecial nameCategory={"Danh Mục Nổi Bật"} />
          <CategorySpecial nameCategory={"Danh Mục Sản Phẩm Mới"} />
          <CategoryImage />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
