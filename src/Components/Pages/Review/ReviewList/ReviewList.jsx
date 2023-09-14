import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './ReviewList.module.scss';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { formatDate } from '../../../Helpers/Helpers';

const ReviewList = () => {
  const [reviewList, setReviewList] = useState([])
  const { event_id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try{
        const result = await axios.get(`http://localhost:4000/reviews/${event_id}`)
        setReviewList(result.data)

      } catch(err) {
        console.error(err)
      }
    }
    getData()
  }, [event_id])


  return (
    <>
        <section className={styles.reviewSection}>
            <h2>ANMELDELSER</h2>
            <div className={styles.reviewWrapper}>
        {reviewList && reviewList.map(data => {
            return(
                <article key={data.id}>
                  <h2>{data.subject}</h2>
                    <NumStars num_stars={data.num_stars}/>
                    <h5>{formatDate(data.created_at, true)}</h5>
                    <h3>{data.user.firstname} {data.user.lastname}</h3>
                    <p>{data.comment}</p>
                </article>    
            )
        })}
            </div>    
            </section>
        </>
  )
}


const NumStars = (props) => {
  const [ numStars ] = useState(new Array(5).fill(''));
  
  return(
      <div>
          {numStars && numStars.map((star, i) => {
              return(
                  <div key={i}>
                  {i > props.num_stars - 1 ? 
                  (<>
                    <AiOutlineStar />  
                  </>) 
                  : <AiFillStar />}
                   </div>   
              )
          })}
      </div>
  )
}

export default ReviewList