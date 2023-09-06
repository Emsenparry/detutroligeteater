import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Events.module.scss";
import { Link } from "react-router-dom";

const EventList = () => {
  const [eventList, setEventList] = useState([]);

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
          `http://localhost:4000/events?orderby=duration_minutes&attributes=id,title,image%2Cstartdate%2Cstopdate` 
        );
        setEventList(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [setEventList]);

  return (
  <>
      {eventList && eventList.map((item) => {
          return (
            <div className={styles.eventList} key={item.id}>
              <figure>
                <img
                  src={require(`../../../../Assets/Images/events/small/${item.image}`)}
                  alt="eventpictures"
                />
              </figure>
              <h3>{item.title}</h3>
              <div className={styles.textBox}>
                <p>{item.stage.name}</p>
                <p className={styles.date}>
                  {formatDate(item.startdate, false)} -{" "}
                  {formatDate(item.stopdate, true)}
                </p>
              </div>
              <div>
                <button className={styles.buy}>KØB BILLET</button>
                <button className={styles.readMore}>
                  <Link to={`/events/${item.id}`}>LÆS MERE</Link>
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default EventList;
