import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Stars = ({ rating, setRating }) => {
  // const [rating, setRating] = useState(null);
  const [rateColor] = useState(null);
  return (
    <>
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;
        return (
          <React.Fragment key={index}>
            <label>
              <input
                type="radio"
                name="rate"
                value={currentRate}
                checked={currentRate === rating} // Use the rating prop to set checked state
                onChange={() => setRating(currentRate)}
              />

              <AiFillStar
                size={50}
                color={currentRate <= (rateColor || rating) ? "yellow" : "grey"}
              />
            </label>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Stars;
