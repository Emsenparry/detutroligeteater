import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from './EventDetails.module.scss';
import Review from "../../Review/Review";
import { formatDate } from "../../../Helpers/Helpers";

const EventDetails = () => {
  const [data, setData] = useState({});
  const [actorData, setActorData] = useState([]);
  const { event_id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const eventData = await axios.get(
          `http://localhost:4000/events/${event_id}`);
        console.log("Event Data:", eventData.data);
        
        const actorDataRes = await axios.get(
          `http://localhost:4000/actors?attributes=id, name, image`);

        setData(eventData.data);
        setActorData(actorDataRes.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [event_id]);

  return (
    <>
    <section className={styles.eventDetails}>
      {data ? (
        <>
          <div>
            {data.image && (
              <img
                src={require(`../../../../Assets/Images/events/large/${data.image}`)}
                alt="imageofevent"
              />
            )}
          </div>
          <article className={styles.eventInfo}>
            <div className={styles.grid}>
              <div className={styles.eventDates}>
                {data.stage ? <p className={styles.stageName}>{data.stage.name}</p> : null}
                <p className={styles.date}>
                  {formatDate(data.startdate, false)} -{" "}
                  {formatDate(data.stopdate, true)}
                </p>
              </div>

              <div className={styles.price}>
                <h2>BILLETPRIS: {data.price} DKK</h2>
              </div>
            </div>
            <hr />

            <div className={styles.buyBtn}>
              <div>
               <h3>{data.title}</h3> 
              </div>
              <div>
              <button className={styles.buy}>
              <Link to={`/buy`}>KØB BILLET</Link></button>
              </div>
            </div>

            {data.genre ? <p className={styles.genre}>{data.genre.name}</p> : null}
            <div>
              <p className={styles.description}>{data.description}</p>
              <p className={styles.minutes}>Varighed ca. {data.duration_minutes} minutter</p>
            </div>

            <span>
              <h4>Medvirkende</h4>
            </span>
          </article>

          {/* ACTORS */}
          <section className={styles.actors} >
            {actorData.slice(0, 5).map((actor) => (
              <article className={styles.border} key={actor.id}>
                <figure>
                  {actor.image && (
                    <img
                      src={require(`../../../../Assets/Images/actors/${actor.image}`)}
                      alt="imagesofactors"
                    />
                  )}
                </figure>
                <h4>{actor.name}</h4>
              </article>
            ))}
          </section>
        </>
      ) : null}
    </section>
    <section>
      <Review />
    </section>
    </>
  );
};

export default EventDetails;
