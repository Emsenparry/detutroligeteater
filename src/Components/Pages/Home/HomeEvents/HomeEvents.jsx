import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./HomeEvents.module.scss";
import { Link } from "react-router-dom";

const HomeEvents = () => {
  const [data, setData] = useState([]);

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
          `http://localhost:4000/events/?orderby=duration_minutes&limit=3&attributes=id,title,image%2Cstartdate%2Cstopdate`
        );
        setData(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [setData]);

  return (
    <>
      <article className={styles.homeEvents}>
        {data &&
          data.map((item) => {
            return (
              <>
                <figure key={item.id}>
                  <img
                    src={require(`../../../../Assets/Images/events/small/${item.image}`)}
                    alt="events"
                  />
                  <figcaption>
                    <p className={styles.stageName}>{item.stage.name}</p>
                    <p className={styles.date}>
                      {formatDate(item.startdate, false)} -{" "}
                      {formatDate(item.stopdate, true)}
                    </p>
                    <hr />
                    <h3>{item.title}</h3>
                    <p className={styles.genre}>{item.genre.name}</p>

                    <div className={styles.btnContainer}>
                      <button>
                        <Link to={`/events/${item.id}`}>LÆS MERE</Link>
                      </button>
                      <button className={styles.buyBTN}>
                        <Link to={`/events/${item.id}`}>KØB BILLET</Link>
                      </button>
                    </div>
                  </figcaption>
                </figure>
              </>
            );
          })}
      </article>
      <div className={styles.eventsBTN}>
        <button>
          <Link to={`/events`}>SE ALLE FORESTILLINGER</Link>
        </button>
      </div>
    </>
  );
};

export default HomeEvents;
