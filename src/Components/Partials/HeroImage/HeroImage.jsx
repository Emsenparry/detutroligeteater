import axios from "axios";
import React, { useEffect, useState } from "react";

const HeroImage = () => {
  const [HeroImage, setHeroImage] = useState([]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toDateString();
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          `http://localhost:4000/events?attributes=id%2Ctitle%2Cimage%2Cstartdate%2Cstopdate&limit=1`
        );
        setHeroImage(result.data);
      } catch (err) {
        console.error(`Kunne ikke indlæse ${err}`);
      }
    };
    getData();
  }, [setHeroImage]);

  return (
    <article>
      {HeroImage &&
        HeroImage.map((item) => {
          return (
            <figure key={item.id}>
              <figcaption>
                <p>{item.stage.name}</p>
                <p>
                {formatDate(item.startdate)} - {formatDate(item.stopdate)}
                </p>
              </figcaption>
            <img src={item.iamge} alt="heroimage" />
            </figure>
          );
        })}
    </article>
  );
};

export default HeroImage;
