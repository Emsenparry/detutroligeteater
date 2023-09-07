import axios from 'axios';
import React, { useEffect,  useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './ActorDetails.module.scss';


const ActorDetails = () => {
    const { actor_id } = useParams();
    const [actorDetails, setActorDetails] = useState({});

    useEffect(() => {
        const getData = async () => {
            try{
                const result = await axios.get(`http://localhost:4000/actors/${actor_id}`)
                setActorDetails(result.data)
            } catch(err) {
                console.error(err)
            }
        }
        getData()
    }, [actor_id])


  return (
    <>
    <section className={styles.actorDetails}>
    <div>
        <h2>Skuespillere</h2>
    </div>
    <div className={styles.grid}>
        {actorDetails ? (
            <div>
                {actorDetails.image && (
                    <img src={require(`../../../../Assets/Images/actors/${actorDetails.image}`)} alt="imageofactor" />
                )}
            </div>
        ) : null}
        <div>
            <div className={styles.gridTwo}>
                <div>
                    <h3>{actorDetails.name}</h3>
                    <p>{actorDetails.description}</p>
                </div>
            </div>
        </div>
    </div>
    </section>
    <div className={styles.allActorsBtn}>
    <button><Link to={`/actors`}>ALLE SKUESPILLERE</Link></button>
    </div>
    </>
  )
}

export default ActorDetails