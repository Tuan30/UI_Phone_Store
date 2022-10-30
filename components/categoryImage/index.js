import { View, Image, TouchableOpacity, Text } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import styles from "./styles";

const items = [
  {
    img: require("../../assets/images/slider/iphone.png"),
  },
];

const BoxSlider = () => {
  const renderItems = ({ item }) => {
    return (
      <View style={styles.slider}>
        <Image style={styles.img} source={item.img} />

        <TouchableOpacity>
          <View style={styles.text}>
            <Text style={styles.title}>Iphone 14</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={items}
        enableSnap={true}
        loop={true}
        renderItem={renderItems}
        sliderWidth={450}
        itemWidth={420}
      />
    </View>
  );
};

export default BoxSlider;
