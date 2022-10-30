import React from "react";
import { View, Text } from "react-native";
import IconHeader from "../iconHeader";

import styles from "./styles";

const HeaderScreen = ({ product = false, right = true, name = true }) => {
  let iconRight = product ? "cart" : "sort";

  return (
    <View style={[styles.container, product && styles.background]}>
      <View style={styles.top}>
        <IconHeader name={"back"} product={product} right={right} />
        {right && <IconHeader name={iconRight} product />}
      </View>
    </View>
  );
};

export default HeaderScreen;
