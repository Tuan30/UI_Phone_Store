import React, { useState } from "react";
import { Rating } from "@rneui/themed";
import { COLORS } from "../../contains";

const RatingComponent = ({ data, product = true }) => {
  const [rating, setRating] = useState(3);

  const ratingCompleted = (rating) => {
    console.log(rating);
  };

  const color = product ? COLORS.pink : "white";

  return (
    <Rating
      type="custom"
      startingValue={data}
      ratingCount={5}
      imageSize={10}
      onFinishRating={ratingCompleted}
      readonly
      tintColor={color}
    />
  );
};

export default RatingComponent;
