import React, { useEffect } from "react";
import { View, Text, FlatList, Image } from "react-native";

import styles from "./styles";

const COMMENT = [
  {
    name: "Tuấn Nguyễn",
    avatar: require("../../assets/images/login/avatar.jpg"),
    data: "Sản phẩm rất chất lượng đáng đồng tiền",
  },
  {
    name: "Thu Hương",
    avatar: require("../../assets/images/login/avatar2.jpg"),
    data: "Chất lượng tốt ",
  },
  {
    name: "Đức Toàn",
    avatar: require("../../assets/images/login/avatar3.jpg"),
    data: "Chất lượng tốt ",
  },
];

const Comment = () => {
  const showItems = ({ item }) => {
    return (
      <View style={styles.conment}>
        <View style={styles.conment_avatar}>
          <Image style={styles.conment_avatar_img} source={item.avatar} />
        </View>
        <View style={styles.content}>
          <Text numberOfLines={1} style={styles.name}>
            {item.name}
          </Text>
          <Text numberOfLines={3} style={styles.data}>
            {item.data}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Nhận xét sản phẩm</Text>
        <FlatList
          data={COMMENT}
          renderItem={showItems}
          keyExtractor={(item) => item.name.toString()}
        />
      </View>
    </>
  );
};

export default Comment;
