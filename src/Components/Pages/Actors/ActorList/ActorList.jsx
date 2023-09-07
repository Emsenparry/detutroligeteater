import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./ActorList.module.scss";
import { Link } from "react-router-dom";

const ActorList = () => {
  const [actorList, setActorList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          `http://localhost:4000/actors?attributes=id, name, image, description`
        );
        setActorList(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [setActorList]);

  return (
    <section className={styles.actorList}>
        <h2>Skuespillere</h2>
      {actorList &&
        actorList.map((actor) => {
          return (
            <div>
              <div className={styles.grid}>
                <div>
                  <figure>
                    <img
                      src={require(`../../../../Assets/Images/actors/${actor.image}`)}
                      alt="imagesofactors"
                    />
                  </figure>
                </div>
                <figcaption>
                  <h3>{actor.name}</h3>
                  <p>{actor.description.substring(0, 370)}...</p>
                </figcaption>
                <div className={styles.readContainer}>
                  <button className={styles.read}>
                    <Link to={`/actors/${actor.id}`}>LÆS MERE</Link>
                  </button>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
    </section>
  );
};

export default ActorList;
