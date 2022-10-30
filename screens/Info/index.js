import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import { InfoList } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { CheckLogin } from "../../common";

const InfoScreen = () => {
  const navigation = useNavigation();

  const isLogin = useSelector((state) => state.Auth.isLogin);

  const goInfoShipScreen = () => {
    navigation.navigate("InfoShipScreen");
  };
  const goInfoCartScreen = () => {
    navigation.navigate("InfoCartScreen");
  };

  return (
    <>
      {isLogin ? (
        <View style={styles.container}>
          <InfoList name={"ship"} onPress={goInfoShipScreen} />
          <InfoList name={"cart"} onPress={goInfoCartScreen} />
        </View>
      ) : (
        <CheckLogin />
      )}
    </>
  );
};

export default InfoScreen;
