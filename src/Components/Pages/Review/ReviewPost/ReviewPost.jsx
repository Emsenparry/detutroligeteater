import axios from "axios";
import { useAuth } from "../../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Stars from "../../../Helpers/Stars";
import { useState } from "react";

const ReviewPost = (event_id) => {
  const { loginData } = useAuth();
  const [rating, setRating] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = async (data) => {
    const formData = new URLSearchParams();
    formData.append("event_id", data.event_id);
    formData.append("subject", data.subject);
    formData.append("comment", data.comment);
    formData.append("num_stars", rating);
    console.log(...formData);
    

    const options = {
      headers: {
        Authorization: `Bearer ${loginData.access_token}`,
      },
    };

    try {
      const result = await axios.post(
        `http://localhost:4000/reviews`,
        formData,
        options
      );
      if (result.data) {
        console.log(result.data);
      }
    } catch (err) {
      console.error(`Fejl i Review ${err}`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)}>
        <input type="hidden" value="1" {...register("event_id")} />
        <h2>Skriv en anmeldelse</h2>
        <div>
        <Stars rating={rating} setRating={setRating} />
        </div>
        <div>
          <input
            type="text"
            placeholder="Indtast en titel"
            {...register("subject", { required: true, maxLength: 200 })}
          />
          {errors.subject && (
            <>
              <span>Du skal skrive en titel!</span>
            </>
          )}
        </div>
        <div>
          <textarea
            placeholder="Skriv din kommentar her"
            {...register("comment", { required: true })}
          ></textarea>
          {errors.comment && <span>Du skal skrive en kommentar!</span>}
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    </>
  );
};

export default ReviewPost;
