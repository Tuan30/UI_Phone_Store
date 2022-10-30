import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import IconHeader from "../iconHeader";
import BoxSearch from "../boxSearch";

import styles from "./styles";

const Header = ({ icon, name, search = true }) => {
  let iconRight = "cart";
  switch (icon) {
    case "sort":
      iconRight = "sort";
      break;
    case "delete":
      iconRight = "delete";
      break;
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.top}>
          <IconHeader />
          <Text style={styles.title}>{name}</Text>
          <IconHeader name={iconRight} />
        </View>
        <TouchableOpacity>
          <View style={styles.bottom}>
            <BoxSearch />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Header;
