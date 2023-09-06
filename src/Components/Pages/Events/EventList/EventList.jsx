import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Events.module.scss";
import { Link } from "react-router-dom";
import Filter from "../../../Partials/Filter/Filter";

const EventList = () => {
  const [eventList, setEventList] = useState([]);
  const [sortingOrder, setSortingOrder] = useState("");

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

  const handleSortingOrderChange = (newSortingOrder) => {
    setSortingOrder(newSortingOrder);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          `http://localhost:4000/events?&dir=${sortingOrder}&attributes=id,title,image%2Cstartdate%2Cstopdate`
        );
        setEventList(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [setEventList, sortingOrder]);

  return (
    <>
    <div className={styles.view}>
      <Filter
        sortingOrder={sortingOrder}
        onSortingOrderChange={handleSortingOrderChange}
      />
      <h2>Oversigt</h2>
    </div>
      
      {eventList &&
        eventList.map((item) => {
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
