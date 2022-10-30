import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { IMAGES } from "../../contains";

const CheckFavorite = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={IMAGES.nodata} />
    </View>
  );
};

export default CheckFavorite;
