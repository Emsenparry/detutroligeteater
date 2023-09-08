import axios from "axios";
import { useAuth } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import React from "react";
import './Login.scss';

const Login = () => {
  const {
    register,
    handleSubmit,
    reset, 
    formState: { errors } 
  } = useForm();
  const { loginData, setLoginData } = useAuth();


  const submitHandle = async (e) => {
    const formData = new URLSearchParams();
    formData.append("username", e.username);
    formData.append("password", e.password);
    const endpoint = `http://localhost:4000/login`;

    try {
      const result = await axios.post(endpoint, formData);
      handleSessionData(result.data);
    } catch (err) {
      console.error(`Kunne ikke logge ind: ${err}`);
    }
  };

  const handleSessionData = (data) => {
    if (data) {
      sessionStorage.setItem("token", JSON.stringify(data));
      setLoginData(data);
    }
  };

  

  const Logout = () => {
    sessionStorage.removeItem("token");
    setLoginData("");
    reset();
  };

  return (
    <>
      {!loginData ? (
        <form method="POST" onSubmit={handleSubmit(submitHandle)} className="loginForm">
          <div className="formGroup">
            <input
              type="text"
              placeholder="Brugernavn"
              {...register("username", { required: true })}
            />
            {errors.username && <p className="error">Indtast dit brugernavn!</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Adgangskode"
              {...register("password", { required: true })}
            />
            {errors.password && <p className="error">Indtast din adgangskode!</p>}
          </div>

          <div>
            <button type="submit">
              Login
            </button>
          </div>
        </form>
      ) : (
        <div className="logOutContainer">
            <p>Du er logget på som: </p>
            <button onClick={() => Logout()} className="logOutBtn">Log ud</button>
        </div>
      )}
    </>
  );
};

export default Login;
