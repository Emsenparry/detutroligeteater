import axios from "axios";
import { useAuth } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import React from "react";
import './Login.scss';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors } 
  } = useForm();
  const { loginData, setLoginData } = useAuth();


  const submitHandle = async (e) => {
    console.log(e);
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
            {errors.username && <span>Indtast dit brugernavn!</span>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Adgangskode"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="error">Indtast din adgangskode!</span>}
          </div>

          <div>
            <button type="submit">
              Login
            </button>
            <button type="reset">Anuller</button>
          </div>
        </form>
      ) : (
        <div>
            <p>Du er logget på som: {loginData.username}</p>
            <button onClick={() => Logout()}>Log ud</button>
        </div>
      )}
    </>
  );
};

export default Login;
