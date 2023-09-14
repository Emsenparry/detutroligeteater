import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./HomeEvents.module.scss";
import { Link } from "react-router-dom";
import { formatDate } from "../../../Helpers/Helpers";

const HomeEvents = () => {
  const [data, setData] = useState([]);

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
                    <div className={styles.top}>
                      <p className={styles.stageName}>{item.stage.name}</p>
                      <p className={styles.date}>
                        {formatDate(item.startdate, false)} -{" "}
                        {formatDate(item.stopdate, true)}
                      </p>
                      <hr />
                    </div>
                    <h3>{item.title}</h3>
                    <div className={styles.bottom}>
                      <p className={styles.genre}>{item.genre.name}</p>
                      <button>
                        <Link to={`/events/${item.id}`}>LÆS MERE</Link>
                      </button>
                      <button className={styles.buyBTN}>
                        <Link to={`/tickets/${item.id}`}>KØB BILLET</Link>
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
