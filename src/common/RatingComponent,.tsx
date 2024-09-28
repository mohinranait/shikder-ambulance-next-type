"use client";
import React from "react";
import StarRatings from "react-star-ratings";

interface Props {
  rating: number;
}

const RatingComponent: React.FC<Props> = ({ rating }) => {
  // const [rating, setRating] = useState<number>(0);

  // const changeRating = (newRating: number) => {
  //     setRating(4);
  // };

  // useEffect(() => {},[])

  return (
    <StarRatings
      rating={rating}
      starRatedColor="#FEBE42"
      starHoverColor="orange"
      // changeRating={changeRating}
      numberOfStars={5}
      name="rating"
      starDimension="16px"
      starSpacing="0px"
    />
  );
};

export default RatingComponent;
