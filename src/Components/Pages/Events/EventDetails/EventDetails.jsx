import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const [data, setData] = useState({});
  const [actorData, setActorData] = useState([]); // State to store actor data
  const { event_id } = useParams();

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
        const eventData = await axios.get(
          `http://localhost:4000/events/${event_id}`
        );
        const actorDataRes = await axios.get(
          `http://localhost:4000/actors?attributes=id, name, image`
        );

        setData(eventData.data);
        setActorData(actorDataRes.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [event_id]);

  return (
    <section>
      {data ? (
        <>
          <div>
            {data.image && (
              <img
                src={require(`../../../../Assets/Images/events/large/${data.image}`)}
                alt=""
              />
            )}
          </div>
          <article>
            <div>
              <div>
                {data.stage ? <p>{data.stage.name}</p> : null}
                <p>
                  {formatDate(data.startdate, false)} -{" "}
                  {formatDate(data.stopdate, true)}
                </p>
              </div>
              <div>
                <h2>BILLETPRIS: {data.price} DKK</h2>
              </div>
            </div>
            <div>
              <hr />
              <h3>{data.title}</h3>
              {data.genre ? <p>{data.genre.name}</p> : null}
            </div>
            <div>
              <p>{data.description}</p>
              <p>Varighed ca. {data.duration_minutes} minutter</p>
            </div>
            <span>
              <h4>Medvirkende</h4>
            </span>
          </article>
          <section>
            {actorData.map((actor) => (
              <article key={actor.id}>
                <figure>
                  {actor.image && (
                    <img
                      src={require(`../../../../Assets/Images/actors/${actor.image}`)}
                      alt=""
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
  );
};

export default EventDetails;
