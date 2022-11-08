import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import { COLORS } from "../../contains";

const RatingComponent = ({ data, product = false }) => {

  const ratingCompleted = (rating) => {
    console.log(rating);
  };

  const color = product ? COLORS.pink : "white";

  return (
    <Rating
      type="custom"
      startingValue={data}
      ratingCount={5}
      imageSize={20}
      onFinishRating={ratingCompleted}
      readonly
      tintColor={color}
    />
  );
};

export default RatingComponent;
