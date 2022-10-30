import React, { useState } from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import { CheckCart } from "../../components";
import { Button, TextInput } from "react-native-paper";
import { COLORS } from "../../contains";
import { useDispatch } from "react-redux";

const InfoCartScreen = () => {
  const [code, setCode] = useState("");
  const [showCheckCart, setShowCheckCart] = useState(false);
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          label="Nhập mã đơn hàng của bạn"
          value={code}
          onChangeText={(text) => setCode(text)}
        />
        <View style={[styles.boxButton]}>
          <Button icon="check" mode="contained" color={COLORS.main}>
            <Text style={[styles.textColor]}>Kiểm tra đơn hàng</Text>
          </Button>
        </View>
      </View>
      {showCheckCart && <CheckCart items={items} />}
    </View>
  );
};

export default InfoCartScreen;
