import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSlider } from "../../store/slices/slider";

const BoxSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [entries, setEntries] = useState(dataSlider ? dataSlider.length : 0);
  const dataSlider = useSelector((state) => state.Slider.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSlider());
  }, []);

  const renderItems = ({ item }) => {
    return (
      <View style={styles.slider}>
        <Image style={styles.img} source={{ uri: item.image }} />
      </View>
    );
  };

  const pagination = () => {
    return (
      <Pagination
        dotsLength={entries}
        tappableDots={false}
        activeDotIndex={activeSlide}
        containerStyle={styles.pagiContainer}
        dotStyle={styles.dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.4}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={dataSlider}
        enableSnap={true}
        loop={true}
        renderItem={renderItems}
        sliderWidth={450}
        itemWidth={350}
        autoplay={true}
        autoplayInterval={4000}
        autoplayDelay={4000}
        layout={"default"}
        onSnapToItem={(index) => setActiveSlide(index)}
      />

      <View style={styles.pagination}>{pagination()}</View>
    </View>
  );
};

export default BoxSlider;
