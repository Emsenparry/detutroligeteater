import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { PriceToDK } from '../../Helpers/Helpers'

const NumberofTickets = () => {
  const [getTicket, setGetTicket] = useState({})
  const [numTickets, setNumTickets] = useState(0);
  const { event_id } = useParams()
  const {
    register,
  } = useForm();

  const NumTicketChange = (event) => {
    setNumTickets(event.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/events/${event_id}`)
        setGetTicket(response.data)
      } catch (err) {
        console.error(err)
      }
    }
    getData()
  }, [setGetTicket, event_id])


  return (
    <>
      {/* ANTAL BILETTER */}
      <div className="InfoResDiv">
        <label htmlFor="limit">Antal</label>
        <input
          type="number"
          id="limit"
          onClick={NumTicketChange}
          {...register("limit", { required: true, min: 1 })}
        />
        <div>
          <h3>Pris: {PriceToDK(getTicket.price * numTickets)}kr.</h3>
          <p>PRIS INKL. MOMS</p>
        </div>
      </div>
    </>
  )
}

export default NumberofTickets
