import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./HeroImage.module.scss";

const HeroImage = () => {
  const [HeroImage, setHeroImage] = useState([]);

  const formatDate = (dateString, includeYear) => {
    const date = new Date(dateString);
    const options = {
      month: "short",
      day: "numeric",
    };
    if (includeYear) {
      options.year = "numeric";
    }
    return date.toLocaleDateString("da-DK", options);
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
    <article className={styles.showCase}>
      {HeroImage &&
        HeroImage.map((item) => {
          return (
            <figure key={item.id}>
              <figcaption>
                <p className={styles.stageName}>{item.stage.name}</p>
                <p className={styles.date}>
                  {formatDate(item.startdate, false)} - {formatDate(item.stopdate, true)}
                </p>
                <hr />
                <h3>{item.title}</h3>
                <p className={styles.genre}>{item.genre.name}</p>
              </figcaption>
              <img
                src={require(`../../../Assets/Images/events/medium/${item.image}`)}
                alt="heroimage"
              />
            </figure>
          );
        })}
    </article>
  );
};

export default HeroImage;
