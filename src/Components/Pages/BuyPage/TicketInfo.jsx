import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { formatDate } from '../../Helpers/Helpers'

const TicketInfo = () => {
    const [getTicket, setGetTicket] = useState([])
    const {event_id} = useParams()

    useEffect(() => {
        const getData = async () => {
            try{
                const result = await axios.get(`http://localhost:4000/events/${event_id}`)
                setGetTicket(result.data)
            } catch(err) {
                console.error(err)
            }
        }
        getData()
    }, [event_id])
   return (
    <div>
    {getTicket.image && (
      <img
        src={require(`../../../Assets/Images/events/large/${getTicket.image}`)}
        alt="imageofevent"
      />
    )}
    <div>
      <article>
        <h3>{getTicket.title}</h3>
        {getTicket.stage ? <p>{getTicket.stage.name}</p> : null}
        {formatDate(getTicket.startdate, false)}
      </article>
    </div>
  </div>
  )
}

export default TicketInfo