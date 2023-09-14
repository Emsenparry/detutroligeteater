import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Stars = () => {
  const [rating, setRating] = useState(null);
  const [rateColor] = useState(null);
  return (
    <>
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1
        return (
          <>
            <label>
              <input 
                type="radio"
                name="rate"
                value={currentRate}
                onClick={() => setRating(currentRate)}
              />

              <AiFillStar
                size={50}
                color={currentRate <= (rateColor || rating) ? "yellow" : "grey"}
              />
            </label>
          </>
        );
      })}
    </>
  );
};

export default Stars;
