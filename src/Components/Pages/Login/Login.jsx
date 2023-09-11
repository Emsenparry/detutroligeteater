import axios from "axios";
import { useAuth } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import React from "react";
import './Login.scss';
import { Layout } from "../../Layout/Layout";

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

  const getUserData = async user_id => {
    const url = `http://localhost:4000/users/${user_id}`
    const result = await axios.get(url)
    return result
    // console.log(result);
  }

  const handleSessionData = async data => {
    if (data) {
      const user = await getUserData(data.user_id)
      console.log(user);
      data.user = `${user.data.firstname} ${user.data.lastname}`
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
    <Layout title="Login">
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
        <Layout title="Min side">
        <div className="logOutContainer">
            <p>Du er logget på som: {loginData.user}</p>
            <button onClick={() => Logout()} className="logOutBtn">Log ud</button>
        </div>
        </Layout>
      )}
      </Layout>
    </>
  );
};

export default Login;
