import React, { useEffect, useState } from "react";
import { Layout } from "../../Layout/Layout";
import axios from "axios";
import { formatDate } from "../../Helpers/Helpers";
import { useParams } from "react-router-dom";

const BuyPage = () => {
  const [getTicket, setGetTicket] = useState({});
  const { event_id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          `http://localhost:4000/events/${event_id}`
        );
        setGetTicket(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [setGetTicket, event_id]);

  return(
    <Layout>
      {getTicket ? (
        <>
          <h2>{getTicket.title}</h2>
          <div>
            {getTicket.stage ? <p>{getTicket.stage.name}</p> : null}
            <p>{formatDate(getTicket.startdate, true)}</p>
          </div>
        </>
      ) : null}
    </Layout>
  )
};
export default BuyPage;
